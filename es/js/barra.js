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
    const menu = document.querySelector('nav.menu-central'); // este es el contenedor <nav>

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active'); // ahora se alinea con tu CSS
    });
});
