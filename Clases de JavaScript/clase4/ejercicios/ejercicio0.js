//dada un array de compras, obtener todas las compras realizadas por pepe y devolver otro array con lo nombres de los productos que compró

const compras = [
    { usuario: "pepe", producto: "mochila", costo: 1800 },
    { usuario: "maria", producto: "lapicera", costo: 50 },
    { usuario: "juan", producto: "cuaderno", costo: 200 },
    { usuario: "pepe", producto: "carpeta", costo: 300 },
    { usuario: "laura", producto: "escuadra", costo: 150 } ]

function compraPepe (element) {
    return element.usuario === "pepe"
}

function productodePepe (element) {
    return element.producto
}

const resultado = compras.filter(compraPepe).map(productodePepe)

console.log(resultado);