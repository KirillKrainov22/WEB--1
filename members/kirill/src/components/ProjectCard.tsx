import type { Repository } from '../types';
import styles from '../App.module.css';

const dateFormatter = new Intl.DateTimeFormat('ru-RU');

export default function ProjectCard({ repository }: { repository: Repository }) {
  const updated = new Date(repository.updated_at);
  return (
    <article className={styles.project}>
      <h3 className={styles.project__title}>
        <a className={styles.project__link} href={repository.html_url} target="_blank" rel="noopener noreferrer">
          {repository.name}
        </a>
      </h3>
      <p className={styles.project__description}>{repository.description || 'Описание пока не добавлено.'}</p>
      <div className={styles.project__details}>
        <span>{repository.language || 'Язык не указан'}</span>
        <span>Звёзды: {repository.stargazers_count}</span>
      </div>
      <p className={styles.project__updated}>
        {Number.isNaN(updated.getTime()) ? 'Дата обновления не указана' : `Обновлён ${dateFormatter.format(updated)}`}
      </p>
    </article>
  );
}
