// Sea una variable numérica entera y positiva 'limite':
// Recorrer desde 0 hasta que se cumpla una de las siguientes condiciones:
// Se llega a limite
// La cantidad de números pares desde 0 hasta limite es mayor a una variable anteriormente creada llamada final
// Al final del recorrido imprimir la cantidad de numeros multiplos de 3
// Al final del recorrido imprimir la suma de todos los numeros entre el 0 hasta que se termine el recorrido

let limite = 5
let final = 5
let lim = 0
let fin = 0
let multiplos = 0
let suma = 0

while ((lim < limite) && (fin <= final)){
    if (lim % 2 == 0) { fin++ }
    if (lim % 3 == 0) { multiplos++ }
    suma = suma + lim
    lim++
}

console.log(`Cantidad de numeros multiplos de 3: ${multiplos}`)
console.log(`Suma acumulativa: ${suma}`)

