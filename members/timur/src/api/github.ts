import type { Repository } from "../types";

function isRepository(value: unknown): value is Repository {
  if (typeof value !== "object" || value === null) return false;
  const repo = value as Record<string, unknown>;
  return (
    typeof repo.id === "number" &&
    typeof repo.name === "string" &&
    (repo.description === null || typeof repo.description === "string") &&
    (repo.language === null || typeof repo.language === "string") &&
    typeof repo.html_url === "string" &&
    repo.html_url.startsWith("https://github.com/")
  );
}

export async function loadRepositories(
  signal: AbortSignal,
): Promise<Repository[]> {
  const response = await fetch(
    "https://api.github.com/users/KutuevTimur/repos?sort=updated&per_page=100",
    { signal },
  );
  if (!response.ok) throw new Error(`GitHub API: ${response.status}`);
  const data: unknown = await response.json();
  if (!Array.isArray(data) || !data.every(isRepository))
    throw new Error("Некорректный ответ GitHub API");
  return data;
}
