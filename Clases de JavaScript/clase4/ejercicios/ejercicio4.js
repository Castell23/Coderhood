// Nuestro software de reconocimiento de voz funciona de una forma un poco particualar, y el texto reconocido nos lo envía en un arreglo de silabas. Dado el siguiente array, obtener un string con todo el texto de corrido.

const silabas = ["¡Ho", "la, ", "mun", "do! ", "¿To", "do", "bien?", "Me", "a", "le", "gro."]

// console.log(silabas.join(""));

function transformarElemento(transformarElemento, element) {
    return transformarElemento + element.toString()
}

const resultado = silabas.reduce(transformarElemento)

console.log(resultado)