import styles from '../App.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__inner} ${styles.container}`}>
        <p className={styles.footer__text}>© 2026 Кирилл Крайнов</p>
        <a href="../../index.html">На главную</a>
      </div>
    </footer>
  );
}
