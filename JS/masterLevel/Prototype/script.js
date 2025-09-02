/* 
    Prototype Chain

    Every object in JavaScript has a prototype, which is another object from which it can inherit properties and methods. This is known as the prototype chain.

    __proto__ is a special property that points to the prototype of an object.
    .prototype is a property of functions that points to the prototype object used when creating instances of that function.

    Characteristics of the prototype chain:
    1. Objects can inherit properties and methods from their prototype.
    2. The prototype chain can be traversed using the __proto__ property.
    3. If a property or method is not found on the object, JavaScript will look for it in the prototype chain.
    4. The prototype chain can be extended by adding properties or methods to the prototype object.
    5. The prototype chain can be used to create inheritance hierarchies.

    Cuando se crea X variable, esta hereda los metodos que tienen del prototipo.
*/

// Sobreescribir EL prototipo de un objeto

class Person {
    constructor(name) {
        this.name = name;
    }
    hablar() {
        console.log(`Hola, mi nombre es ${this.name}`);
    }
}

const john = new Person('John');
john.hablar(); // Hola, mi nombre es John

john.hablar = () => {
    console.log(`Hola, soy John y estoy sobreescribiendo el metodo hablar`);
}

// Esto no esta sobreescribiendo el __proto__, solo lo modifica en la instancia, pero, el prototipo sigue intacto
// Se puede acceder con __proto__.__proto__ o Object.getPrototypeOf(john)

// Pero si hacemos esto:

john.__proto__.hablar = () => {
    console.log(`Hola, soy John y estoy sobreescribiendo el metodo hablar`);
}
// Esto si sobreescribe el metodo hablar en el prototipo, y todas las instancias de Person lo tendran modificado










