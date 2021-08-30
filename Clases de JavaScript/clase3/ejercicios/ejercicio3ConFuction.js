// 2) Dado un array de estudiantes de una universidad, mostrar los nombres de los estudiantes de la carrera Ingenieria en computacion.

let alumnos = [ { nombre: 'Ema', carrera: 'Ingenieria en computacion' }, { nombre: 'Luis', carrera: 'Produccion audiovisual' }, { nombre:'Pablo', carrera: 'Licenciatura en sistemas' }, { nombre: 'Meison', carrera: 'Ingenieria en computacion' } ]

let alumnoIngComput = []


function mostrarNombresEstudIngComp() {
    for ( alumno of alumnos ) {
        if (alumno.carrera == 'Ingenieria en computacion') {
            alumnoIngComput.push(alumno.nombre);
        }
    }
    return alumnoIngComput;
}

mostrarNombresEstudIngComp();

const solucionAlumnosIng = "Los alumnos que estudian Ingenieria en Computacion son: " + alumnoIngComput.join(" y ")

console.log(solucionAlumnosIng)