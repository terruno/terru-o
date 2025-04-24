function añadirAlCarrito(nombreProducto, idCantidad) {
    const cantidad = parseInt(document.getElementById(idCantidad).value);
    if (isNaN(cantidad) || cantidad < 1) {
      alert('Por favor, introduce una cantidad válida.');
      return;
    }
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push({ producto: nombreProducto, cantidad: cantidad });
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`${nombreProducto} (x${cantidad}) añadido al carrito.`);

    actualizarContadorCarrito();
  }