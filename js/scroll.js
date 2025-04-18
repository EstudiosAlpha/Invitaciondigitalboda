// Función para ajustar el tamaño de los elementos
function adjustSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Ejemplo de ajustes para los elementos
    // Puedes personalizar los selectores y las propiedades según tus necesidades
    document.body.style.width = width + 'px';
    document.body.style.height = height + 'px';

    // Ajustar tamaños de texto o elementos específicos, si es necesario
    document.querySelectorAll('.resize').forEach((element) => {
        element.style.fontSize = (width * 0.02) + 'px';  // Ajusta el tamaño de la fuente
        // Agrega otras personalizaciones de tamaño aquí
    });
}

// Llamar la función al cargar la página
window.addEventListener('load', adjustSize);

// Llamar la función cada vez que se redimensione la ventana
window.addEventListener('resize', adjustSize);
