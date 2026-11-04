const themeButton = document.querySelector("#theme-button");
const moreButton = document.querySelector("#more-button");
const moreText = document.querySelector("#more-text");

function setTheme(theme) {
  const isDark = theme === "dark";

  document.body.classList.toggle("dark-theme", isDark);
  themeButton.textContent = isDark ? "Светлая тема" : "Тёмная тема";
  themeButton.setAttribute("aria-pressed", String(isDark));

  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Переключение темы работает и при недоступном хранилище браузера.
  }
}

let savedTheme = "light";

try {
  savedTheme = localStorage.getItem("theme") || "light";
} catch {
  // Если настройки прочитать нельзя, используем светлую тему.
}

setTheme(savedTheme);

themeButton.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark-theme");
  setTheme(isDark ? "light" : "dark");
});

moreButton.addEventListener("click", () => {
  moreText.hidden = !moreText.hidden;
  moreButton.textContent = moreText.hidden ? "Подробнее" : "Скрыть";
  moreButton.setAttribute("aria-expanded", String(!moreText.hidden));
});
