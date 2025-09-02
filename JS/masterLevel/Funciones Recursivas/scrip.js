// - Recusivity functions - //

// Recursive function is a function that calls itself to solve a problem.

"strict mode";

const validarEdad = (msg) => {
    let edad;
    try{
        if (msg) edad = prompt(msg);
        else edad = prompt("Ingrese su edad");
        edad = parseInt(edad);
        if (isNaN(edad)) throw"La edad debe ser un número";
        if (edad > 18) console.log("Eres mayor de edad");
        else console.log("Eres menor de edad");
    } catch (e) {
        validarEdad(e)
    }
}

validarEdad()