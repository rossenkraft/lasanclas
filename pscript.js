function toggleContent(id) {
    var content = document.getElementById('content-' + id);
    var button = document.getElementById('toggleButton' + id);
    var icon = document.getElementById('toggleIcon' + id);

    // Alternar la visibilidad del contenido
    content.classList.toggle('active');
    button.classList.toggle('open'); // Para la animación de rotación del botón

    // Cambiar el icono según el estado
    if (content.classList.contains('active')) {
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-plus');
    }
}

function customScrollTo(target, duration = 500) {
    const element = document.querySelector(target);
    const start = window.scrollY;
    const end = element.offsetTop;
    const change = end - start;
    const startTime = performance.now();

    function animateScroll(currentTime) {
        const timeElapsed = currentTime - startTime;
        const progress = timeElapsed / duration;
        const easeProgress = easeInOutQuad(progress);

        window.scrollTo(0, start + change * easeProgress);

        if (timeElapsed < duration) {
            requestAnimationFrame(animateScroll);
        } else {
            window.scrollTo(0, end);
        }
    }

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(animateScroll);
}

document.addEventListener("DOMContentLoaded", function () {
    // Agregar el evento de clic para el botón de la sección 1
    document.getElementById('toggleButton1').addEventListener('click', function () {
        toggleContent(1);
        customScrollTo('#content-1', 800);
    });

    // Agregar el evento de clic para el botón dentro del contenido oculto
    document.getElementById('toggleButton1Content').addEventListener('click', function () {
        toggleContent(1);
        customScrollTo('#section-1', 800);
    });
});

// Sección 2 Toggle - Botón + y X
document.getElementById('toggleButton2').addEventListener('click', function() {
    toggleContent(2);
    customScrollTo('#content-2', 800);
});

// Toggle para el contenido de la sección 2
document.getElementById('toggleButton2Content').addEventListener('click', function() {
    toggleContent(2);
    customScrollTo('#section-2', 800);
});

// Función para alternar el contenido
function toggleContent(id) {
    var content = document.getElementById('content-' + id);
    var button = document.getElementById('toggleButton' + id);
    var icon = document.getElementById('toggleIcon' + id);

    // Alternar visibilidad
    content.classList.toggle('active');
    button.classList.toggle('open'); // Animación del botón

    // Cambiar icono según estado
    if (content.classList.contains('active')) {
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-plus');
    }
}

// Función para el scroll suave
function customScrollTo(target, duration = 500) {
    const element = document.querySelector(target);
    const start = window.scrollY;
    const end = element.offsetTop;
    const change = end - start;
    const startTime = performance.now();

    function animateScroll(currentTime) {
        const timeElapsed = currentTime - startTime;
        const progress = timeElapsed / duration;
        const easeProgress = easeInOutQuad(progress);

        window.scrollTo(0, start + change * easeProgress);

        if (timeElapsed < duration) {
            requestAnimationFrame(animateScroll);
        } else {
            window.scrollTo(0, end);
        }
    }

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(animateScroll);
}


// Sección 3 Toggle - Botón + y X
document.getElementById('toggleButton3').addEventListener('click', function() {
    toggleContent(3);
    customScrollTo('#content-3', 800);
});

// Toggle para el contenido de la sección 3
document.getElementById('toggleButton3Content').addEventListener('click', function() {
    toggleContent(3);
    customScrollTo('#section-3', 800);
});

// Función para alternar el contenido
function toggleContent(id) {
    var content = document.getElementById('content-' + id);
    var button = document.getElementById('toggleButton' + id);
    var icon = document.getElementById('toggleIcon' + id);

    // Alternar visibilidad
    content.classList.toggle('active');
    button.classList.toggle('open'); // Animación del botón

    // Cambiar icono según estado
    if (content.classList.contains('active')) {
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-plus');
    }
}

// Función para el scroll suave
function customScrollTo(target, duration = 500) {
    const element = document.querySelector(target);
    const start = window.scrollY;
    const end = element.offsetTop;
    const change = end - start;
    const startTime = performance.now();

    function animateScroll(currentTime) {
        const timeElapsed = currentTime - startTime;
        const progress = timeElapsed / duration;
        const easeProgress = easeInOutQuad(progress);

        window.scrollTo(0, start + change * easeProgress);

        if (timeElapsed < duration) {
            requestAnimationFrame(animateScroll);
        } else {
            window.scrollTo(0, end);
        }
    }

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(animateScroll);
}

// Sección 4 Toggle - Botón + y X
document.getElementById('toggleButton4').addEventListener('click', function() {
    toggleContent(4);
    customScrollTo('#content-4', 800);
});

// Toggle para el contenido de la sección 4
document.getElementById('toggleButton4Content').addEventListener('click', function() {
    toggleContent(4);
    customScrollTo('#section-4', 800);
});

// Función para alternar el contenido
function toggleContent(id) {
    var content = document.getElementById('content-' + id);
    var button = document.getElementById('toggleButton' + id);
    var icon = document.getElementById('toggleIcon' + id);

    // Alternar visibilidad
    content.classList.toggle('active');
    button.classList.toggle('open'); // Animación del botón

    // Cambiar icono según estado
    if (content.classList.contains('active')) {
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-plus');
    }
}

// Función para el scroll suave
function customScrollTo(target, duration = 500) {
    const element = document.querySelector(target);
    const start = window.scrollY;
    const end = element.offsetTop;
    const change = end - start;
    const startTime = performance.now();

    function animateScroll(currentTime) {
        const timeElapsed = currentTime - startTime;
        const progress = timeElapsed / duration;
        const easeProgress = easeInOutQuad(progress);

        window.scrollTo(0, start + change * easeProgress);

        if (timeElapsed < duration) {
            requestAnimationFrame(animateScroll);
        } else {
            window.scrollTo(0, end);
        }
    }

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(animateScroll);
}

// menú hamburguesa -------------------------------------------------------------------
// Obtén el botón de hamburguesa y el menú
const hamburgerIcon = document.getElementById('hamburger-icon');
const mobileMenu = document.getElementById('mobile-menu-2');
const header = document.getElementById('header');  // Asegúrate de darle un id a tu header

// Función para abrir/cerrar el menú
hamburgerIcon.addEventListener('click', () => {
    const isExpanded = hamburgerIcon.getAttribute('aria-expanded') === 'true';
    hamburgerIcon.setAttribute('aria-expanded', !isExpanded); // Alterna el estado del menú
    mobileMenu.classList.toggle('hidden'); // Alterna la visibilidad del menú

    // Cambiar el fondo del header
    header.classList.toggle('bg-black');  // Añadir o quitar la clase bg-black
});

// Cierra el menú si se hace clic en un enlace del menú
const menuLinks = mobileMenu.querySelectorAll('a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden'); // Oculta el menú
        hamburgerIcon.setAttribute('aria-expanded', 'false'); // Marca que el menú está cerrado
        header.classList.remove('bg-black');  // Quitar el fondo negro al cerrar
    });
});
