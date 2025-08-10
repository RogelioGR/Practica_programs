const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true,
    informacion:{
        peso: '1kg',
        medidas: {
            medidaAlto: '1m'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}
console.log(producto);
const {nombre, precio, informacion:{fabricacion: {pais}}} = producto;  
console.log(nombre);

console.log(pais);


