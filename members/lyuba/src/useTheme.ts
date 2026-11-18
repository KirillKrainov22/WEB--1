import { useEffect, useState } from 'react';
type Theme = 'light' | 'dark';
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    try { return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'; }
    catch { return 'light'; }
  });
  useEffect(() => {
    document.body.classList.toggle('dark-theme', theme === 'dark');
    try { localStorage.setItem('theme', theme); } catch { /* Тема работает и без хранилища. */ }
  }, [theme]);
  return { theme, toggleTheme: () => setTheme(value => value === 'dark' ? 'light' : 'dark') };
}
