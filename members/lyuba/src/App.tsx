import styles from './App.module.css';
import { useTheme } from './useTheme';
import photo0 from '../images/hero.jpg';
import photo1 from '../images/kill-bill.jpg';
import photo2 from '../images/a-single-man.jpg';
import photo3 from '../images/eyes-wide-shut.jpg';
import photo4 from '../images/lana-del-rey.jpg';
import photo5 from '../images/kanye-west.jpg';
import photo6 from '../images/noize-mc.jpg';
import photo7 from '../images/madonna.jpg';
import photo8 from '../images/painting.jpg';
import photo9 from '../images/running.jpg';
import { useState } from 'react';
import Projects from './Projects';

function Header() {
  const { theme, toggleTheme } = useTheme();
  return (<header className={styles["header"]}>
      <div className={styles["header__inner"] + " " + styles["container"]}>
        <a className={styles["header__logo"]} href="../../index.html">Домашние работы №1–3</a>
        <nav className={styles["header__nav"]}>
          <a className={styles["header__link"]} href="../../index.html">← На главную</a>
          <a className={styles["header__link"]} href="../../index.html#team">Все участники</a>
        </nav>
        <button className={styles["button"] + " " + styles["button_outline"] + " " + styles["header__theme"]} onClick={toggleTheme} type="button">{theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}</button>
      </div>
    </header>);
}
function Profile() {
  const [expanded, setExpanded] = useState(false);
  return (<><section className={styles["lyuba-hero"]}>
        <img
          className={styles["lyuba-hero__photo"]}
          src={photo0}
          alt="Фото: Любовь Чибакова"
        />
        <h1 className={styles["lyuba-hero__name"]}>Любовь<br />Чибакова</h1>
      </section>
<section className={styles["lyuba-about"]}>
        <h2 className={styles["lyuba-title"]}>Обо мне</h2>
        <div>
          <p className={styles["lyuba-about__lead"]}>Учусь в НИУ ВШЭ НН, люблю бег, музыку и фильмы, иногда пишу</p>
          <button className={styles["button"] + " " + styles["button_outline"]} aria-expanded={expanded} aria-controls="more-text" onClick={() => setExpanded(value => !value)} type="button">{expanded ? 'Скрыть' : 'Подробнее'}</button>
          <p className={styles["lyuba-about__more"]} id="more-text" hidden={!expanded}>
            Последние два года интересуюсь UX-исследованиями и UX-дизайном
          </p>
        </div>
      </section></>);
}
function Interests() { return (<section className={styles["lyuba-favorites"]}>
        <h2 className={styles["lyuba-label"]}>Мои интересы</h2>
        <details className={styles["lyuba-folder"]}>
          <summary className={styles["lyuba-folder__head"]}>
            <span className={styles["lyuba-folder__num"]}>01.</span>
            <span className={styles["lyuba-folder__name"]}>Фильмы</span>
          </summary>
          <div className={styles["lyuba-folder__cards"]}>
            <article className={styles["lyuba-card"]}>
              <img className={styles["lyuba-card__photo"]} src={photo1} alt="Постер фильма «Убить Билла»" />
              <h3 className={styles["lyuba-card__title"]}>Убить Билла</h3>
              <p className={styles["lyuba-card__text"]}>Грандиозная одиссея мести Квентина Тарантино, наполненная смесью культур и безупречной хореографией боевых сцен</p>
            </article>
            <article className={styles["lyuba-card"]}>
              <img className={styles["lyuba-card__photo"]} src={photo2} alt="Постер фильма «Одинокий мужчина»" />
              <h3 className={styles["lyuba-card__title"]}>Одинокий мужчина</h3>
              <p className={styles["lyuba-card__text"]}>Этот фильм Тома Форда люблю за глубокую, пронзительную историю о переживании утраты, потрясающую визуальную эстетику и невероятную передачу чувств</p>
            </article>
            <article className={styles["lyuba-card"]}>
              <img className={styles["lyuba-card__photo"]} src={photo3} alt="Постер фильма «С широко закрытыми глазами»" />
              <h3 className={styles["lyuba-card__title"]}>С широко закрытыми глазами</h3>
              <p className={styles["lyuba-card__text"]}>Картина Стэнли Кубрика глубоко обожаема мной за гипнотическую атмосферу ночного Нью-Йорка и честное, смелое исследование тайных желаний</p>
            </article>
          </div>
        </details>

        <details className={styles["lyuba-folder"]}>
          <summary className={styles["lyuba-folder__head"]}>
            <span className={styles["lyuba-folder__num"]}>02.</span>
            <span className={styles["lyuba-folder__name"]}>Музыка</span>
          </summary>
          <div className={styles["lyuba-folder__cards"]}>
            <article className={styles["lyuba-card"]}>
              <img className={styles["lyuba-card__photo"]} src={photo4} alt="Lana Del Rey" />
              <h3 className={styles["lyuba-card__title"]}>Lana Del Rey</h3>
              <p className={styles["lyuba-card__text"]}>Королева меланхолии и ностальгии</p>
            </article>
            <article className={styles["lyuba-card"]}>
              <img className={styles["lyuba-card__photo"]} src={photo5} alt="Kanye West" />
              <h3 className={styles["lyuba-card__title"]}>Kanye West</h3>
              <p className={styles["lyuba-card__text"]}>Непредсказуемость и эпатаж становятся чистым искусством</p>
            </article>
            <article className={styles["lyuba-card"]}>
              <img className={styles["lyuba-card__photo"]} src={photo6} alt="Noize MC" />
              <h3 className={styles["lyuba-card__title"]}>Noize MC</h3>
              <p className={styles["lyuba-card__text"]}>Конфликт юношеского бунта и ожидаемой социальной зрелости</p>
            </article>
            <article className={styles["lyuba-card"]}>
              <img className={styles["lyuba-card__photo"]} src={photo7} alt="Madonna" />
              <h3 className={styles["lyuba-card__title"]}>Madonna</h3>
              <p className={styles["lyuba-card__text"]}>Икона десятилетий</p>
            </article>
          </div>
        </details>

        <details className={styles["lyuba-folder"]}>
          <summary className={styles["lyuba-folder__head"]}>
            <span className={styles["lyuba-folder__num"]}>03.</span>
            <span className={styles["lyuba-folder__name"]}>Увлечения</span>
          </summary>
          <div className={styles["lyuba-folder__cards"]}>
            <article className={styles["lyuba-card"]}>
              <img className={styles["lyuba-card__photo"]} src={photo8} alt="Руки в краске после занятия живописью" />
              <h3 className={styles["lyuba-card__title"]}>Живопись</h3>
              <p className={styles["lyuba-card__text"]}>С 5 лет ходила в художественную школу, 
                ездила на пленеры и конкурсы, сейчас пишу довольно редко, но очень люблю этот поцесс</p>
            </article>
            <article className={styles["lyuba-card"]}>
              <img className={styles["lyuba-card__photo"]} src={photo9} alt="Бегуны на асфальте в движении" />
              <h3 className={styles["lyuba-card__title"]}>Легкая атлетика</h3>
              <p className={styles["lyuba-card__text"]}>С 12 лет начала бегать, занималась пять лет в спортивной школе, сейчас бегаю для души</p>
            </article>
          </div>
        </details>
      </section>); }
function Contacts() { return (<section className={styles["lyuba-contacts"]}>
        <h2 className={styles["lyuba-title"]}>Где меня<br />найти</h2>
        <div className={styles["lyuba-contacts__links"]}>
          <a className={styles["lyuba-contacts__link"]} href="https://github.com/LuCh-Ans">
            <span className={styles["lyuba-contacts__label"]}>GitHub</span>
            github.com/LuCh-Ans
          </a>
          <a className={styles["lyuba-contacts__link"]} href="https://t.me/lbvchb">
            <span className={styles["lyuba-contacts__label"]}>Telegram</span>
            @lbvchb
          </a>
        </div>
      </section>); }
function Footer() { return (<footer className={styles["footer"]}>
      <div className={styles["footer__inner"] + " " + styles["container"]}>
        <p className={styles["footer__text"]}> 2026 | Домашние работы №1–3</p>
        <a href="../../index.html">На главную</a>
      </div>
    </footer>); }
export default function App() {
  return <><Header /><main className={styles.main + ' ' + styles.container}><Profile /><Interests /><Projects /><Contacts /></main><Footer /></>;
}
