// Barra con scroll
window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector('.navbar').classList.add('scrolled');
    } else {
        document.querySelector('.navbar').classList.remove('scrolled');
    }
};

// Menú hamburguesa
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('nav.menu-central');

    // Mostrar/ocultar menú al hacer clic en el icono hamburguesa
    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace de navegación interno
    const menuLinks = menu.querySelectorAll('a[href^="#"]');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Solo cerrar si el menú está activo
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
            }
        });
    });
});

