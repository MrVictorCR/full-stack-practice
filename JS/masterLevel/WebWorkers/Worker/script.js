// - Workers - //

/* 
    Los workers tienen la caracteristica de la politica Same Origin, la cual es de seguridad
    Tiene que tener mismo protocol/host:puerto
*/

"use strict";

const worker = new Worker("worker.js");

document.querySelector(".button").addEventListener("click",()=>ejecutarBucle())
worker.addEventListener("message",e=>{
    console.log(e.data); // Muestra la respuesta del worker
    worker.terminate(); // Necesario para terminar el worker y que no se ejecute más
})

const ejecutarBucle = () => {
    worker.postMessage("Hola")
}

console.log(worker);