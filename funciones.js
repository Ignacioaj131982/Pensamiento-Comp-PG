// Función expresada

let sumar = function(numeroA, numeroB/*parametro o valor que va a realizar la función*/){
    return numeroA + numeroB;/*devuelve la operación solicitada*/
} //toda función siempre lleva paréntesis y llave

console.log(sumar(7, 9));//para que muestre la funcion debemos poner los valores de numeroA y numeroB

// Función declarada
function restar(numeroB, numeroC) {
    return numeroB - numeroC;
}

console.log(restar(7, 2));

// Scope: es el alcance que va a tener una variable
// Scope local: cuando existen variables declaradas dentro de una función. Fuera de la función la variable es inexistente

function hola(){
    //scope local
    let saludar ="Hola ¿Que tal?";
    return saludar;
}

console.log(hola());
//console.log(saludar); //como saludar esta dentro de la función va a decir que es not defined

/*Scope global: se da cuando las variables se dan fuera de cualquier función. Teniendo alcance en cualquier lugar 
del código*/

let elMejorLenguaje = "JS es el mejor lenguaje";
function estoyAprendiendo(){
    return elMejorLenguaje;
    
}

console.log(estoyAprendiendo());

// Ejemplo de scope:

let mensaje = "hola scope general";

function saludar(){
    let mensaje ="scope local";
    return mensaje //este mensaje se corresponde con la variable dentro de la función
}

//console.log(saludar());
console.log(mensaje);
console.log(saludar());

function ejemplo(texto) {
    return texto = "hola, soy una función";
}

console.log(ejemplo());

