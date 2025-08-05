let alumnos = [{
    nombre: "Juan",
    email: "juan@gmail.com",
    materia: "Matemáticas 2"
}, {
    nombre: "Victor",
    email: "victor@gmail.com",
    materia: "Quimica"
}, {
    nombre: "Ana",
    email: "ana@gmail.com",
    materia: "Ingles"
}, {
    nombre: "Sara",
    email: "sara@gmail.com",
    materia: "Español"
}]

const boton = document.querySelector('.confirm-button');
const contenedor = document.querySelector('.grid-container');

let htmlCode = '';

for (alumno in alumnos) {
    let datos = alumnos[alumno];
    let nombre = datos['nombre'];
    let email = datos['email'];
    let materia = datos['materia'];
    htmlCode += `
        <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select class="semana-elegida">
                <option value="Semana 1">Semana 1</option>
                <option value="Semana 2">Semana 2</option>
            </select>
        </div>`;
    
}

contenedor.innerHTML = htmlCode;

boton.addEventListener('click', () => {
    let confirmar = confirm("¿Estás seguro de que quieres confirmar las mesas?");
    if (confirmar){
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll('.semana');
        let semanaElegida = document.querySelectorAll('.semana-elegida');
        for (elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML = semanaElegida[elemento].value;
    }
    }
})