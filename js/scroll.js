// Deshabilitar el scroll horizontal tan pronto como el contenido esté cargado
function disableHorizontalScroll() {
    document.documentElement.style.overflowX = "hidden";

    // Evitar desplazamiento horizontal con el ratón
    window.addEventListener("wheel", function(e) {
        if (e.deltaX !== 0) {
            e.preventDefault();
        }
    }, { passive: false });

    // Evitar desplazamiento horizontal con pantallas táctiles
    window.addEventListener("touchmove", function(e) {
        if (e.touches[0].pageX !== 0) {
            e.preventDefault();
        }
    }, { passive: false });
}

// Ejecutar en DOMContentLoaded
document.addEventListener("DOMContentLoaded", disableHorizontalScroll);
// Ejecutar también al cargar imágenes y recursos (si es necesario)
window.addEventListener("load", disableHorizontalScroll);
// También ejecutarlo cuando se redimensiona la ventana
window.addEventListener("resize", disableHorizontalScroll);