"use strict"; // Modo estricto de JS

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true
}

Object.freeze( producto ); //Evita que se agreguen nuevas propiedades o se eliminen


/* producto.disponible = false;
producto.imagen = 'imagen.jpg'; */

/* delete producto.precio; //No se elimina por el freeze
 */
console.log(producto);

console.log(Object.isFrozen(producto)); //true si el objeto esta congelado, false si no lo esta 


