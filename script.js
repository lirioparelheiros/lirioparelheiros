const toggle = document.getElementById("toggle");

const theme = window.localStorage.getItem("theme");

if (theme === "dark") document.body.classList.add("light");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  if (theme === "dark") {
    window.localStorage.setItem("theme", "light");
    toggle.checked = true;
  } else {
    window.localStorage.setItem("theme", "dark");
  }
});
