import common from "../App.module.css";
import styles from "./Favorites.module.css";
import { useState } from "react";
import asset0 from "../assets/kanye.png";
import asset1 from "../assets/saluki.png";
import asset2 from "../assets/devils-advocate.png";
import asset3 from "../assets/don-toliver.png";
import asset4 from "../assets/dark-prince.png";
import asset5 from "../assets/green-book.png";
import asset6 from "../assets/dune-two.png";

export default function Favorites() {
  const [filter, setFilter] = useState<"all" | "music" | "cinema" | "games">(
    "all",
  );
  const labels = {
    all: "Показано всё избранное",
    music: "Музыка: Kanye West, saluki, Don Toliver и Тёмный Принц",
    cinema: "Кино: «Адвокат дьявола», «Зелёная книга» и «Дюна: Часть вторая»",
    games: "Игры: GTA V и CS",
  };
  return (
    <>
      <section
        className={common["wrap"] + " " + common["section-space"]}
        aria-labelledby="favorites-title"
      >
        <div className={common["section-heading"]}>
          <h2 id="favorites-title">
            На повторе.
            <br />
            <em>И в избранном.</em>
          </h2>
          <p>
            Музыка, кино и игры,
            <br />к которым возвращаюсь.
          </p>
        </div>
        <div
          className={styles["filter-buttons"]}
          role="group"
          aria-label="Что показать в избранном"
        >
          <button
            type="button"
            aria-pressed={filter === "all"}
            onClick={() => setFilter("all")}
          >
            Всё вместе
          </button>
          <button
            type="button"
            aria-pressed={filter === "music"}
            onClick={() => setFilter("music")}
          >
            Музыка
          </button>
          <button
            type="button"
            aria-pressed={filter === "cinema"}
            onClick={() => setFilter("cinema")}
          >
            Кино
          </button>
          <button
            type="button"
            aria-pressed={filter === "games"}
            onClick={() => setFilter("games")}
          >
            Игры
          </button>
        </div>
        <div className={styles["collection"]} id="collection">
          <article
            className={styles["cover"] + " " + styles["cover-kanye"]}
            hidden={filter !== "all" && filter !== "music"}
          >
            <img
              src={asset0}
              width="736"
              height="1308"
              alt="Канье Уэст с головой медведя в руках"
            />
            <div className={styles["cover-caption"]}>
              <span>Музыка</span>
              <h3>Kanye West</h3>
            </div>
          </article>
          <article
            className={styles["cover"] + " " + styles["cover-saluki"]}
            hidden={filter !== "all" && filter !== "music"}
          >
            <img
              src={asset1}
              width="736"
              height="736"
              alt="Изображение Салуки: силуэт над полем и затмение"
            />
            <div className={styles["cover-caption"]}>
              <span>Музыка</span>
              <h3>saluki</h3>
            </div>
          </article>
          <article
            className={styles["cover"] + " " + styles["cover-film"]}
            hidden={filter !== "all" && filter !== "cinema"}
          >
            <img
              src={asset2}
              width="736"
              height="1104"
              alt="Постер фильма «Адвокат дьявола»"
            />
            <div className={styles["cover-caption"]}>
              <span>Кино</span>
              <h3>Адвокат дьявола</h3>
            </div>
          </article>
          <article
            className={styles["cover"] + " " + styles["cover-don"]}
            hidden={filter !== "all" && filter !== "music"}
          >
            <img
              src={asset3}
              width="945"
              height="2048"
              alt="Don Toliver с флагом на фоне вечернего неба"
            />
            <div className={styles["cover-caption"]}>
              <span>Музыка</span>
              <h3>Don Toliver</h3>
            </div>
          </article>
          <article
            className={styles["cover"] + " " + styles["cover-prince"]}
            hidden={filter !== "all" && filter !== "music"}
          >
            <img
              src={asset4}
              width="500"
              height="500"
              alt="Обложка Тёмного Принца: портрет с красной полосой"
            />
            <div className={styles["cover-caption"]}>
              <span>Музыка</span>
              <h3>Тёмный Принц</h3>
            </div>
          </article>
          <article
            className={styles["cover"] + " " + styles["cover-green"]}
            hidden={filter !== "all" && filter !== "cinema"}
          >
            <img
              src={asset5}
              width="800"
              height="1267"
              alt="Постер фильма «Зелёная книга»"
            />
            <div className={styles["cover-caption"]}>
              <span>Кино</span>
              <h3>Зелёная книга</h3>
            </div>
          </article>
          <article
            className={styles["cover"] + " " + styles["cover-dune"]}
            hidden={filter !== "all" && filter !== "cinema"}
          >
            <img
              src={asset6}
              width="736"
              height="1104"
              alt="Постер фильма «Дюна: Часть вторая»"
            />
            <div className={styles["cover-caption"]}>
              <span>Кино</span>
              <h3>Дюна: Часть вторая</h3>
            </div>
          </article>
          <article
            className={styles["game-note"]}
            hidden={filter !== "all" && filter !== "games"}
          >
            <span className={common["note-label"]}>
              Иногда — просто поиграть
            </span>
            <h3>
              GTA V <span>/</span> CS
            </h3>
            <p>Две игры из моего избранного.</p>
          </article>
        </div>
        <p className={styles["filter-status"]} id="filter-status" role="status">
          {labels[filter]}
        </p>
      </section>
    </>
  );
}
