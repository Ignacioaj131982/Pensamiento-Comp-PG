let clima = "soleado";

let dia = "martes";

if(clima =="soleado" && dia =="domingo") {
    console.log("Salgo a jugar");
} else if (clima == "soleado" && dia == "lunes"){
    console.log("Podria salir igual");
} else {
    console.log("Mejor me quedo en casa practicando js");
}



const probandoFuncion = (dato, estoyAprendiendoJs) => {
    if(dato === "Nacho" && estoyAprendiendoJs === "sabe") {console.log("es true")} 
    else {"no se si esta bien"}

    return probandoFuncion

}

let resultado = probandoFuncion(console.log("Nacho", "no sabe"));
