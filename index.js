const navbar = document.querySelector("nav");
const openMenu = document.getElementById("menu-open");
const closeMenu = document.getElementById("menu-close");

openMenu.addEventListener("click", () => {
  navbar.classList.add("open");
  console.log("clicked");
});
closeMenu.addEventListener("click", () => {
  navbar.classList.remove("open");
  console.log("clicked");
});
