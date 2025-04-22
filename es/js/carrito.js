document.addEventListener('DOMContentLoaded', function () {
    const productosDiv = document.getElementById('productos-seleccionados');
    const campoProductos = document.getElementById('campo-productos');
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  
    function renderCarrito() {
      productosDiv.innerHTML = '';
      carrito.forEach((item, index) => {
        const contenedor = document.createElement('div');
        contenedor.style.display = 'flex';
        contenedor.style.justifyContent = 'space-between';
        contenedor.style.alignItems = 'center';
        contenedor.style.marginBottom = '10px';
  
        const texto = document.createElement('span');
        texto.textContent = `${item.producto} (x${item.cantidad})`;
  
        const boton = document.createElement('button');
        boton.textContent = 'Eliminar';
        boton.style.backgroundColor = '#c53030';
        boton.style.color = 'white';
        boton.style.border = 'none';
        boton.style.borderRadius = '4px';
        boton.style.cursor = 'pointer';
        boton.style.width = '80px';
        boton.style.height = '30px';
        boton.style.display = 'flex';
        boton.style.alignItems = 'center';
        boton.style.justifyContent = 'center';
  
        boton.onclick = () => {
          carrito.splice(index, 1);
          localStorage.setItem('carrito', JSON.stringify(carrito));
          renderCarrito();
        };
  
        contenedor.appendChild(texto);
        contenedor.appendChild(boton);
        productosDiv.appendChild(contenedor);
      });
  
      campoProductos.value = carrito.map(p => `${p.producto} (x${p.cantidad})`).join(', ');
    }
  
    renderCarrito();
  
    const form = document.querySelector('form');
    form.addEventListener('submit', function () {
      localStorage.removeItem('carrito');
    });
  });