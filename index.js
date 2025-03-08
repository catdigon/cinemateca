function onClickHamburguer() {
  toggleHamburguerMenu();
}

function toggleHamburguerMenu() {
  var navbarHamburguer = document.querySelector(".navbar-hamburguer-container");
  if (navbarHamburguer.style.display === "flex") {
    navbarHamburguer.style.display = "none";
  } else {
    navbarHamburguer.style.display = "flex";
  }
}

function handleResize() {
  var navbarHamburguer = document.querySelector(".navbar-hamburguer-container");
  if (window.innerWidth > 768) {
    navbarHamburguer.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  var navbarHamburguer = document.querySelector(".navbar-hamburguer-container");
  navbarHamburguer.style.display = "none";

  window.addEventListener('resize', handleResize);
});
