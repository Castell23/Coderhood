// Crear una funcion llamada pedirUsuario que retorna un usuario al azar de la siguiente lista:

const lista = [ { id: 19310, nombre: "Bautista" }, { id: 90010, nombre: "Ema" }, { id: 0051, nombre: "Lucas" }, { id: 00000, nombre: "Meison" } ]

function pedirUsuario() {
    let randomArrayIndex = Math.floor(Math.random()*lista.length)
    let user = lista[randomArrayIndex]
    if (user.id == 00000 ) {
        throw new Error("Forbidden Information");
    }
    return user
}

function pedirInformacion() {
    try {
        let user = pedirUsuario();
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
}

pedirInformacion()