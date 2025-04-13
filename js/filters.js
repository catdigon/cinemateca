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