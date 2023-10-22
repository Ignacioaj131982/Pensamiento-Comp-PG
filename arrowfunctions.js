// Ejemplo de una función clasica

function anterior(numero){
    return numero - 1; 

}

console.log(anterior(4));

function dividir(a, b){
    return a / b;
}

console.log(dividir(8,2));

//ejemplo de una arrow function

let dividi = (a, b) => a/ b;

console.log(dividi(9, 3));

let multiplica = (a, b) => a * b;

console.log(multiplica(2, 6));

let laMitad = numero => numero / 2; /*el parámetro no está en paréntesis porque es un solo parámetro en este caso "numero"*/

console.log(laMitad(8));

let divido =(numeroA, numeroB) => numeroA / numeroB; /* cuando hay mas parámetros "numeroA" y "numeroB" es necesario poner paréntesis*/

console.log(divido(10, 2));
//¿Como es que la función está devolviendo algo si no estoy utilizando "return" o las llaves?
//lo puedo hacer porque estoy creando un solo resultado posible y estoy haciendo sólo una operación

/*function dameCinco() {
    return [1,2,3,4,5];
}*/

/*function multiplicarPorDos() {
  return 123 * 2 ;
}*/

/*function mostrarNombre() {
return "Mi nombre es Hernán";
}*/

let dameCinco = () => [1,2,3,4,5];

console.log(dameCinco());

let multiplicarPorDos = () => 123 * 2;

console.log(multiplicarPorDos());

let mostrarNombre = () => "Mi nombre es Hernán"

console.log(mostrarNombre());

/*function saludo(nombre) {
    return 'Hola, ' + nombre + '!';
}*/

let saludo = nombre => 'Hola, ' + nombre + '!';

console.log(saludo("Conejo Pepito"));

/*function saludar(nombre, apellido) {
    return 'Hola, ' + nombre + ' ' +  apellido + '!';
}*/

let saludar = (nombre, apellido) => 'Hola, ' + nombre + ' ' + apellido + '!';

console.log(saludar("Conejo Pepito", "Perez"));


