// - Cookies - //

/*
Data que el navegador guarda
Existen distintos tipos de Cookies
*/

"use strict"; 

const newFechaUTC = dias => {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + dias*1000*60*60*24);
    return fecha.toUTCString();
}

document.cookie = "user=dalto"; // Create a Cookie

const crearCookies = (name,dias) => {
    expires = newFechaUTC(dias)
    document.cookie = `${name};expires=${expires}` // Como atributos comunes estan: path${path};age=${age}

}

crearCookies("usuario=victor", "3");


const obtenerCookies = cookie =>{ // Obtener Cookies
    let cookies = document.cookie;
    cookies = cookies.split(";")
    for (i = 0; cookies.length > i; i++){
        cookie = cookies[i].trim();
        if (cookie.startWith(cookieName)){
            return cookie.split("=")[1];
        }
    }
    return "No hay cookies con ese nombre"
}

// Modificar & Delete

document.cookie = ("usuario=noVictor","max-age=0") // Max age deletes de cookie


// Excersise

if (obtenerCookies("acceptedCookies") !== "si"){
    setTimeout(()=>{
        document.querySelector(".bg-modal").computedStyleMap.zIndex = "10";
        document.querySelector(".bg-modal").computedStyleMap.opacity = "1";
        document.getElementById("accept").addEventListener("click",()=>{
            crearCookies("acceptedCookies=si",30);
            document.querySelector(".bg-modal").computedStyleMap.opacity = "0";
            setTimeout(()=>{
                document.querySelector(".bg-modal").computedStyleMap.zIndex = "-1",1000
            })
            document.getElementById("deny").addEventListener("click",()=>{
            crearCookies("acceptedCookies=no",30);
            document.querySelector(".bg-modal").computedStyleMap.opacity = "0";
            setTimeout(()=>{
                document.querySelector(".bg-modal").computedStyleMap.zIndex = "-1",1000
            })
            })
        })
    },200)
}