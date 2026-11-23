import common from "../App.module.css";
import styles from "./Profile.module.css";
import { useState } from "react";
import asset0 from "../assets/portrait.jpg";

export default function Profile() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <section
        className={styles["poster"] + " " + common["wrap"]}
        aria-labelledby="poster-title"
      >
        <div className={styles["poster-copy"]}>
          <h1 id="poster-title">
            ТИМУР<span className={styles["title-dot"]}>.</span>
          </h1>
          <p className={styles["intro"]}>
            Математика, спорт, музыка и ИТ.
            <br />А между ними — свои проекты.
          </p>
          <a className={styles["paper-link"]} href="#about">
            Знакомимся ближе{" "}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 4v16m-6-6 6 6 6-6" />
            </svg>
          </a>
        </div>
        <figure className={styles["portrait-frame"]}>
          <div className={styles["portrait-window"]}>
            <img
              src={asset0}
              width="1350"
              height="1800"
              alt="Тимур у пруда в солнечный день"
              fetchPriority="high"
            />
          </div>
          <figcaption>Первомайск → новые истории</figcaption>
        </figure>
        <span className={styles["age-sticker"]}>
          20 лет
          <br />
          <small>на своей волне</small>
        </span>
        <span className={styles["home-sticker"]}>
          Первомайск
          <br />
          <small>Нижегородская область</small>
        </span>
        <svg
          className={styles["poster-star"]}
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <path d="m50 0 9 31 26-20-12 31 27 8-30 10 17 27-29-12-8 25-10-29-27 15 13-29L0 50l30-9-16-25 28 13Z" />
        </svg>
        <p className={styles["poster-bottom"]}>
          ВШЭ / разработка игр / LGG <span>Листай дальше</span>
        </p>
      </section>
      <section
        className={common["wrap"] + " " + common["section-space"]}
        id="about"
        aria-labelledby="about-title"
      >
        <div className={common["section-heading"]}>
          <h2 id="about-title">
            Сейчас
            <br />
            <em>в моей жизни</em>
          </h2>
          <p>
            Учусь, объясняю сложное
            <br />и собираю своё.
          </p>
        </div>
        <div className={styles["about-grid"]}>
          <div className={styles["study-note"]}>
            <p>
              Учусь в НИУ ВШЭ на программе «Профессиональная разработка игр и
              геймификация бизнес-процессов».
            </p>
            <p>
              Мне интересно создавать то, с чем людям хочется взаимодействовать.
            </p>
          </div>
          <div className={styles["work-note"]}>
            <h3>
              Математика.
              <br />
              Команда. <span>LGG.</span>
            </h3>
            <p>
              Работаю репетитором по математике. Вместе с друзьями развиваю нашу
              онлайн-школу LGG.
            </p>
            <p>
              Для команды разрабатываю платформу и экосистему: место, где учёба,
              люди и рабочие процессы складываются в одно целое.
            </p>
            <button
              className={styles["paper-button"]}
              id="lgg-button"
              type="button"
              aria-expanded={expanded}
              onClick={() => setExpanded((value) => !value)}
              aria-controls="lgg-more"
            >
              {expanded ? "Скрыть подробности" : "Подробнее о моей роли"}{" "}
              <span aria-hidden="true">{expanded ? "−" : "+"}</span>
            </button>
            <p
              id="lgg-more"
              className={styles["expanded-note"]}
              hidden={!expanded}
            >
              В LGG совмещаю преподавание и разработку. Помогаю ученикам
              разбираться в математике и создаю инструменты для нашей команды.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
