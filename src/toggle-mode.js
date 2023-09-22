let darkMode = true;
document.querySelector("#toggle-mode").addEventListener("click", (event) => {
  darkMode = !darkMode;
  let mode = darkMode ? "Dark" : "Light";
  event.currentTarget.querySelector("span").textContent =
    mode + " Mode ativado";
  document.documentElement.classList.toggle("light");
});
