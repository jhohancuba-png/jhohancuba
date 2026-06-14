// ===============================
// HORARIO AUTOMÁTICO LA PAZ
// ===============================

function comprobarHorario() {
    const ahora = new Date();

    const horaLaPaz = parseInt(
        new Intl.DateTimeFormat('es-BO', {
            timeZone: 'America/La_Paz',
            hour: 'numeric',
            hour12: false
        }).format(ahora)
    );

    const diaLaPaz = parseInt(
        new Intl.DateTimeFormat('es-BO', {
            timeZone: 'America/La_Paz',
            weekday: 'numeric'
        }).format(ahora)
    );

    const contenedor = document.getElementById('estado-horario');

    if (!contenedor) return;

    let abierto = false;

    const diaReal = ahora.getDay();

    if (diaReal === 0) {
        // Domingo
        abierto = horaLaPaz >= 9 && horaLaPaz < 14;
    } else {
        // Lunes a sábado
        abierto = horaLaPaz >= 8 && horaLaPaz < 18;
    }

    if (abierto) {
        contenedor.innerHTML =
            '<span class="circulo verde"></span> <span class="texto-estado">ABIERTO AHORA - ¡PASA POR TU JUGO AL PASO!</span>';
    } else {
        contenedor.innerHTML =
            '<span class="circulo rojo"></span> <span class="texto-estado">CERRADO - TE ESPERAMOS EN NUESTRO PRÓXIMO HORARIO</span>';
    }
}

window.addEventListener("DOMContentLoaded", comprobarHorario);


// ===============================
// MODO OSCURO / CLARO
// ===============================

const toggleBtn = document.getElementById("theme-toggle");

if (toggleBtn) {

    if (localStorage.getItem("tema") === "claro") {
        document.body.classList.add("light-mode");
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }

    toggleBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            toggleBtn.textContent = "☀️";
            localStorage.setItem("tema", "claro");

        } else {

            toggleBtn.textContent = "🌙";
            localStorage.setItem("tema", "oscuro");

        }
    });
}


// ===============================
// BOTÓN VOLVER ARRIBA
// ===============================

const btnTop = document.getElementById("btn-top");

if (btnTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            btnTop.style.display = "block";
        } else {
            btnTop.style.display = "none";
        }

    });

    btnTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}