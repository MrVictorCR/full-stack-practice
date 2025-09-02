// - Arrow function - //

// Syntax
const saludar = ()=>{

}

// Easy return

const saludar2 = () => 'Hola Mundo';
resultado = saludar2();
console.log(resultado); // Output: Hola Mundo

// 1 Parameter
const saludar3 = nombre => `Hola ${nombre}`;
resultado = saludar3('Juan');
console.log(resultado); // Output: Hola Juan

// Aren't use in methods
const persona = {
    nombre: 'Juan',
    saludar: () => `Hola ${this.nombre}` // 'this' does not refer to the persona object
};

// Cannot be used as a constructor
const Persona = (nombre) => {
    this.nombre = nombre; // 'this' does not refer to the new instance
};
const juan = new Persona('Juan'); // TypeError: Persona is not a constructor

// This === Window
