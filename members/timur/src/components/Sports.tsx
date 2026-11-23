import common from "../App.module.css";
import styles from "./Sports.module.css";

export default function Sports() {
  return (
    <>
      <section
        className={styles["sports"] + " " + common["section-space"]}
        aria-labelledby="sport-title"
      >
        <div className={common["wrap"] + " " + styles["sports-inner"]}>
          <div>
            <h2 id="sport-title">
              Спорт со мной
              <br />
              <span>с детства.</span>
            </h2>
            <p className={styles["sports-lead"]}>
              Сначала бассейн. Потом ринг.
              <br />
              Сейчас — в удовольствие.
            </p>
          </div>
          <div className={styles["sports-story"]}>
            <div className={styles["sport-years"]}>
              <p>
                <strong>4 года</strong>
                <span>начал плавать</span>
              </p>
              <p>
                <strong>7 лет</strong>
                <span>пришёл в бокс</span>
              </p>
              <p>
                <strong>до 17 лет</strong>
                <span>бокс и плавание</span>
              </p>
            </div>
            <p>
              Побеждал и занимал призовые места на всероссийских турнирах и
              турнирах СНГ по боксу. Спорт был большой частью моей жизни — и
              остаётся ею.
            </p>
            <div className={styles["sport-interests"]}>
              <p>
                Сейчас хожу в тренажёрный зал, играю в настольный теннис и
                увлекаюсь русским бильярдом — просто в своё удовольствие. Ещё
                хочу научиться играть в большой теннис.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
