// Un taller mecánico tiene una lista de autos para arreglar en el dia, de cada auto sabemos:
//     * nombre del dueño
//     * valor del arreglo
//     * tiempo que tarda el arreglo (en horas)
//     * lista de repuestos necesarios
// El dueño del taller quiere saber:
//     1. cual es el arreglo mas caro y los repuestos que necesita
//     2. todos los arreglos para personas que se llamen `juan`
//     3. el precio total delos arreglo

let autos = [
    { nombreCompleto: "Juan Ramon", auto: "Corolla 207", costo: 80000, tiempoEstimado: 120, repuesto: ["volante", " freno"," paragolpe"," puerta derecha"] },
    { nombreCompleto: "Martin Palermo", auto: "Peugeot 208", costo: 30000, tiempoEstimado: 30, repuesto: [" pintura", " paragolpe", " puerta izquierda"] },
    { nombreCompleto: "Guillermo Barros", auto: "Ford Ka", costo: 10000, tiempoEstimado: 10, repuesto: [" pintura"] }
  ]

  let masCaro = { costo: 0 }
  
  for (let i = 0; i < autos.length; i++) {
      const auto = autos[i]

      if (auto.costo > masCaro.costo) {
          masCaro = auto
      }
  }
  const solucion1 = "El arreglo más caro cuesta " + masCaro.costo + " y sus repuestos son: " + masCaro.repuesto
  console.log(solucion1)