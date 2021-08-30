// Una tienda de ropa desea tener un programa que le permita calcular los aumentos a sus prendas, para eso se tienen los datos:
// precioDePrenda (que ronda entre los 1500 y 3000 pesos)
// porcentajeDeAumento (que ronda entre el 25-100% )
// precioFinal (precioDePrenda con el aumento agregado)
// Ademas, implementar las siguiente funcionalidades:
// El programa debe informar en pantalla el precio final
// El programa debe informar en pantalla 'Precio excedido' cuando el precio final supere los $4000

let precioPrenda1 = 1500;
let precioPrenda2 = 2000;
let precioPrenda3 = 3000;

let porcentajeAumento1 = 25 / 100;
let porcentajeAumento2 = 50 / 100;
let porcentajeAumento3 = 100 / 100;

let precioFinal1 = precioPrenda1 + (precioPrenda1*porcentajeAumento1);
let precioFinal2 = precioPrenda2 + (precioPrenda2*porcentajeAumento2)
let precioFinal3 = precioPrenda3 + (precioPrenda3*porcentajeAumento3)

if (precioFinal1 < 4000) {
  console.log("El precio final de prenda 1 es de: " + (precioFinal1)) 
} else if (precioFinal1 > 4000) {
  console.log("El precio final se excede")
}

if (precioFinal2 < 4000) {
  console.log("El precio final de prenda 2 es de: " + (precioFinal2))
} else if (precioFinal2 > 4000) {
  console.log("El precio final de prenda 2 se excede")
}

if (precioFinal3 < 4000) {
  console.log("El precio final de prenda 3 está bien, es de: " + (precioFinal3))
} else if (precioFinal3 > 4000) {
  console.log("El precio final de prenda 3 se excede")
}