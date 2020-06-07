if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.body.classList.add("dark");
}

function toggleDark() {
  document.body.classList.toggle("dark");
  let darkToggle = document.getElementsByClassName("dark-toggle-i");
  if (darkToggle.classList.contains("fa-sun")) {
    darkToggle.classList.remove("fa-sun");
  } else {
    darkToggle.classList.add("fa-moon");
  }
};
