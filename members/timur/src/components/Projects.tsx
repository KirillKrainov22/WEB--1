import common from "../App.module.css";
import { useEffect, useState } from "react";
import { loadRepositories } from "../api/github";
import type { Repository } from "../types";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

type ProjectsState =
  | { status: "loading" }
  | { status: "ready"; projects: Repository[] }
  | { status: "error"; message: string };

export default function Projects() {
  const [state, setState] = useState<ProjectsState>({ status: "loading" });
  const [request, setRequest] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    setState({ status: "loading" });
    loadRepositories(controller.signal)
      .then((projects) => {
        if (!controller.signal.aborted) setState({ status: "ready", projects });
      })
      .catch(() => {
        if (!controller.signal.aborted)
          setState({
            status: "error",
            message:
              "Не удалось загрузить проекты. Проверьте подключение и попробуйте ещё раз.",
          });
      });
    return () => controller.abort();
  }, [request]);
  return (
    <section
      className={`${styles.projects} ${common.wrap} ${common["section-space"]}`}
      aria-labelledby="projects-title"
      aria-busy={state.status === "loading"}
    >
      <div className={styles["projects-heading"]}>
        <h2 id="projects-title">Мои проекты</h2>
        <button
          className={common["small-button"]}
          id="projects-refresh"
          type="button"
          disabled={state.status === "loading"}
          onClick={() => {
            setState({ status: "loading" });
            setRequest((value) => value + 1);
          }}
        >
          {state.status === "error" ? "Повторить" : "Обновить"}
        </button>
      </div>
      <p
        className={styles["projects-status"]}
        id="projects-status"
        role="status"
      >
        {state.status === "loading"
          ? "Загрузка…"
          : state.status === "error"
            ? state.message
            : state.projects.length === 0
              ? "Ничего не найдено"
              : ""}
      </p>
      <div id="projects-list" className={styles["projects-grid"]}>
        {state.status === "ready" &&
          state.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>
    </section>
  );
}
