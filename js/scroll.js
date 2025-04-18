// Deshabilitar el scroll horizontal
function disableHorizontalScroll() {
    document.documentElement.style.overflowX = "hidden"; // Bloquea el scroll horizontal
    document.body.style.overflowX = "hidden"; // Asegura que también se aplique al body
}

// Ejecuta el código cuando la página esté completamente cargada
window.onload = function() {
    disableHorizontalScroll();
};

function ajustarPantalla() {
    // Obtener el tamaño de la pantalla
    const altoPantalla = window.innerHeight;
    const anchoPantalla = window.innerWidth;

    // Aquí puedes hacer ajustes a elementos según el tamaño de la pantalla
    const header = document.querySelector('.header1');
    const headerImagen = header.querySelector('img');
    
    // Ajustar el tamaño de la imagen en el header según el ancho de la pantalla
    if (anchoPantalla < 600) {
      headerImagen.style.height = "12px";
      headerImagen.style.width = "14px";
    } else if (anchoPantalla < 1000) {
      headerImagen.style.height = "18px";
      headerImagen.style.width = "20px";
    } else {
      headerImagen.style.height = "22px";
      headerImagen.style.width = "24px";
    }

    // Ajuste de la altura del contenido si es necesario
    const contenido = document.querySelector('.contenidoHeader');
    contenido.style.paddingTop = (altoPantalla * 0.1) + "px"; // Añade padding basado en el 10% de la altura de la pantalla
  }

  // Ejecutar la función al cargar la página
  window.onload = function() {
    ajustarPantalla(); // Ajustar el tamaño al cargar la página
  };

  // Ajustar también cuando el usuario cambie el tamaño de la ventana
  window.onresize = function() {
    ajustarPantalla(); // Ajustar cada vez que se cambie el tamaño de la ventana
  };