/**Load components to pages*/
async function loadComponent(id, file) {
  await fetch(file)
    .then(async response => {
      return await response.text()
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => {
      console.error(`Error loading ${file}:`, error)
    });
}

/**Load and place navbar and footer*/
window.addEventListener("DOMContentLoaded", () => {
  loadComponent("navbar-placeholder", "navbar.html");
  loadComponent("footer-placeholder", "footer.html");
});

/**Change: Show/Hide the elements on Menu/Navbar*/
function toggleVisibilityElement(selector) {
  var element = document.querySelector(selector);
  const icon = document.querySelector(".navbar-menu-icon")
  if (element.style.display === "flex") {
    element.style.display = "none";
    icon.style.opacity = "1"
  } else {
    element.style.display = "flex";
    icon.style.opacity = "0"
  }
}

/**Hide always the element*/
function hideElementAlways(selector) {
  var element = document.querySelector(selector);
  element.style.display = "none";
}

/**Hide Hamburguer if display is large*/
function handleHideHamburguerWhenScreenLarge() {
  var navbarHamburguer = document.querySelector(".navbar-hamburguer-container");
  const icon = document.querySelector("#navbar-hamburguer-icon")
  if (window.innerWidth > 768 && navbarHamburguer) {
    navbarHamburguer.style.display = "none";
    icon.style.opacity = "1"
  }
}

/**Logic runs when the page loads 1sr time*/
document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener('resize', handleHideHamburguerWhenScreenLarge);
});


/**btn scroll to the top of the document*/
function returnTopFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/**Navbar scrool*/
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/**Place svg icon - btn*/
document.addEventListener("DOMContentLoaded", function () {
  searchBtnIcons()
});

function searchBtnIcons() {
  // Icons SVG classes
  const icons = {
    "btn-return-back":
      `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
        < g id="Ã&shy;cone/seta" >
          <path id="Vector" d="M0.685136 4.72619C0.624528 4.72619 0.566084 4.70238 0.520629 4.65692C0.434046 4.56601 0.43621 4.42098 0.527122 4.3344L4.67227 0.329955C4.76318 0.243372 4.9082 0.245537 4.99479 0.336448C5.08137 0.42736 5.0792 0.572386 4.98829 0.658969L0.843149 4.66342C0.799858 4.70671 0.743579 4.72619 0.685136 4.72619Z" fill="#100C07"/>
          <path id="Vector_2" d="M4.83019 8.73266C4.77391 8.73266 4.71546 8.71101 4.67217 8.66772L0.52703 4.66327C0.459928 4.59833 0.438283 4.49876 0.47508 4.41435C0.509713 4.32776 0.594131 4.27148 0.687208 4.27148H7.58784C9.76756 4.27148 11.5425 6.04426 11.5425 8.22615V8.50321C11.5425 8.62876 11.4408 8.73049 11.3152 8.73049C11.1897 8.73049 11.0879 8.62876 11.0879 8.50321V8.22398C11.0879 6.29535 9.51864 4.72604 7.59001 4.72604H1.24999L4.9882 8.3387C5.07911 8.42529 5.08128 8.57031 4.99469 8.66122C4.94924 8.70884 4.89079 8.73266 4.83019 8.73266Z" fill="#100C07"/>
        </g >
        </svg >`,
    "btn-add":
      `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
          <path id="Vector" d="M11.9085 0.731751C11.8393 0.663354 11.7459 0.625 11.6485 0.625C11.5512 0.625 11.4578 0.663354 11.3885 0.731751L4.51854 8.46175L1.60854 6.13175C1.57086 6.09333 1.52544 6.06336 1.4753 6.04381C1.42516 6.02427 1.37143 6.01559 1.31769 6.01837C1.26394 6.02114 1.2114 6.0353 1.16354 6.0599C1.11568 6.08451 1.07359 6.119 1.04005 6.16109C1.00652 6.20318 0.982314 6.25192 0.969031 6.30407C0.955749 6.35622 0.953695 6.4106 0.963006 6.46361C0.972317 6.51661 0.992781 6.56703 1.02304 6.61154C1.0533 6.65604 1.09267 6.69361 1.13854 6.72175L4.36854 9.27175C4.43899 9.33784 4.53195 9.37462 4.62854 9.37462C4.72513 9.37462 4.8181 9.33784 4.88854 9.27175L11.9485 1.27175C11.9817 1.23384 12.0071 1.1897 12.023 1.14191C12.039 1.09412 12.0453 1.04363 12.0416 0.993378C12.0379 0.943126 12.0242 0.894116 12.0013 0.8492C11.9785 0.804285 11.947 0.764361 11.9085 0.731751Z" fill="#FCFAF8"/>
        </svg>`,
    "btn-x":
      `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
        <g id="Ã&shy;cone/x">
          <path id="Vector" d="M9.99711 9.61333C9.99741 9.66392 9.98771 9.71408 9.96858 9.76092C9.94945 9.80776 9.92126 9.85036 9.88563 9.88628C9.84989 9.92232 9.80737 9.95092 9.76052 9.97043C9.71367 9.98995 9.66342 10 9.61267 10C9.56192 10 9.51167 9.98995 9.46482 9.97043C9.41797 9.95092 9.37545 9.92232 9.33972 9.88628L0.113062 0.659628C0.0406695 0.587235 0 0.489051 0 0.386673C0 0.284295 0.0406695 0.18611 0.113062 0.113718C0.185454 0.0413265 0.283639 0.000656128 0.386017 0.000656128C0.488395 0.000656128 0.58658 0.0413265 0.658972 0.113718L9.88563 9.34037C9.92126 9.37629 9.94945 9.4189 9.96858 9.46574C9.98771 9.51258 9.99741 9.56273 9.99711 9.61333Z" fill="#100C07"/>
          <path id="Vector_2" d="M9.99711 0.386353C9.99741 0.436948 9.98771 0.487103 9.96858 0.533943C9.94945 0.580783 9.92126 0.623384 9.88562 0.659307L0.658972 9.88596C0.58658 9.95835 0.488395 9.99902 0.386017 9.99902C0.283639 9.99902 0.185454 9.95835 0.113062 9.88596C0.0406695 9.81357 7.62776e-10 9.71538 0 9.61301C-7.62776e-10 9.51063 0.0406695 9.41244 0.113062 9.34005L9.33972 0.113398C9.37545 0.077364 9.41797 0.0487633 9.46482 0.0292454C9.51167 0.00972748 9.56192 -0.000320435 9.61267 -0.000320435C9.66342 -0.000320435 9.71367 0.00972748 9.76052 0.0292454C9.80737 0.0487633 9.84989 0.077364 9.88562 0.113398C9.92126 0.14932 9.94945 0.191922 9.96858 0.238762C9.98771 0.285602 9.99741 0.335757 9.99711 0.386353Z" fill="#100C07"/>
        </g>
        </svg>`
  };

  /**Select all btns */
  const btnCollection = document.querySelectorAll(".btn-icon");

  btnCollection.forEach(button => {
    // Run all classes to find the currect svg
    for (let className in icons) {
      if (button.classList.contains(className)) {
        // Creat an span elemento to place the SVG icon
        const iconSpan = document.createElement("span");
        iconSpan.innerHTML = icons[className];

        // Put the icon before text
        button.prepend(iconSpan);
        break; // Stop when it finds a match
      }
    }
  });
}

