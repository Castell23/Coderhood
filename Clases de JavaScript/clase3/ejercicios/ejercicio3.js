// Dado un array de estudiantes de una universidad, mostrar los nombres de los estudiantes de la carrera Ing. en Computación

let alumnos = [ { nombre: "Ema", carrera: "Ing. en Computación"}, { nombre: "Emiliano", carrera: "Ing. en Computación" }, { nombre: "Gastón", carrera: "Producotr Digital" }, { nombre: "Camila", carrera: "Ing. en Computación"} ]

let lista = "";
  
for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].carrera === "Ing. en Computación") {
      lista = lista + ", "+ alumnos[i].nombre;
    }
}
  
lista += ".";
  
if (lista === ".") {
    console.log("nadie estudia Ingenieria en computacion");
} else {
    console.log(`estudian Ingenieria en computacion: ${lista}`);
}