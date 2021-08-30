// Ema quiere cocinar galletitas y quiere un programa que lo ayude a saber qué debe comprar y en caso que cuente con todos los ingredientes, informar que puede cocinar las galletitas. La receta pide los siguientes ingredientes
// 3 huevos
// 1 barra de chocolate
// 0.5 kilos de harina
// 5 cucharadas de azucar
// Los ingredientes que tiene Ema tienen que ser variables al inicio del programa para que sean fáciles de editar

let huevos = 3
let chocolate = 1
let harina = 0.5
let azucar = 5
let comprar = "¡Momento! falta comprar:\n"

if (huevos >= 3 && chocolate >= 1 && harina >= 0.5 && azucar >= 5) {
    console.log ("Está todo lo necesario, espero que salgan ricas♡")
} else {
    if (huevos < 3) {
        comprar = comprar + "- " + (3 - huevos) + " huevo(s)\n";
    } if (chocolate < 1) {
        comprar = comprar + "- " + "chocolate\n";
    } if (harina < 0.5) {
        comprar = comprar + "- " + "harina\n";
    } if (azucar < 5) {
        comprar = comprar + "- " + "azucar\n";
    }
    console.log(comprar)
}