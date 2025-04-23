// Función para actualizar el contador del carrito
function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

    // Actualiza el contador en todos los elementos con id "cart-count"
    const elementosContador = document.querySelectorAll('#cart-count');
    elementosContador.forEach(elemento => {
        elemento.textContent = totalItems;
    });
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', actualizarContadorCarrito);