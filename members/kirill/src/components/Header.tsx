import styles from '../App.module.css';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Header({ isDark, onToggleTheme }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={`${styles.header__inner} ${styles.container}`}>
        <a className={styles.header__logo} href="../../index.html">Лабораторные 1–3</a>
        <nav className={styles.header__nav} aria-label="Основная навигация">
          <a className={styles.header__link} href="../../index.html">← На главную</a>
          <a className={styles.header__link} href="#projects">Мои проекты</a>
        </nav>
        <button className={`${styles.button} ${styles.button_outline} ${styles.header__theme}`}
          id="theme-button" type="button" aria-pressed={isDark} onClick={onToggleTheme}>
          {isDark ? 'Светлая тема' : 'Тёмная тема'}
        </button>
      </div>
    </header>
  );
}
