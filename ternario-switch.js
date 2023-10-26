// ternario

let fruta = "Banana";

let resultado = fruta === "Camote"?"Buenisimo, me gustan las bananas":"Queria Banana";

console.log(resultado);

// switch

let semaforo = "Amarillo";

switch(semaforo) {
    case "Verde": 
    console.log("Avance");
    break
    case "Amarillo":
    console.log("Precaucion");
    break
    case "Rojo":
    console.log("No avanzar");
    break
    default:
    console.log("No funciona el semaforo");
}