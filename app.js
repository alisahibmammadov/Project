const navbarMenuBox = document.querySelector(".navbar-menu__box");
const navbarMenuIcon = document.querySelector(".navbar-menu__icon");
const navbarMenuXMark = document.querySelector(".navbar-menu__xmark");
navbarMenuIcon.addEventListener("click", () => {
  navbarMenuBox.style.display = "flex";
  document.body.style.overflow = "hidden";
});
navbarMenuXMark.addEventListener("click", () => {
  navbarMenuBox.style.display = "none";
  document.body.style.overflow = "auto";
});
