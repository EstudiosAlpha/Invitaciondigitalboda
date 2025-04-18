// Deshabilitar el scroll horizontal
function disableHorizontalScroll() {
    document.documentElement.style.overflowX = "hidden"; // Bloquea el scroll horizontal
    document.body.style.overflowX = "hidden"; // Asegura que también se aplique al body
}

// Ejecuta el código cuando la página esté completamente cargada
window.onload = function() {
    disableHorizontalScroll();
};