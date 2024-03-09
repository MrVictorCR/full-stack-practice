// Arrays program just to practice

/*
const obtenerInfo = (materia)=>{
    materias = {
        fisica: ["Perez", "Pedro", "Pepito", "Cofla", "Maria"],
        programacion: ["Victor", "Pedro", "Pepito", "Cofla"],
        logica: ["Hernan", "Pedro", "Cofla", "Maria"],
        quimica: ["Lucas", "Pedro", "Pepito", "Cofla", "Maria"]
    }
    if (materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    } else {
        return materias;
    }
}

const mostrarInfo = (materia)=>{
    let informacion = obtenerInfo(materia)

    if (informacion !== false){
        let profesor = informacion[0][0];
        alumnos = informacion[0];
        alumnos.shift();
        document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:blue">${profesor}</b><br><br>
            Los alumnos son: <b style="color:red">${alumnos}</b><br><br>
            `);
    }
}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInfo();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion){
        if (informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    }
    return `<b style="color:red">${alumno}</b> está en <b>${cantidadTotal}</b> clases: <b style:"color:red">${clasesPresentes}</b>
    `;
}

mostrarInfo("fisica")

document.write(cantidadDeClases("Cofla"))
*/

// Second Excercise


let materias = {
    fisica: ["Perez", "Pedro", "Pepito", "Cofla", "Maria"],
    programacion: ["Victor", "Pedro", "Pepito", "Cofla"],
    logica: ["Hernan", "Pedro", "Cofla", "Maria"],
    quimica: ["Lucas", "Pedro", "Pepito", "Cofla", "Maria"]
}

const inscribir = (alumno, materia) => {
    personas = materias[materia];
    if (personas.length >= 21){
        document.write(`Lo siento ${alumno}, las clases de ${materia} ya estan llenas <br><br>`)

    } else {
        personas.push(alumno);
        if (materia == "fisica"){
            materias = {
                fisica: personas,
                programacion: materias["programacion"],
                logica: materias["logica"],
                quimica: materias["quimica"]
            }
        } else if (materia == "programacion"){
            materias = {
                fisica: materias["fisica"],
                programacion: personas,
                logica: materias["logica"],
                quimica: materias["quimica"]
            }
        } else if (materia == "logica"){
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                logica: personas,
                quimica: materias["quimica"]
            }
        } else if (materia == "quimica"){
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                logica: materias["logica"],
                quimica: personas
            }
        }
        document.write(`¡Felicidades ${alumno}!, te haz inscrito a ${materia} correctamente <br><br>`)

    }   
}

inscribir("Victor", "programacion");