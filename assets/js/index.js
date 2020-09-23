const d = document;

d.addEventListener('DOMContentLoaded', () => {
	buscarProducto();
});

function buscarProducto() {
	const $productos = d.querySelectorAll('.producto');
	const $mensaje = d.querySelector('.mensaje');
	// console.log($productos);

	d.addEventListener('keyup', (e) => {
		if (e.target.matches('#search')) {
			// console.log(e.target.value);

			let contador = 0;
			$productos.forEach((producto) => {
				//prettier-ignore
				if(producto.children[1].children[0].textContent.toLowerCase().includes(e.target.value.toLowerCase())){
          producto.classList.remove('filter');
          --contador;
        }else{
          producto.classList.add('filter');
          ++contador;
        }

				if (contador >= $productos.length) {
					$mensaje.style.display = 'block';
				} else {
					$mensaje.style.display = 'none';
				}
			});
		}
	});
}
