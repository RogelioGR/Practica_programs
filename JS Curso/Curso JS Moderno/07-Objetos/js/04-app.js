const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true,
    
}

console.log(producto.nombre);

// destructuring
const {nombre, precio} = producto;  
console.log(nombre);
console.log(precio);
