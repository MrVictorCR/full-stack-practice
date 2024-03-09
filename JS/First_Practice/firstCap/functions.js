/*
    How to do functions: Usual = function xname(){}

    The best one, arrow function = const xname => instruction;

    Depending on if there are going to be more than one instruction I have to use {}, if not, I can do it as it is up
*/

let cantidad = prompt("¿cuantos alumnos?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)),0] // GUARDA A LOS ALUMNOS Y LE SUBE EL VALOR DE i, APARTE AGREGA LAS ASISTENCIAS
}

const tomarAsistencia = (nombre,p) => { // PIDE 2 PARAMETROS, P equivale a Presencias
    let presencia = prompt(nombre);
    if(presencia == "p" || presencia == "P"){
        alumnoTotales[p][1]++;
    }
}

for (i=0; i<30; i++){
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno); // OBTIENE EL NOMBRE DEL ESTUDIANTE Y LE GUARDA P SI ES PRESENTE
    }
}

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumnos][0]}:<br> NOMBRE
    _______Presentes: <b>${alumnosTotales[alumnos][1]}</b> PRESENTES
    _______Ausencias: <b>${30 - alumnosTotales[alumnos][1]}</b>`; // AUSENCIAS = PRESENTES - 30, EL RESULTADO SON AUSENCIAS
    if(30-alumnosTotales[alumno][1] > 18) { // IMPRIMIR REPROBADO
        resultado += "REPROBADO POR INASISTENCIAS <br>";

    } else {
        resultado += <br></br>
    }
    document.write(resultado)
}