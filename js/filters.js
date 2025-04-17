function mover() {
  const div = document.getElementById("filter-toolbar");
  const destino = document.getElementById("filtersMobile");
  destino.appendChild(div);
}


function reverter() {
  const div = document.getElementById("filter-toolbar");
  const destinoOriginal = document.getElementById("filterDesktop");
  const mainResults = document.getElementById("main-container")
  destinoOriginal.insertBefore(div, mainResults)
}

handleFilterContainer()

//Move filters if screen is small
function handleFilterContainer() {
  const filterBtn = document.getElementById("filterModalMenu")
  const returnBtn = document.getElementById("btn-return-back")

  if (returnBtn) {
    if (window.innerWidth < 992) {
      filterBtn.style.display = "flex"
      returnBtn.style.display = "none"
      mover()
    } else {
      filterBtn.style.display = "none"
      returnBtn.style.display = "flex"
      reverter()
    }

    if (window.innerWidth > 992) {
      filterBtn.style.display = "none"
      returnBtn.style.display = "flex"
      reverter()
    }
  }

  if (!returnBtn) {
    if (window.innerWidth < 992) {
      filterBtn.style.display = "flex"
      mover()
    } else {
      filterBtn.style.display = "none"
      reverter()
    }

    if (window.innerWidth > 992) {
      filterBtn.style.display = "none"
      reverter()
    }
  }

}

window.addEventListener("resize", handleFilterContainer)

var i;

/**Open/Close filters*/
var acordionFilters = document.getElementsByClassName("accordion");

for (i = 0; i < acordionFilters.length; i++) {
  acordionFilters[i].addEventListener("click", function () {
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

/**Add/Remove ative filters*/
var filterOptions = document.getElementsByClassName('filter-option');

for (i = 0; i < filterOptions.length; i++) {
  filterOptions[i].addEventListener('click', function () {
    // Change the class 'show-icon' to show/hide the icon
    this.classList.toggle('add-filter');
    this.classList.toggle('bold-text');
  });
}

//Change filters (news and acervo)
document.querySelectorAll('.filtros-categories').forEach(item => {
  item.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent load page
    document.querySelectorAll('.filtros-categories').forEach(i => i.classList.remove('active'));
    this.classList.add('active');

    const filterText = this.textContent.trim();
    console.log("BTN says", filterText)

    addFilterSelected(filterText)

    searchLabelContent(filterText, ".card-detail-yellow", ".new-search");
    searchLabelContent(filterText, "#film-category", ".obra-card");
  });
});

//Logic to filter and display results
function searchLabelContent(filterContent, contentId, AreaId) {
  const contentLabel = document.querySelectorAll(contentId);
  const contentArea = document.querySelectorAll(AreaId);
  const pagination = document.querySelector(".pagination")


  if (filterContent === "Ver tudo") {
    contentArea.forEach(content => {
      content.style.display = "flex";
      pagination.style.display = "flex";
    });
    return;
  }

  contentLabel.forEach((label, index) => {
    const labelText = label.textContent.trim();
    const content = contentArea[index];

    if (labelText === filterContent) {
      content.style.display = "flex";
      pagination.style.display = "none";
    } else {
      content.style.display = "none";
      pagination.style.display = "none";
      return
    }
  })
}

//Logic to add/remove filter added to results container
function addFilterSelected(filterText) {
  const filtersContainer = document.querySelector(".filters-added")
  const categoryFilter = filtersContainer.querySelector(".filter-category")

  if (filterText === "Ver tudo") {
    if (categoryFilter) {
      categoryFilter.remove()
    }
  }

  const filterBtn = document.createElement("button");
  filterBtn.classList.add("btn-icon", "btn-x", "btn-filter-added", "filter-category")
  filterBtn.innerText = filterText;

  filterBtn.addEventListener("click", function () {
    this.remove(); // Delete btn added
  });

  if (categoryFilter) {
    categoryFilter.replaceWith(filterBtn)
  } else {
    filtersContainer.appendChild(filterBtn)
  }

  searchBtnIcons()

  console.log("O texto deveria ser", filterText)

}

//Open acervo and present results according footer selection
document.querySelectorAll(".footer-filter").forEach(item => {
  item.addEventListener("click", function () {
    const filterText = this.textContent.trim();
    window.location.href = `produtos.html?category=${encodeURIComponent(filterText)}`;
  });
});

document.querySelectorAll(".body-menu-navbar").forEach(item => {
  item.addEventListener("click", function (event) {
    event.preventDefault();

    const filterText = this.textContent.trim();
    window.location.href = `produtos.html?category=${encodeURIComponent(filterText)}`;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const filterText = urlParams.get("category");

  if (filterText) {
    console.log("Menu filtrou por", filterText);

    document.querySelectorAll('.filtros-categories').forEach(item => {
      if (item.textContent.trim() === filterText) {
        item.click(); // Simula um clique no botão
      }
    });
  }
});