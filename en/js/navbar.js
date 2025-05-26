// Menú hamburguesa
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('nav.menu-central'); // este es el contenedor <nav>

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active'); // ahora se alinea con tu CSS
    });
});