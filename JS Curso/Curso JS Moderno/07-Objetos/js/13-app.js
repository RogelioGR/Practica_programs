const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true
}

console.log( Object.keys(producto) ); // Devuelve un array con las claves del objeto

console.log( Object.values(producto) ); // Devuelve un array con los valores del objeto

console.log( Object.entries(producto) ); // Devuelve un array con las claves y valores del objeto como subarrays