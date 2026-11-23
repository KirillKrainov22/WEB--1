import common from "../App.module.css";
import styles from "./Header.module.css";

export default function Header({
  night,
  onToggle,
}: {
  night: boolean;
  onToggle: () => void;
}) {
  return (
    <>
      <header className={styles["topbar"] + " " + common["wrap"]}>
        <a className={styles["back-link"]} href="../../index.html">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 12H5m6-6-6 6 6 6" />
          </svg>
          На главную
        </a>
        <a className={styles["wordmark"]} href="#main">
          timur<span> / </span>личная сторона
        </a>
        <button
          className={common["small-button"]}
          id="palette-button"
          type="button"
          aria-pressed={night}
          onClick={onToggle}
        >
          {night ? "Дневной режим" : "Ночной режим"}
        </button>
      </header>
    </>
  );
}
