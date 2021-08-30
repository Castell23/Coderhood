// Sea una variable numérica entera y positiva 'limite':
// Recorrer desde 0 hasta 'limite'
// Imprimir al final del programa la cantidad de números impares
// Imprimir al final del programa la cantidad de números menores de limite /2

let limite = 20
let impares = 0
let menores = 0

for (let i = 0; i <= limite; i++) {
  if (i % 2 != 0) {
    impares++
  }
  if (i < limite / 2) {
    menores++
  }
}

console.log("La cantidad de numeros impares es: " + impares);
console.log("La cantidad de numeros menores que limite/2 es: " + menores)