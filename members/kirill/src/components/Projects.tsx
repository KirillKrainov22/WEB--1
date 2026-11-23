import { useEffect, useState } from 'react';
import { fetchRepositories, getErrorMessage } from '../api/github';
import type { Repository } from '../types';
import ProjectCard from './ProjectCard';
import styles from '../App.module.css';

type ProjectsState =
  | { status: 'loading' }
  | { status: 'success'; repositories: Repository[] }
  | { status: 'error'; message: string };

export default function Projects() {
  const [state, setState] = useState<ProjectsState>({ status: 'loading' });
  const [query, setQuery] = useState('');
  const [request, setRequest] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const signal = AbortSignal.any([controller.signal, AbortSignal.timeout(15_000)]);
    let active = true;

    fetchRepositories(signal).then(repositories => {
      if (active) setState({ status: 'success', repositories });
    }).catch((error: unknown) => {
      if (active) setState({ status: 'error', message: getErrorMessage(error) });
    });

    return () => {
      active = false;
      controller.abort();
    };
  }, [request]);

  function reload() {
    setState({ status: 'loading' });
    setRequest(value => value + 1);
  }

  const loading = state.status === 'loading';
  const search = query.trim().toLocaleLowerCase('ru-RU');
  const repositories = state.status === 'success' ? state.repositories : [];
  const filtered = repositories.filter(repository =>
    `${repository.name} ${repository.description ?? ''}`.toLocaleLowerCase('ru-RU').includes(search),
  );
  const message = loading ? 'Загрузка…'
    : state.status === 'error' ? state.message
    : filtered.length === 0 ? 'Ничего не найдено'
    : search ? `Найдено проектов: ${filtered.length} из ${repositories.length}.`
    : `Показано проектов: ${filtered.length}.`;

  return (
    <section className={`${styles.section} ${styles.projects}`} id="projects" aria-labelledby="projects-title">
      <div className={styles.projects__heading}>
        <div>
          <p className={styles.projects__eyebrow}>GitHub / KirillKrainov22</p>
          <h2 className={`${styles.section__title} ${styles.projects__title}`} id="projects-title">Мои проекты</h2>
        </div>
        <button className={`${styles.button} ${styles.button_outline}`} id="projects-refresh"
          type="button" disabled={loading} onClick={reload}>Обновить</button>
      </div>
      <p className={styles.projects__intro}>Мои последние публичные репозитории на GitHub. Здесь можно найти проект по названию или описанию.</p>
      <label className={styles.projects__label} htmlFor="projects-search">Поиск проектов</label>
      <input className={styles.projects__search} id="projects-search" type="search"
        placeholder="Например, WEB" aria-controls="projects-list" disabled={state.status !== 'success'}
        value={query} onChange={event => setQuery(event.target.value)} />
      <div className={styles.projects__feedback}>
        <p className={styles.projects__status} id="projects-status" role="status" aria-live="polite">{message}</p>
        {state.status === 'error' && (
          <button className={`${styles.button} ${styles.button_outline} ${styles.retry}`} id="projects-retry"
            type="button" onClick={reload}>Повторить</button>
        )}
      </div>
      <div className={styles.projects__list} id="projects-list" aria-busy={loading}>
        {filtered.map(repository => <ProjectCard key={repository.id} repository={repository} />)}
      </div>
    </section>
  );
}
