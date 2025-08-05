const sendButton = document.getElementById('enviar');

sendButton.addEventListener('click', () => {
    let resultado, mensaje;
    try{
        prevRest = parseInt(document.getElementById('nota').value);
        if (isNaN(prevRest)) {
            throw new Error("El valor ingresado no es un número válido.");
        }
        resultado = verificarAprobacion(8, 5, prevRest);
        mensaje = definirMensaje(resultado);
    } catch (error) {
        resultado = "¿Qué es esto? ¿Un número?";
        mensaje = "Error: " + error.message;
    }
    abrirModal(resultado,mensaje);
});

const definirMensaje = (pr) => {
    let resultado;
    switch (pr){
        case 1: resultado = "bro...";
        break;
        case 2: resultado = "OK?";
        break;
        case 3: resultado = "LOL";
        break;
        case 4: resultado = "LMAO";
        break;
        case 5: resultado = "Deam bro";
        break;
        case 6: resultado = "JAJAJA";
        break;
        case 7: resultado = "Rapando papi!";
        break;
        case 8: resultado = "Nice!";
        break;
        case 9: resultado = "Nice done!";
        break;
        case 10: resultado = "Amazing!";
        break;
        default: resultado = null
    }
    return resultado;
}

const verificarAprobacion = (nota1, nota2, pr) => {
    promedio = (nota1 + nota2 + pr) / 3;
    if (promedio >= 7){
        return "<span class='green'> Aprobado </span>";
    }
    return "<span class='red'> Desaprobado </span>";
}

const abrirModal = (resultado, mensaje) => {
    document.querySelector('resultado').innerHTML = resultado;
    document.querySelector('mensaje').innerHTML = "Tu prueba: " + mensaje;
    let modal = document.querySelector('.modal-back');
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";

}