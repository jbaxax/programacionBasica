// 1 es piedra, 2 es papel, 3 es tijera
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + 1)
}

function eleccion(jugada) {
    let resultado = "";
    if (jugada == 1) {
        resultado = "Piedra 🪨"
    }
    else if (jugada == 2) {
        resultado = "Papel 🧻"
    }
    else if (jugada == 3) {
        resultado = "Tijeras ✂️"
    }
    else {
        resultado = "MAl ELEGIDO"
    }
    return resultado
}
let jugador = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;

while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio(1, 3)
    jugador = prompt("Elige: 1 es piedra, 2 es papel, 3 es tijera")
    //alert("Elejiste: "+jugador)
    alert("Tu eliges: " + eleccion(jugador))
    alert("PC elige: " + eleccion(pc));

    //COMBATE
    if (pc == jugador) {
        alert("EMPATE")
    } else if (jugador == 1 && pc == 3) {
        alert("GANASTE");
        triunfos++;
    } else if (jugador == 2 && pc == 1) {
        alert("GANASTE");
        triunfos++;
    } else if (jugador == 3 && pc == 2) {
        alert("GANASTE");
        triunfos++;
    }
    else {
        alert("PERDISTE");
        perdidas++;
    }
}
alert("Ganaste: " + triunfos + " veces. Perdiste: " + perdidas + " veces.")
