const username = "KirillKrainov22";
const apiUrl = `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`;

const refreshButton = document.querySelector("#projects-refresh");
const retryButton = document.querySelector("#projects-retry");
const searchInput = document.querySelector("#projects-search");
const status = document.querySelector("#projects-status");
const list = document.querySelector("#projects-list");
const template = document.querySelector("#project-template");
const dateFormat = new Intl.DateTimeFormat("ru-RU");

let projects = [];
let isLoading = false;

function createProjectCard(project) {
  const card = template.content.cloneNode(true);
  const link = card.querySelector(".project__link");

  link.textContent = project.name;
  link.href = project.html_url;
  card.querySelector(".project__description").textContent =
    project.description || "Описание пока не добавлено.";
  card.querySelector(".project__language").textContent =
    project.language || "Язык не указан";
  card.querySelector(".project__stars").textContent =
    `Звёзды: ${project.stargazers_count}`;
  card.querySelector(".project__updated").textContent =
    `Обновлён ${dateFormat.format(new Date(project.updated_at))}`;

  return card;
}

function renderProjects() {
  const query = searchInput.value.trim().toLocaleLowerCase("ru-RU");
  const filteredProjects = projects.filter((project) => {
    const text = `${project.name} ${project.description || ""}`;
    return text.toLocaleLowerCase("ru-RU").includes(query);
  });

  list.replaceChildren();

  if (filteredProjects.length === 0) {
    status.textContent = "Ничего не найдено";
    return;
  }

  const cards = document.createDocumentFragment();

  for (const project of filteredProjects) {
    cards.append(createProjectCard(project));
  }

  list.append(cards);
  status.textContent = query
    ? `Найдено проектов: ${filteredProjects.length} из ${projects.length}.`
    : `Показано проектов: ${projects.length}.`;
}

async function loadProjects() {
  if (isLoading) return;

  isLoading = true;
  refreshButton.disabled = true;
  searchInput.disabled = true;
  retryButton.hidden = true;
  list.setAttribute("aria-busy", "true");
  list.replaceChildren();
  status.textContent = "Загрузка…";

  try {
    const response = await fetch(apiUrl, {
      headers: { Accept: "application/vnd.github+json" },
      signal: AbortSignal.timeout(15000),
    });

    if (!response.ok) {
      if (response.status === 403 || response.status === 429) {
        throw new Error("GitHub временно ограничил доступ. Повторите попытку позже.");
      }

      if (response.status === 404) {
        throw new Error("Аккаунт GitHub не найден. Попробуйте загрузить проекты позже.");
      }

      throw new Error(`Не удалось загрузить проекты. Ошибка GitHub: ${response.status}.`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("GitHub вернул неожиданный ответ. Повторите попытку.");
    }

    projects = data;
    renderProjects();
    searchInput.disabled = false;
  } catch (error) {
    projects = [];
    list.replaceChildren();

    if (error.name === "TimeoutError") {
      status.textContent = "GitHub долго не отвечает. Повторите попытку.";
    } else if (error instanceof TypeError) {
      status.textContent = "Не удалось связаться с GitHub. Проверьте интернет и повторите попытку.";
    } else if (error instanceof SyntaxError) {
      status.textContent = "Не удалось прочитать ответ GitHub. Повторите попытку.";
    } else {
      status.textContent = error.message;
    }

    retryButton.hidden = false;
  } finally {
    isLoading = false;
    refreshButton.disabled = false;
    list.setAttribute("aria-busy", "false");
  }
}

refreshButton.addEventListener("click", loadProjects);
retryButton.addEventListener("click", loadProjects);
searchInput.addEventListener("input", renderProjects);

loadProjects();
