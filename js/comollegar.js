var img1 = document.getElementById("img1");
                    var img2 = document.getElementById("img2");
                    var img3 = document.getElementById("img3");
                    var img4 = document.getElementById("img4");

                    var content1 = document.getElementById("content1");
                    var content2 = document.getElementById("content2");
                    var content3 = document.getElementById("content3");
                    var content4 = document.getElementById("content4");

                    img1.addEventListener("click", function () {
                        img1.classList.add("selected");
                        img2.classList.remove("selected");
                        img3.classList.remove("selected");
                        img4.classList.remove("selected");
                        content1.style.display = "block";
                        content2.style.display = "none";
                        content3.style.display = "none";
                        content4.style.display = "none";
                    });

                    img2.addEventListener("click", function () {
                        img1.classList.remove("selected");
                        img2.classList.add("selected");
                        img3.classList.remove("selected");
                        img4.classList.remove("selected");
                        content1.style.display = "none";
                        content2.style.display = "block";
                        content3.style.display = "none";
                        content4.style.display = "none";
                    });

                    img3.addEventListener("click", function () {
                        img1.classList.remove("selected");
                        img2.classList.remove("selected");
                        img3.classList.add("selected");
                        img4.classList.remove("selected");
                        content1.style.display = "none";
                        content2.style.display = "none";
                        content3.style.display = "block";
                        content4.style.display = "none";
                    });
                    img4.addEventListener("click", function () {
                        img1.classList.remove("selected");
                        img2.classList.remove("selected");
                        img3.classList.remove("selected");
                        img4.classList.add("selected");
                        content1.style.display = "none";
                        content2.style.display = "none";
                        content3.style.display = "none";
                        content4.style.display = "block";
                    });
              
                    var currentContent = 1;

                    function changeContent(direction) {
                        currentContent += direction;

                        if (currentContent < 1) {
                            currentContent = 4;
                        } else if (currentContent > 4) {
                            currentContent = 1;
                        }

                        updateSelectedContent();
                    }

                    function updateSelectedContent() {
                        for (var i = 1; i <= 4; i++) {
                            var imgElement = document.getElementById("img" + i);
                            var contentElement = document.getElementById("content" + i);

                            if (i === currentContent) {
                                imgElement.classList.add("selected");
                                contentElement.style.display = "block";
                            } else {
                                imgElement.classList.remove("selected");
                                contentElement.style.display = "none";
                            }
                        }
                    }
            
                    // Configura Hammer.js en el contenedor de imágenes con umbral y pointers más bajos (mayor sensibilidad)
                    var mc = new Hammer(document.getElementById('imageContainer'), {
                        threshold: 5,  // Puedes ajustar este valor según tus necesidades
                        pointers: 1     // Utiliza solo un dedo para el gesto
                    });
                
                    // Maneja los eventos de swipe hacia la izquierda y derecha
                    mc.on('swipeleft swiperight', function (event) {
                        if (event.type === 'swiperight') {
                            // Swipe hacia la derecha
                            changeContent(-1);
                        } else if (event.type === 'swipeleft') {
                            // Swipe hacia la izquierda
                            changeContent(1);
                        }
                    });