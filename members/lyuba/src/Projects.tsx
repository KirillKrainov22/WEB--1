import { useEffect, useState } from 'react';
import styles from './App.module.css';
interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
}
type LoadState = { status: 'loading' } | { status: 'error'; message: string } | { status: 'ready'; projects: Repository[] };
function isRepository(value: unknown): value is Repository {
  if (typeof value !== 'object' || value === null) return false;
  const item = value as Record<string, unknown>;
  if (typeof item.html_url !== 'string') return false;
  let url: URL;
  try { url = new URL(item.html_url); } catch { return false; }
  return typeof item.id === 'number' && typeof item.name === 'string'
    && url.protocol === 'https:' && url.hostname === 'github.com'
    && (item.description === null || typeof item.description === 'string')
    && (item.language === null || typeof item.language === 'string');
}
function ProjectCard({ project }: { project: Repository }) {
  return <article className={styles['lyuba-project']}>
    <h3><a className={styles['lyuba-project__link']} href={project.html_url}>{project.name}</a></h3>
    <p className={styles['lyuba-project__description']}>{project.description || 'Описание пока не добавлено'}</p>
    <p className={styles['lyuba-project__language']}>{project.language || 'Язык не указан'}</p>
  </article>;
}
export default function Projects() {
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState<LoadState>({ status: 'loading' });
  useEffect(() => {
    const controller = new AbortController();
    let ignore = false;
    async function load() {
      setResult({ status: 'loading' });
      try {
        const response = await fetch('https://api.github.com/users/LuCh-Ans/repos?sort=updated&per_page=100', { signal: controller.signal });
        if (!response.ok) throw new Error(`GitHub вернул ошибку ${response.status}`);
        const data: unknown = await response.json();
        if (!Array.isArray(data) || !data.every(isRepository)) throw new Error('Неверный ответ GitHub');
        if (!ignore) setResult({ status: 'ready', projects: data });
      } catch {
        if (!ignore) setResult({ status: 'error', message: 'Не удалось загрузить проекты с GitHub. Попробуйте ещё раз.' });
      }
    }
    void load();
    return () => { ignore = true; controller.abort(); };
  }, [attempt]);
  const loading = result.status === 'loading';
  return <section className={styles['lyuba-projects']} aria-labelledby="projects-title" aria-busy={loading}>
    <div className={styles['lyuba-projects__head']}>
      <h2 className={styles['lyuba-title']} id="projects-title">Мои проекты</h2>
      <button className={styles.button + ' ' + styles.button_outline} type="button" disabled={loading}
        onClick={() => { setResult({ status: 'loading' }); setAttempt(value => value + 1); }}>
        {result.status === 'error' ? 'Повторить' : 'Обновить'}
      </button>
    </div>
    {result.status === 'error' ? <p role="alert">{result.message}</p> :
      <p role="status">{result.status === 'loading' ? 'Загрузка…' : result.projects.length ? `Проектов: ${result.projects.length}` : 'Ничего не найдено'}</p>}
    <div className={styles['lyuba-projects__list']}>
      {result.status === 'ready' && result.projects.map(project => <ProjectCard key={project.id} project={project} />)}
    </div>
  </section>;
}
