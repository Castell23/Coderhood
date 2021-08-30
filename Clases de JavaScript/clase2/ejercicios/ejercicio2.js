// Hacer una función que reciba una serie de palabras separadas por espacios y que imprima la misma frase pero en orden inverso

function fraseInversa(frase) {
    let inverso = frase.split("").reverse().join("");
    console.log(inverso);
}

fraseInversa("Estoy aprendiendo funciones uwu")