
const fechaInicio = new Date(2026, 5, 3, 0, 0, 0); 

const mensajes = [
    "Conocí a una mujercita muy linda...",
    "Si pudiera elegir un lugar seguro, sería a tu lado.",
    "Cuanto más tiempo estoy contigo más te quiero.",
    "— ¡Te quiero mucho! ❤️"
];

let mensajeActual = 0;
let caracterActual = 0;
const elementoTexto = document.getElementById("dynamic-text");

function escribirTexto() {
    if (mensajeActual < mensajes.length) {
        let textoCompleto = mensajes[mensajeActual];
        elementoTexto.innerHTML = textoCompleto.substring(0, caracterActual) + "_";
        
        if (caracterActual < textoCompleto.length) {
            caracterActual++;
            setTimeout(escribirTexto, 50);
        } else {
            mensajeActual++;
            caracterActual = 0;
            if (mensajeActual < mensajes.length) {
                setTimeout(escribirTexto, 3000);
            } else {
                elementoTexto.innerHTML = elementoTexto.innerHTML.slice(0, -1);
            }
        }
    }
}

function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("counter").innerHTML = 
        `<span>${dias}</span> DÍAS, <span>${horas}</span> HORAS, <span>${minutos}</span> MINUTOS, <span>${segundos}</span> SEGUNDOS`;
}

// Algoritmo matemático para la copa frondosa de corazones pastel
function crearFollaje() {
    const follaje = document.getElementById("foliage");
    const colores = ['#FFC6FF', '#FFADAD', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#A0C4FF', '#FFD6A5'];
    const totalCorazones = 180; 

    for (let i = 0; i < totalCorazones; i++) {
        const corazon = document.createElement("div");
        corazon.classList.add("heart");

        const angulo = Math.random() * Math.PI * 2;
        const radioX = Math.pow(Math.random(), 0.7) * 75;
        const radioY = Math.pow(Math.random(), 0.7) * 70;

        const xValue = 100 + radioX * Math.cos(angulo);
        const yValue = 80 + radioY * Math.sin(angulo) - (Math.abs(radioX * Math.cos(angulo)) * 0.2); 

        const escala = 0.5 + Math.random() * 0.7;
        const colorAzar = colores[Math.floor(Math.random() * colores.length)];

        corazon.style.setProperty('--x', `${xValue}px`);
        corazon.style.setProperty('--y', `${yValue}px`);
        corazon.style.setProperty('--scale', escala);
        corazon.style.backgroundColor = colorAzar;

        corazon.style.animation = 'popHeart 1s cubic-bezier(0.175, 0.885, 0.32, 1.2) forwards';
        corazon.style.animationDelay = `${Math.random() * 2}s`;

        follaje.appendChild(corazon);
    }
}

window.onload = () => {
    crearFollaje();
    setTimeout(escribirTexto, 500);
    setInterval(actualizarContador, 1000);
    actualizarContador();
};
