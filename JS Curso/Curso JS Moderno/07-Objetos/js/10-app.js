const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true
}

const medida = {
    peso: '1kg',    
    medida: '1m'
}

console.log(producto);
console.log(medida);

const resultado = Object.assign( producto, medida ); //Une dos objetos, el primero es el que se modifica

console.log(resultado);

const resultado2 ={...producto, ...medida }; //Crea un nuevo objeto con los valores de los dos objetos
console.log(resultado2);