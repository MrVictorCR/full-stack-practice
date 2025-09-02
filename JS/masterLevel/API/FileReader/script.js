// - FILE READER - //

// FileReader() es una API que permite leer o ver archivos que ingrese el usuario

"use strict";

const archivo = document.getElementById("archivo");
archivo.addEventListener("change", (e)=>{
    leerArchivo(archivo.files[0])
})

const leerArchivo = archive => {
    const reader = new FileReader();
    reader.readAsText(archive);
    reader.addEventListener("load",(e)=>{
        console.log(JSON.parse(e.currentTarget.result))
    })
}

// To read different archives I can use a For

const leerVariosArchivo = archive => {

    for (let i = 0; i<archive.lenght; i++){
        const reader = new FileReader();
        reader.readAsText(archive[i]);
        reader.addEventListener("load",(e)=>{
            console.log(JSON.parse(e.currentTarget.result));
        })
    }
}

