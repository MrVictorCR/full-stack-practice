// - API - //

// A api (Application Programming Interface) is a set of rules that allows different software entities to communicate with each other. 
// It defines the methods and data formats that applications can use to request and exchange information.

// 1. Date and Time API Reloj Example

"use strict";

const addZero = n => {
    if (n.toString().length < 2) return "0".concat(n);
    return n;
};

const actualizarHora = () => {
    const fecha = new Date();
    const horas = addZero(fecha.getHours());
    const minutos = addZero(fecha.getMinutes());
    const segundos = addZero(fecha.getSeconds());

    document.querySelector(".hora").textContent = horas;
    document.querySelector(".minutos").textContent = minutos;
    document.querySelector(".segundos").textContent = segundos;

}

actualizarHora();

setInterval(actualizarHora, 1000); // It could be use with Library

