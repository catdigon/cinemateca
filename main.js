/**Change: Show/Hide the elements on Menu/Navbar*/
function  toggleVisibilityElement(selector) {
  var element = document.querySelector(selector);
  if (element.style.display === "flex") {
    element.style.display = "none";
  } else {
    element.style.display = "flex";
  }
}

/**Hide alwaus the element*/
function hideElementAlways(selector) {
  var element = document.querySelector(selector);
  element.style.display = "none";
}


function handleHideHamburguerWhenScreenLarge() {
  var navbarHamburguer = document.querySelector(".navbar-hamburguer-container");
  if (window.innerWidth > 768 && navbarHamburguer) {
    navbarHamburguer.style.display = "none";
  }
}

/**Logic runs when the page loads 1sr time*/
document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener('resize', handleHideHamburguerWhenScreenLarge);
});

var acordionFilters = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acordionFilters.length; i++) {
  acordionFilters[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    //update the aria-expanded when closing
    this.setAttribute("aria-expanded", "false");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      //update the aria-expanded when opening
      this.setAttribute("aria-expanded", "true");
    } 
  });
}

var filterOptions = document.getElementsByClassName('filter-option');

for (i = 0; i < filterOptions.length; i++) {
    filterOptions[i].addEventListener('click', function() {
        // Change the class 'show-icon' to show/hide the icon
        this.classList.toggle('add-filter');
    });
}

//**btn scroll to the top of the document*/
function returnTopFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}