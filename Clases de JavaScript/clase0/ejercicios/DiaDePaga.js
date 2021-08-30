// En una pizzeria requieren un programa que calcule cuánto cobrarán neto los repartidores al final del dáa (Todos cobran igual)
// Se tienen los siguientes datos obligatorios:
// repartidores (Cantidad de repartidores, puede ser cualquier numero entero)
// esFeriado (true si es Feriado, false si no)
// gananciaDelDia (Cuánto recaudó la pizzeria para distribuir a los empleados)
// porcentajeParaSueldos (Un porcentaje de gananciaDelDia)
// sueldoNetoDeRepartidor (Cuánto gana en bolsillo el repartidor)
// gananciaDelComercioFinal (Cuánto gana el comercio una vez pagados los sueldos y
// demás)
// Se sabe que:
// En feriados: porcentajeParaSueldos es del 80% de gananciaDelDia mientras que en
// dias normales, es del 65%

let repartidores= 2
let esFeriado= true
let gananciaDelDia= 15000
let porcentajeParaSueldos;
let sueldoNetoDeRepartidor;
let gananciaDelComercioFinal;

if (esFeriado === true) {
    porcentajeParaSueldos = 0.5 * gananciaDelDia
} else {
    porcentajeParaSueldos = 0.3 * gananciaDelDia
}

sueldoNetoDeRepartidor = porcentajeParaSueldos / repartidores

gananciaDelComercioFinal = gananciaDelDia - porcentajeParaSueldos

console.log("El sueldo neto de cada repartidor es: " + sueldoNetoDeRepartidor)
console.log("Una vez pagados los sueldos, la ganancia de la pizzería es: " + gananciaDelComercioFinal)