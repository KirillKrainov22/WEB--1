const themeButton = document.querySelector("#theme-button");
const moreButton = document.querySelector("#more-button");
const moreText = document.querySelector("#more-text");
const contactsButton = document.querySelector("#contacts-button");
const contactsLink = document.querySelector("#contacts-link");
const contacts = document.querySelector("#contacts");
const heroAnimation = document.querySelector("#hero-animation");

function setTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-theme");
    themeButton.textContent = "Светлая тема";
  } else {
    document.body.classList.remove("dark-theme");
    themeButton.textContent = "Тёмная тема";
  }

  localStorage.setItem("theme", theme);
}

function showContacts() {
  contacts.hidden = false;
  contacts.scrollIntoView();
}

themeButton.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark-theme");
  setTheme(isDark ? "light" : "dark");
});

setTheme(localStorage.getItem("theme") || "light");

if (moreButton) {
  moreButton.addEventListener("click", () => {
    moreText.hidden = !moreText.hidden;
    moreButton.textContent = moreText.hidden ? "Подробнее" : "Скрыть";
  });
}

if (contactsButton) {
  contactsButton.addEventListener("click", showContacts);
  contactsLink.addEventListener("click", showContacts);
}

if (heroAnimation) {
  const animation = lottie.loadAnimation({
    container: heroAnimation,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "animation.json",
  });

  animation.setSpeed(0.75);
}
