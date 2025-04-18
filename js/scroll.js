// Evitar scroll horizontal, pero permitir el vertical
window.addEventListener('wheel', function (e) {
    if (e.deltaX !== 0) {
        e.preventDefault();  // Previene el scroll horizontal
    }
}, { passive: false });

// Permitir animaciones de AOS
AOS.init({
    // Tu configuración personalizada de AOS
    disable: false  // Asegura que AOS siga funcionando
});
