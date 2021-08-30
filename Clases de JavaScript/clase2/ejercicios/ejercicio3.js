// Hacer una función que reciba como parámetro tres números enteros y que los ordene de mayor a menor

const numeros = [7, 5, 10, 1, 9] 

numeros.sort(function(a, b){return b-a})

console.log(numeros)

// En el caso de querer que vaya de menor a mayor, únicamente reemplazar {return b-a} por {return a-b}