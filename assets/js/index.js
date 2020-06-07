if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.body.classList.add("dark");
}

function toggleDark() {
  document.body.classList.toggle("dark");
  let darkToggle = document.querySelector(".dark-toggle-i");
  if (darkToggle.classList.contains("fa-sun")) {
    darkToggle.classList.remove("fa-sun");
    darkToggle.classList.add("fa-moon");
  } else {
    darkToggle.classList.remove("fa-moon");
    darkToggle.classList.add("fa-sun");
  }
};
