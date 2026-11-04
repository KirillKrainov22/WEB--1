const username = "KutuevTimur";
const url = `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`;
const refresh = document.querySelector("#projects-refresh");
const status = document.querySelector("#projects-status");
const list = document.querySelector("#projects-list");

function createCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";

  const title = document.createElement("h3");
  const link = document.createElement("a");
  link.href = project.html_url;
  link.textContent = project.name;
  title.append(link);

  const description = document.createElement("p");
  description.textContent = project.description || "Описание пока не добавлено";

  const language = document.createElement("p");
  language.className = "project-language";
  language.textContent = project.language || "Язык не указан";

  card.append(title, description, language);
  return card;
}

async function loadProjects() {
  refresh.disabled = true;
  refresh.textContent = "Обновить";
  status.textContent = "Загрузка…";
  list.replaceChildren();

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`GitHub API: ${response.status}`);
    }

    const projects = await response.json();
    list.replaceChildren(...projects.map(createCard));
    status.textContent = projects.length ? "" : "Ничего не найдено";
  } catch {
    status.textContent = "Не удалось загрузить проекты. Проверьте подключение и попробуйте ещё раз.";
    refresh.textContent = "Повторить";
  } finally {
    refresh.disabled = false;
  }
}

refresh.addEventListener("click", loadProjects);
loadProjects();
