function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('resultado')
    let ataqueDeljugador = document.getElementById('ataques-del-jugador')
    let ataqueDelEnemigo = ducument.getElementById('ataques-del-enemigo')

    let notificacion = document.createElement('p')
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    notificacion.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueDeljugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueDelEnemigo

    sectionMensajes.appendChild(parrafo)
    ataqueDeljugador.appendChild(parrafo)
    ataqueDelEnemigo.appendChild(parrafo)
}

function crearMensajeFinal(){
    let sectionMensajes = document.getElementById('mensajes')
}