const apiUrl = "https://api.github.com/users/LuCh-Ans/repos?sort=updated&per_page=100";
const refreshButton = document.querySelector("#projects-refresh");
const projectStatus = document.querySelector("#projects-status");
const list = document.querySelector("#projects-list");
const template = document.querySelector("#project-card");

function createCard(project) {
  const card = template.content.cloneNode(true);
  const link = card.querySelector("a");
  link.textContent = project.name;
  link.href = project.html_url;
  card.querySelector(".lyuba-project__description").textContent =
    project.description || "Описание пока не добавлено";
  card.querySelector(".lyuba-project__language").textContent =
    project.language || "Язык не указан";
  return card;
}

async function loadProjects() {
  refreshButton.disabled = true;
  refreshButton.textContent = "Обновить";
  projectStatus.textContent = "Загрузка…";
  list.replaceChildren();

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("GitHub вернул ошибку " + response.status);
    }

    const projects = await response.json();
    list.replaceChildren(...projects.map(createCard));
    projectStatus.textContent = projects.length ? "Проектов: " + projects.length : "Ничего не найдено";
  } catch {
    projectStatus.textContent = "Не удалось загрузить проекты с GitHub. Попробуйте ещё раз.";
    refreshButton.textContent = "Повторить";
  } finally {
    refreshButton.disabled = false;
  }
}

refreshButton.addEventListener("click", loadProjects);
loadProjects();
