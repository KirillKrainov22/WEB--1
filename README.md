# Лабораторные работы 1 и 2 по веб-программированию

В этом репозитории находятся лабораторные работы №1 и №2 нашей команды.

- **Лабораторная работа №1** — общий сайт со страницами участников на HTML, CSS и JavaScript.
- **Лабораторная работа №2** — доработка страниц с использованием Vite и публичного API.

**Сайт:** [kirillkrainov22.github.io/WEB--1](https://kirillkrainov22.github.io/WEB--1/)

## Участники

| Участник | Папка |
|---|---|
| Кирилл Крайнов | `members/kirill/` |
| Любовь Чибакова | `members/lyuba/` |
| Тимур Кутуев | `members/timur/` |
| Артём Соловьев | `members/artem/` |

Подробную информацию о том, что сделано в каждой лабораторной работе, каждый участник добавит в свой `README.md` внутри своей папки.

## Структура проекта после выполнения ДЗ 2

Это целевая структура: каждый участник должен подготовить файлы внутри своей папки по схеме ниже.

```text
WEB--1/
├── .github/
│   └── workflows/
│       └── deploy.yml      # Общая сборка и публикация уже настроены
├── members/                # Личные страницы участников
│   ├── kirill/
│   │   ├── index.html
│   │   ├── style.css
│   │   ├── base.css
│   │   ├── common.js
│   │   ├── projects.js
│   │   ├── images/
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   ├── vite.config.mjs
│   │   ├── .gitignore
│   │   └── README.md
│   ├── lyuba/
│   │   ├── index.html
│   │   ├── style.css
│   │   ├── base.css
│   │   ├── common.js
│   │   ├── projects.js
│   │   ├── images/
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   ├── vite.config.mjs
│   │   ├── .gitignore
│   │   └── README.md
│   ├── timur/
│   │   ├── index.html
│   │   ├── style.css
│   │   ├── script.js
│   │   ├── projects.js
│   │   ├── images/
│   │   │   └── fonts/
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   ├── vite.config.mjs
│   │   ├── .gitignore
│   │   └── README.md
│   └── artem/
│       ├── index.html
│       ├── style.css
│       ├── script.js
│       ├── projects.js
│       ├── images/
│       ├── package.json
│       ├── package-lock.json
│       ├── vite.config.mjs
│       ├── .gitignore
│       └── README.md
├── images/                 # Исходные общие ресурсы сохраняются
├── index.html              # Главная страница команды
├── styles.css              # Общие стили
├── app.js                  # Общий JavaScript
├── animation.json          # Анимация на главной странице
├── .gitignore
└── README.md               # Общее описание лабораторных работ
```

### Для чего нужны файлы участника

| Файл или папка | Содержимое |
|---|---|
| `index.html` | Личная страница и раздел «Мои проекты» |
| `style.css` | Оформление страницы и карточек проектов |
| `projects.js` | Запрос к GitHub API, вывод карточек, обновление, загрузка, пустой результат и ошибка с повторной попыткой |
| `common.js` или `script.js` | Существующие функции страницы: переключение темы и другие кнопки |
| `base.css` | Копия общего `styles.css` для страниц Кирилла и Любови |
| `images/` | Локальные копии картинок, текстур и других ресурсов своей страницы; у Тимура также шрифты в `images/fonts/` |
| `package.json` | Зависимость Vite и команды `dev`, `build`, `preview` |
| `package-lock.json` | Зафиксированные версии зависимостей; файл создаётся командой `npm install` |
| `vite.config.mjs` | Настройка Vite с `base: "./"` |
| `.gitignore` | Исключения `node_modules/` и `dist/` |
| `README.md` | Что сделано в обеих лабораторных, используемый API, команды запуска и сборки, результаты проверки |

Каждый копирует свои картинки внутрь своей папки `images/` и исправляет пути к ним в HTML и CSS. Например, `../../images/kirill/photo.jpg` становится `./images/photo.jpg`. Общие исходные файлы в корне сохраняются для главной страницы.

Команды `npm install`, `npm run dev`, `npm run build` и `npm run preview` выполняются из папки участника. Локально также появятся `node_modules/` и `dist/`; они исключаются через `.gitignore`.

Первый коммит с `package.json` отправляется вместе с `package-lock.json` и остальными файлами готового проекта после успешного `npm run build`. После отправки изменений в `main` GitHub Actions соберёт и опубликует сайт автоматически.
