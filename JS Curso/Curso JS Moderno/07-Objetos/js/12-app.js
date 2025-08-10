// objects literal
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true
}
// Constructor de objetos
function Producto (nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor Curvo de 49 pulgadas', 800);
/* console.log(producto);
 */
console.log(producto2);