"use strict"; // Modo estricto de JS

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true
}

Object.seal( producto ); //Evita que se agreguen nuevas propiedades o se eliminen

producto.disponible = false; 
/* producto.imagen = 'imagen.jpg';  
 */
/* delete producto.precio; //No se elimina por el freeze
 */
console.log(producto);

console.log(Object.isSealed(producto)); //true si el objeto esta sellado, false si no lo esta

