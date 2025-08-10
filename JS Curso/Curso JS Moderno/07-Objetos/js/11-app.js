const nombre = 'Monitor de ';
const precio = 3000;



const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio} pesos mexicanos y su disponibilidad es ${this.disponible ? 'disponible' : 'no disponible'}.`); // Método this para acceder a las propiedades del objeto 
    }
} 

producto.mostrarInfo(); // Llama al método mostrarInfo del objeto producto