if (navigator.serviceWorker){
    navigator.serviceWorker.register("sw.js"); // Create the sw archive as a ServiceWorker
}

navigator.serviceWorker.ready.then(res=>{res.active.postMessage("Hola")})

navigator.serviceWorker.addEventListener("message",e=>{
    console.log("Mensaje recibido del SW");
    console.log(e.data);
})
