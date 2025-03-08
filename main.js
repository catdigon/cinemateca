/**Função Trocar: Esconder/Mostrar elementos Menu/Navbar*/
function  toggleVisibilityElement(selector) {
  var element = document.querySelector(selector);
  if (element.style.display === "flex") {
    element.style.display = "none";
  } else {
    element.style.display = "flex";
  }
}

/**Função Esconder Sempre Elemento*/
function hideElementAlways(selector) {
  var element = document.querySelector(selector);
  element.style.display = "none";
}



function handleHideHamburguerWhenScreenLarge() {
  var navbarHamburguer = document.querySelector(".navbar-hamburguer-container");
  if (window.innerWidth > 768) {
    navbarHamburguer.style.display = "none";
  }
}

/**Logica corre quando a pagina abre pela 1vez*/
document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener('resize', handleHideHamburguerWhenScreenLarge);
});