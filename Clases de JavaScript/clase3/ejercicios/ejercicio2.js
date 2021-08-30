// dado un array de alumnos de coderhood academy, indicar quién es el que lidera el ranking de participación en el discord

let alumnos = [ { nombre: "Lionel", ranking: 4}, { nombre: "Diego", ranking: 3}, { nombre: "Román", ranking: 10}, { nombre: "Carlos", ranking: 7}]

let rankingMaximo = 1
let nombreMaximo;

for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].ranking > rankingMaximo) {
        rankingMaximo = alumnos[i].ranking
        nombreMaximo = alumnos[i].nombre
    }
}
let masParticipo = "El que más participo es " + nombreMaximo + " con " + rankingMaximo + " participaciones"
console.log(masParticipo)