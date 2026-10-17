// Тема страницы Артема хранится отдельно от общей темы сайта.
const themeButton = document.querySelector('#theme-button');
function setTheme(theme) {
  document.body.classList.toggle('dark-theme', theme === 'dark');
  themeButton.textContent = theme === 'dark' ? 'Светлая тема' : 'Тёмная тема';
  try { localStorage.setItem('artem-theme', theme); } catch (error) { /* Тема работает и без хранилища. */ }
}
let savedTheme = 'dark';
try { savedTheme = localStorage.getItem('artem-theme') || 'dark'; } catch (error) { /* Используем тёмную тему. */ }
setTheme(savedTheme);
themeButton.addEventListener('click', () => {
  setTheme(document.body.classList.contains('dark-theme') ? 'light' : 'dark');
});

// Небольшая игра: каждый клик — попадание в корзину.
let score = 0;
const basketButton = document.querySelector('#basket-button');
const basketResult = document.querySelector('#basket-result');
basketButton.addEventListener('click', () => {
  score += 1;
  basketResult.textContent = `🏀 Попадания: ${score}`;
  basketButton.classList.remove('shot');
  void basketButton.offsetWidth;
  basketButton.classList.add('shot');
});
