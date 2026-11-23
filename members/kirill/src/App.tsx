import Header from './components/Header';
import Profile from './components/Profile';
import Favorites from './components/Favorites';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';
import styles from './App.module.css';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <Header isDark={theme === 'dark'} onToggleTheme={toggleTheme} />
      <main className={`${styles.main} ${styles.container}`}>
        <Profile />
        <Favorites />
        <Projects />
        <section className={styles.section}>
          <h2 className={styles.section__title}>Где меня найти</h2>
          <div className={styles.links}>
            <a className={styles.links__item} href="https://github.com/KirillKrainov22">GitHub</a>
            <a className={styles.links__item} href="https://t.me/kiryshkapetrushk">Telegram</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
