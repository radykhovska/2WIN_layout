const sidebar = document.querySelector("#sidebar");
const burger = document.querySelector("#header__burger");
const closeBtn = document.querySelector("#sidebar__close");

burger.addEventListener("click", () => {
  sidebar.classList.add("open");
  document.body.classList.add("sidebar-open");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("open");
  document.body.classList.remove("sidebar-open");
});
