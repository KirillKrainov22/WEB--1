import type { Repository } from "../types";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }: { project: Repository }) {
  return (
    <article className={styles["project-card"]}>
      <h3>
        <a href={project.html_url}>{project.name}</a>
      </h3>
      <p>{project.description || "Описание пока не добавлено"}</p>
      <p className={styles["project-language"]}>
        {project.language || "Язык не указан"}
      </p>
    </article>
  );
}
