import common from "../App.module.css";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <section
        className={
          styles["outro"] + " " + common["wrap"] + " " + common["section-space"]
        }
        aria-labelledby="outro-title"
      >
        <p className={styles["travel-note"]}>
          Люблю поездки. Пока мало где был —<br />
          тем интереснее то, что впереди.
        </p>
        <h2 id="outro-title">
          Будем
          <br />
          <em>на связи?</em>
        </h2>
        <div className={styles["contact-links"]}>
          <a href="https://t.me/tttimurr">
            Telegram <span>@tttimurr</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 18 18 6M6 6h12v12" />
            </svg>
          </a>
          <a href="https://github.com/KutuevTimur">
            GitHub <span>KutuevTimur</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 18 18 6M6 6h12v12" />
            </svg>
          </a>
        </div>
      </section>
      <footer className={styles["footer"] + " " + common["wrap"]}>
        <p>Тимур / 2026</p>
        <a href="../../index.html#team">Все участники группы</a>
        <a href="#main">Наверх ↑</a>
      </footer>
    </>
  );
}
