// - Local & Session Storage - //

// Local Storage saves data with no expiration time
// Session Storage saves data for the duration of the page session

"use strict";

/* Set Item & Get Item

localStorage.setItem("username", "JohnDoe");
console.log(localStorage.getItem("username")); // Output: JohnDoe

sessionStorage.setItem("sessionUser", "JaneDoe");
console.log(sessionStorage.getItem("sessionUser")); // Output: JaneDoe

// Remove Item & Clear Storage

sessionStorage.removeItem("sessionUser");

localStorage.clear(); // Clears all local storage

*/

const modal = document.querySelector(".modal-background");

const definirIdioma = () => {
    document.querySelector(".en").addEventListener("click", () => {
        localStorage.setItem("idioma", "en");
        cerrarModal();
    })
    document.querySelector(".es").addEventListener("click", () => {
        localStorage.setItem("idioma", "es");
        cerrarModal();
    })
};

const cerrarModal = () => {
    modal.style.animation = "desaparecer 1s forwards";
    setTimeout(() => modal.styke.display = "none", 1000);
}

const idioma = localStorage.getItem("idioma");
if (idioma === null) definirIdioma();
else{
    console.log(`Idioma: ${idioma}`)
    modal.style.display = "none";
}