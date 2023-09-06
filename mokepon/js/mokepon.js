let ataqueJugador;
let ataqueEnemigo;
let vidasJugador=3;
let vidasEnemigo=3;
function iniciarJuego() {
    let sectionSeleccionarAtaque= document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display="none";
    
    let sectionReiniciar = document.getElementById('reiniciar');
    sectionReiniciar.style.display="none";

    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego);
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click', ataqueAgua);
    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click', ataqueTierra);

    let botonReiniciar = document.getElementById('boton-reiniciar');
    botonReiniciar.addEventListener('click',reiniciarJuego);
}
function seleccionarMascotaJugador() {
    /* let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
    sectionSeleccionarMascota.style.display="none";
    
    let sectionSeleccionarAtaque= document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display="block"; */

    let inputHipodogue = document.getElementById('hipodogue');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
    let spanMascotaJugador = document.getElementById('mascota-jugador');



    if (inputHipodogue.checked) {
        spanMascotaJugador.innerHTML = 'Hipodogue';
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo';
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya';
    } else {
        alert('SELECCIONA UNA MASCOTA');
        return;
    }
    seleccionarMascotaEnemigo();
}
function seleccionarMascotaEnemigo() {
    /*  */
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
    sectionSeleccionarMascota.style.display="none";
    
    let sectionSeleccionarAtaque= document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display="flex";
    /*  */
    let mascotaAleatorio = aleatorio(1, 3);
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo');

    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodogue'
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'

    }

}

function ataqueFuego() {
    ataqueJugador = 'FUEGO';
    ataqueAleatorioEnemigo();
}
function ataqueAgua() {
    ataqueJugador = 'AGUA';
    ataqueAleatorioEnemigo();
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA';
    ataqueAleatorioEnemigo();
}
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3);
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate();
}
function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador');
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML= vidasEnemigo;

    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML= vidasEnemigo;

    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML= vidasEnemigo;
    } else{
        crearMensaje("PERDISTE");
        vidasJugador--;
        spanVidasJugador.innerHTML= vidasJugador;
    }
    revisarVidas();
}
function revisarVidas(){
    if(vidasEnemigo==0){
         crearMensajeFinal("FELICITACIONES GANASTE")
         
    }else if(vidasJugador==0){
        crearMensajeFinal("PERDISTE p")
    }else{

    }
}
function crearMensaje(resultado) {
    let seccionMensajes = document.getElementById('resultado');
    let ataquesDelJugador = document.getElementById('ataques-del-jugador');
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo');

    let nuevoAtaqueDelJugador = document.createElement('p');
    let nuevoAtaqueDelEnemigo = document.createElement('p');

    seccionMensajes.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;

    //let parrafo = document.createElement('p');
    //parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ' la mascota del enemigo ataco con ' + ataqueEnemigo + '-'+resultado;
     
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}
function crearMensajeFinal(resultadoFinal) {
    let seccionMensajes = document.getElementById('resultado');
    
    seccionMensajes.innerHTML = resultadoFinal;

    

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.disabled = true

    
    let sectionReiniciar = document.getElementById('reiniciar');
    sectionReiniciar.style.display="block";
}

function reiniciarJuego(){
    location.reload();
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + 1)
}





window.addEventListener('load', iniciarJuego)