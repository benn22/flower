// Función para generar una flor en una posición aleatoria
function createFlower() {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(flower);

    // Animación de caída de la flor
    flower.animate(
        [
            { transform: "translateY(-100px)" },
            { transform: `translateY(${window.innerHeight}px)` },
        ],
        {
            duration: Math.random() * 5000 + 3000, // Duración aleatoria
            easing: "linear",
            iterations: 1,
            fill: "forwards",
        }
    );

    // Eliminar la flor después de completar su animación
    flower.addEventListener("animationend", () => {
        document.body.removeChild(flower);
    });    
}

// Crear flores continuamente
setInterval(createFlower, 250); // Ajusta la velocidad de la lluvia según tus preferencias