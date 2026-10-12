// Скрипт подключён только на странице Тимура.
const paletteButton = document.querySelector('#palette-button');
let night = false;
try { night = localStorage.getItem('timur-night') === 'true'; } catch (_) { /* Страница работает и без хранилища. */ }
function setPalette(value) {
  night = value;
  document.body.classList.toggle('night-mode', night);
  paletteButton.setAttribute('aria-pressed', String(night));
  paletteButton.textContent = night ? 'Дневной режим' : 'Ночной режим';
  try { localStorage.setItem('timur-night', String(night)); } catch (_) { /* Не мешаем переключению. */ }
}
setPalette(night);
paletteButton.addEventListener('click', () => setPalette(!night));
const lggButton = document.querySelector('#lgg-button');
const lggMore = document.querySelector('#lgg-more');
lggButton.addEventListener('click', () => {
  lggMore.hidden = !lggMore.hidden;
  lggButton.setAttribute('aria-expanded', String(!lggMore.hidden));
  lggButton.innerHTML = lggMore.hidden ? 'Подробнее о моей роли <span aria-hidden="true">+</span>' : 'Скрыть подробности <span aria-hidden="true">−</span>';
});
const filters = document.querySelectorAll('[data-filter]');
const items = document.querySelectorAll('[data-category]');
const labels = { all: 'Показано всё избранное', music: 'Музыка: Kanye West, saluki, Don Toliver и Тёмный Принц', cinema: 'Кино: «Адвокат дьявола», «Зелёная книга» и «Дюна: Часть вторая»', games: 'Игры: GTA V и CS' };
filters.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filters.forEach(other => other.setAttribute('aria-pressed', String(other === button)));
  items.forEach(item => { item.hidden = filter !== 'all' && item.dataset.category !== filter; });
  document.querySelector('#filter-status').textContent = labels[filter];
}));
