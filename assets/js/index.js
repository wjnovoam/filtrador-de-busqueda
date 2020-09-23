const d = document;

d.addEventListener('DOMContentLoaded', () => {
	buscarProducto();
});

function buscarProducto() {
	const $productos = d.querySelectorAll('.producto');
	// console.log($productos);

	d.addEventListener('keyup', (e) => {
		if (e.target.matches('#search')) {
			console.log(e.target.value);

			$productos.forEach((producto) => {
				producto.children[1].children[0].textContent
					.toLowerCase()
					.includes(e.target.value.toLowerCase())
					? producto.classList.remove('filter')
					: producto.classList.add('filter');
			});
		}
	});
}
