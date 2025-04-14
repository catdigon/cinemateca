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


//Move filters if screen is small
function handleFilterContainer() {
  const filterBtn = document.getElementById("filterModalMenu")
  console.log(filterBtn)
  const returnBtn = document.getElementById("btn-return-back")


  function showFiltersBtn (){
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

    window.addEventListener("resize", showFiltersBtn)

  }

handleFilterContainer()



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

    searchLabelContent(filterText, ".card-detail-yellow", ".new-search");
    searchLabelContent(filterText, "#film-category", ".obra-card");
  });
});

 
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