/* 
Backtikcs? 

´´ = this work when I want to link different strings with some vars, depending on the scenario, in that way I can link code in REACT
*/

age = 21
name = 'Victor'
document.write(`hello this is ${name} and I'm ${age}`)

//So at the end is going to display me what I want

// New ep: More about backticks

let pc = {
    nombre: "PC Victor",
    procesador: "Intel I7",
    ram: "16",
    disco: "1TB"
}

let nombre = pc[nombre]
let procesador = pc[procesador]
let ram = pc[ram]
let disco = pc[disco]

frase = `
El nombre de mi pc es: ${nombre} <br>
El procesador de mi pc es: ${procesador} <br>
La ram de mi pc es: ${ram} <br>
El espacio de disco de mi pc es: ${disco} <br>`;

document.write(frase);

