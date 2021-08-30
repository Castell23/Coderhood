// Hacer una función que reciba un número y que retorne verdadero si es par o falso en caso contrario.

function parImpar (numero) {
    if (numero % 2 === 0) {
        return true;
      } else {
        return false;
      }
}
console.log("El número recibido es:", parImpar(7))