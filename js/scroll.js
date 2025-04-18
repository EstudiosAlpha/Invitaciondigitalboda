// no-scroll.js
document.addEventListener("DOMContentLoaded", function() {
    // Deshabilitar el scroll horizontal
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
});
