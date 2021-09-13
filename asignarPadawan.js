let padawan = { nombre: 'joda', planeta: "jabin", edad: 20, estatura: 1.65 }
let mensaje
function asignarPadawan(padawan, manejo) {
    if (padawan.edad < 15) {
        mensaje = 'manejo de la fuerza'
        manejo(mensaje)
    }

    else if (padawan.edad > 15) {
        mensaje = 'manejo sable de luz'
        manejo(mensaje)
    }

}

asignarPadawan(padawan, function (mensaje) { console.log("el padawan tiene el " + mensaje) })

let asignar = (padawan, manejo) => {
    if (padawan.edad < 15) {
        mensaje = 'manejo de la fuerza'
        manejo(mensaje)
    }

    else if (padawan.edad > 15) {
        mensaje = 'manejo sable de luz'
        manejo(mensaje)
    }
}

asignar(padawan,actividad = (mensaje) => { console.log("el padawan tiene el " + mensaje) })