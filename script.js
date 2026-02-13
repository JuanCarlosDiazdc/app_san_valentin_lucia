function sayYes() {
    document.getElementById('modal').classList.add('show');

}


function closeModal() {
    volverAlInicio();
}


function sayNo() {
    document.getElementById('mainScreen').classList.add('hidden');
    document.getElementById('passwordScreen').classList.remove('hidden');
}

function volverAlInicio() {

    // Cerrar modal
    document.getElementById('modal').classList.remove('show');

    // Mostrar pantalla principal
    document.getElementById('mainScreen').classList.remove('hidden');

    // Ocultar pantalla contraseña
    document.getElementById('passwordScreen').classList.add('hidden');

    // Limpiar mensaje de error
    document.getElementById('errorMsg').innerHTML = '';
    document.getElementById('errorMsg').classList.add('hidden');

    // Activar input otra vez
    document.getElementById('password').disabled = false;
    document.getElementById('password').value = '';
}


function checkPassword() {
    var error = document.getElementById('errorMsg');
    error.classList.remove('hidden');



    // 24 horas en segundos
    //let totalSegundos = 24 * 60 * 60;
    let totalSegundos = 10;

    function formatearTiempo(segundos) {
    const h = Math.floor(segundos / 3600);
    const m = Math.floor((segundos % 3600) / 60);
    const s = segundos % 60;
    return `${h} h ${m} min ${s} seg`;
    }


    error.textContent = 'Contraseña incorrecta. Inténtalo de nuevo en: ' + formatearTiempo(totalSegundos) + ' ⏳';


    const contador = setInterval(() => {
        totalSegundos--;
        error.textContent = 'Contraseña incorrecta. Inténtalo de nuevo en: ' + formatearTiempo(totalSegundos) + ' ⏳';


        if (totalSegundos <= 0) {
        clearInterval(contador);
        error.textContent = 'Cuenta bloqueada hasta dentro de 2 años 🔒';
        document.getElementById('password').disabled = true;
        error.innerHTML='<button onclick="sayYes()" class="yes">Te dije que no te iba a quedar otra que decir que si...</button>';

        }
    }, 1000);
}
