import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Sports from "./components/Sports";
import Favorites from "./components/Favorites";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  const [night, setNight] = useState(() => {
    try {
      return localStorage.getItem("timur-night") === "true";
    } catch {
      return false;
    }
  });
  useEffect(() => {
    document.body.classList.toggle("night-mode", night);
    try {
      localStorage.setItem("timur-night", String(night));
    } catch {
      /* Хранилище может быть недоступно. */
    }
  }, [night]);
  return (
    <>
      <a className={styles["skip-link"]} href="#main">
        Перейти к содержимому
      </a>
      <Header night={night} onToggle={() => setNight((value) => !value)} />
      <main id="main">
        <Profile />
        <Sports />
        <Favorites />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
