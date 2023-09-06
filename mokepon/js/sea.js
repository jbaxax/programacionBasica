/* let tarjetasMokepon = document.querySelectorAll('.tarjeta-de-mokepon');

tarjetasMokepon.forEach(function(tarjeta) {
    tarjeta.addEventListener('click', brillar);
});

function brillar(event) {
    let tarjetaSeleccionada = event.currentTarget;
    tarjetaSeleccionada.classList.add('seleccionar');

    // Desactiva el brillo en las demás tarjetas
    tarjetasMokepon.forEach(function(tarjeta) {
        if (tarjeta !== tarjetaSeleccionada) {
            tarjeta.classList.remove('seleccionar');
        }
    });
} */