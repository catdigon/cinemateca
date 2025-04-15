    const fichaTecnica = document.querySelector(".lateral-container")
    const primaryContent = document.querySelector(".primary-content-container");
    const productContainer = document.querySelector(".product-container");
    const newsContainer = document.querySelector(".news-container");
    const pageLayout = document.querySelector(".page-layout-container");

    const originalPositionMarker = document.createElement('div');
    fichaTecnica.parentNode.insertBefore(originalPositionMarker, fichaTecnica.nextSibling);

    function moveFichaTecnica() {
        if (window.innerWidth < 992) {
            if (fichaTecnica.parentNode !== productContainer) {
                productContainer.insertBefore(fichaTecnica, newsContainer);
            }
        } else {
            if (fichaTecnica.parentNode !== pageLayout) {
                pageLayout.insertBefore(fichaTecnica, originalPositionMarker);
            }
        }
    }

    window.addEventListener('load', moveFichaTecnica);
    window.addEventListener('resize', moveFichaTecnica);