// Sea una variable numérica entera y positiva 'limite':
// - Recorrer desde 0 hasta `limite`
// - Imprimir en pantalla los numeros pares (No la cantidad de números)

let limite = 10

for (i = 0; i <= limite; i++) {
    if (i % 2===0) {
        console.log(i)
    }
}