const nombre = document.getElementById("nombre");
const email = document.getElementById("correo");
const materia = document.getElementById("materia");
const boton = document.getElementById("enviar");
resultado = document.getElementById("resultado");

boton.addEventListener("click", (e) => {
    e.preventDefault();
    let error = verificarCampos();
    if (error[0]) {
        resultado.innerHTML = error[1];
        resultado.classList.add("red")
    } else {
        resultado.innerHTML = "Formulario enviado correctamente";
        resultado.classList.add("green");
        resultado.classList.remove("red");
    }

});

const verificarCampos = () => {
    let error = [];
    if (nombre.value.lengtgh < 5 || nombre.value.length > 20) {
        error[0] = true;
        error[1] = "El nombre es invalido";
        return error;
    } else if (email.value.length < 5 || email.value.length > 50 || 
                email.value.indexOf("@") == -1 ||
                email.value.indexOf(".") == -1)
                {
        error[0] = true;
        error[1] = "El correo es invalido";
        return error;
    } else if (materia.value < 4 || materia.value > 40){
        error[0] = true;
        error[1] = "La mateeria no existe";
        return error;
    }   

    error[0] = false;
    return error;
}
