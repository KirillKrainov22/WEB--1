import type { Repository } from '../types';

const API_URL = 'https://api.github.com/users/KirillKrainov22/repos?sort=updated&per_page=100';

function isRepository(value: unknown): value is Repository {
  if (typeof value !== 'object' || value === null) return false;
  const repo = value as Record<string, unknown>;
  return typeof repo.id === 'number'
    && typeof repo.name === 'string'
    && typeof repo.html_url === 'string'
    && repo.html_url.startsWith('https://github.com/')
    && (repo.description === null || typeof repo.description === 'string')
    && (repo.language === null || typeof repo.language === 'string')
    && typeof repo.stargazers_count === 'number'
    && typeof repo.updated_at === 'string';
}

export async function fetchRepositories(signal: AbortSignal): Promise<Repository[]> {
  const response = await fetch(API_URL, {
    headers: { Accept: 'application/vnd.github+json' },
    signal,
  });
  if (!response.ok) {
    if (response.status === 403 || response.status === 429) {
      throw new Error('GitHub временно ограничил доступ. Повторите попытку позже.');
    }
    if (response.status === 404) {
      throw new Error('Аккаунт GitHub не найден. Попробуйте загрузить проекты позже.');
    }
    throw new Error(`Не удалось загрузить проекты. Ошибка GitHub: ${response.status}.`);
  }
  const data: unknown = await response.json();
  if (!Array.isArray(data) || !data.every(isRepository)) {
    throw new Error('GitHub вернул неожиданный ответ. Повторите попытку.');
  }
  return data;
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error && error.name === 'TimeoutError') {
    return 'GitHub долго не отвечает. Повторите попытку.';
  }
  if (error instanceof TypeError) {
    return 'Не удалось связаться с GitHub. Проверьте интернет и повторите попытку.';
  }
  if (error instanceof SyntaxError) {
    return 'Не удалось прочитать ответ GitHub. Повторите попытку.';
  }
  return error instanceof Error ? error.message : 'Не удалось загрузить проекты. Повторите попытку.';
}
