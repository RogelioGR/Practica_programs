
const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 =  20.2;

console.log (numero1);
console.log (Number.parseInt (numero1)); // lo transforma de string a numero entero
console.log (Number.parseInt (numero2));
console.log (Number.parseFloat (numero2)); // decimal
console.log (Number.parseInt (numero3));

// revisar si un numero es entero o no 
console.log (Number.isInteger (numero4))
console.log (Number.isInteger (numero3));
