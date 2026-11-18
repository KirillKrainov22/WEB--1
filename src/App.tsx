import styles from './App.module.css';
import { useTheme } from './useTheme';
import { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web/build/player/lottie_light';
import animationData from '../animation.json';

function Hero() {
 const animationRef = useRef<HTMLDivElement>(null);
 useEffect(() => {
   if (!animationRef.current) return;
   const animation = lottie.loadAnimation({ container: animationRef.current, renderer: 'svg', loop: true, autoplay: true, animationData: structuredClone(animationData) });
   animation.setSpeed(0.75);
   return () => animation.destroy();
 }, []);
 return (<section className={styles["hero"]}>
        <div>
          <h1 className={styles["hero__title"]}>Привет!</h1>
          <p className={styles["hero__text"]}>
            Нас четверо, и мы делаем этот сайт в рамках курса по веб-разработке. Здесь мы
            рассказываем о себе и о том, что любим.
          </p>
        </div>
        <div className={styles["hero__animation"]} id="hero-animation" ref={animationRef}></div>
      </section>);
}
function Team() { return (<section className={styles["section"]} id="team">
        <h2 className={styles["section__title"]}>Участники</h2>
        <div className={styles["team"]}>
          <article className={styles["member"]}>
            <p className={styles["member__number"]}>01</p>
            <h3 className={styles["member__name"]}>Крайнов Кирилл</h3>
            <a className={styles["member__link"]} href="members/kirill/index.html">Страница участника →</a>
          </article>
          <article className={styles["member"]}>
            <p className={styles["member__number"]}>02</p>
            <h3 className={styles["member__name"]}>Любовь Чибакова</h3>
            <a className={styles["member__link"]} href="members/lyuba/index.html">Страница участника →</a>
          </article>
          <article className={styles["member"]}>
            <p className={styles["member__number"]}>03</p>
            <h3 className={styles["member__name"]}>Тимур</h3>
            <a className={styles["member__link"]} href="members/timur/index.html">Страница участника →</a>
          </article>
          <article className={styles["member"]}>
            <p className={styles["member__number"]}>04</p>
            <h3 className={styles["member__name"]}>Артем Соловьев</h3>
            <a className={styles["member__link"]} href="members/artem/index.html">Страница участника →</a>
          </article>
        </div>
      </section>); }
function Footer() { return (<footer className={styles["footer"]}>
      <div className={styles["footer__inner"] + " " + styles["container"]}>
        <p className={styles["footer__text"]}>© 2026 Домашние работы №1–3</p>
        <a href="https://github.com/KirillKrainov22/WEB--1">Исходный код на GitHub</a>
      </div>
    </footer>); }
export default function App() {
 const { theme, toggleTheme } = useTheme();
 const [contactsVisible, setContactsVisible] = useState(false);
 const contactsRef = useRef<HTMLElement>(null);
 const [scrollRequest, setScrollRequest] = useState(0);
 const showContacts = () => { setContactsVisible(true); setScrollRequest(value => value + 1); };
 useEffect(() => { if (scrollRequest) contactsRef.current?.scrollIntoView(); }, [scrollRequest]);
 useEffect(() => {
   const revealHash = () => { if (window.location.hash === '#contacts') showContacts(); };
   revealHash();
   window.addEventListener('hashchange', revealHash);
   return () => window.removeEventListener('hashchange', revealHash);
 }, []);
 return <><header className={styles["header"]}>
      <div className={styles["header__inner"] + " " + styles["container"]}>
        <a className={styles["header__logo"]} href="index.html">Домашние работы №1–3</a>
        <nav className={styles["header__nav"]}>
          <a className={styles["header__link"]} href="#team">Участники</a>
          <a className={styles["header__link"]} onClick={showContacts} href="#contacts">Контакты</a>
        </nav>
        <button className={styles["button"] + " " + styles["button_outline"] + " " + styles["header__theme"]} onClick={toggleTheme} type="button">{theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}</button>
      </div>
    </header><main className={styles.main + ' ' + styles.container}><Hero /><Team /><section className={styles["section"] + " " + styles["section_inverse"]}>
        <h2 className={styles["section__title"]}>Хотите с нами связаться?</h2>
        <p className={styles["section__text"]}>Мы открыты для вопросов и предложений. Нажмите кнопку — покажем контакты.</p>
        <button className={styles["button"]} onClick={showContacts} aria-expanded={contactsVisible} aria-controls="contacts" type="button">Показать контакты</button>
      </section><section className={styles["section"]} id="contacts" ref={contactsRef} hidden={!contactsVisible}>
        <h2 className={styles["section__title"]}>Контакты</h2>
        <div className={styles["contacts"]}>
          <div className={styles["contact"]}>
            <h3 className={styles["contact__name"]}>Крайнов Кирилл</h3>
            <a className={styles["contact__link"]} href="https://github.com/KirillKrainov22">github.com/KirillKrainov22</a>
            <a className={styles["contact__link"]} href="mailto:kkkrainov@edu.hse.ru">kkkrainov@edu.hse.ru</a>
          </div>
          <div className={styles["contact"]}>
            <h3 className={styles["contact__name"]}>Любовь Чибакова</h3>
            <a className={styles["contact__link"]} href="https://github.com/LuCh-Ans">github.com/LuCh-Ans</a>
            <a className={styles["contact__link"]} href="https://t.me/lbvchb">t.me/lbvchb</a>
          </div>
          <div className={styles["contact"]}>
            <h3 className={styles["contact__name"]}>Тимур Кутуев</h3>
            <a className={styles["contact__link"]} href="https://github.com/KutuevTimur">github.com/KutuevTimur</a>
            <a className={styles["contact__link"]} href="https://t.me/tttimurr">t.me/tttimurr</a>
          </div>
          <div className={styles["contact"]}>
            <h3 className={styles["contact__name"]}>Артем Соловьев</h3>
            <a className={styles["contact__link"]} href="https://github.com/Antei22">github.com/Antei22</a>
            <a className={styles["contact__link"]} href="https://t.me/Solovievrtem">@Solovievrtem</a>
          </div>
        </div>
      </section></main><Footer /></>;
}
