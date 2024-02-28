// Practicing what I've learned about Console

// -> GROUP TO ORGANIZE MY DAY:

/*
let tp = "100 Minutos hacer trabajos prácticos";
let estudio = "100 Minutos de estudio";
let trabajo = "240 Minutos de trabajo";
let homework = "30 Minutos de cosas de la casa";
let descanso = "10 Minutos de descanso";

console.log("TAREAS");

for (var i = 0; i < 14; i++){
    if(i == 0){
        console.group("Semana 1");
    }
    console.group("Dia " + (i+1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();

    if(i==7){
        console.groupEnd();
        console.group("Semana 2");
    }
}

console.groupEnd();
console.groupEnd();
*/

//-------------------------------------------------------//

// -> Verify if a Student pass the year

const materias = {
    fisica: [90,6,3,"fisica"],
    metematica:  [84,8,2,"matematica"],
    logica:  [92,8,4,"logica"],
    quimica:  [96,8,4,"quimica"],
    calculo:  [91,6,3,"calculo"],
    programacion:  [79,7,4,"programacion"],
    biologia:  [75,9,2,"biologia"],
    bbdd: [98,9,1,"bbdd"],
    algebra:  [100,10,4,"algebra"],
}

const aprobo = ()=>{
    for (materia in materias) {

        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3]);

        if (asistencias>=90 && promedio >=7 && trabajos >=3){
            console.log("%c     Aprobado","color:green");
        } else {
            console.log(`Desprobado, el promedio fue de: ${promedio}, los trabajos completados fueron: ${trabajos} y las asistencias en total fueron ${asistencias}`);
        }
        
    }
}

aprobo()