const materiasHTML = document.querySelector('.materias');

const materias = [
    {
        nombre: 'Matemáticas',
        nota: 8
    }
    ,{
        nombre: 'Historia',
        nota: 7
    }
    ,{
        nombre: 'Ciencias',
        nota: 9
    }
    ,{
        nombre: 'Lengua',
        nota: 6
    }
]
const obtenerMaterias = (id) => {
    return new Promise((resolve, reject) => {
        materia = materias[id];
        if (materia == undefined) reject('Materia no encontrada');
        else setTimeout(() => {resolve(materia)},Math.random()*400);
    })
}

const mostrarMaterias = async () => {
    let materia = [];
    for (let i=0; i < materias.length; i++){
        materia[i] = await obtenerMaterias(i);
        let newHTMLCode = `
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>`;
        materiasHTML.innerHTML += newHTMLCode;
    }
}

mostrarMaterias()