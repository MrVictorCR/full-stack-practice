// Prompt function = the user can enter whatever the user wants
// prompt(Hello)

/* 
    Comments
*/

//- Hello World -//

console.log("Hello World")

// ------------ //

//- Vars //

// Let is going to be create a var but in this case var is going to be a GLOBAR VAR so, that is not "save at all"
// So, let is going to be use in the SCOPE that it is been used, que tan lejos puede llegar una variable
let myNumber = 6.8

myNumber = 7 // Changing the value as normal

let myBool = true // Bool var

let myString = "Halo" // String

const myConst = 7 // Constant, var that can not change

let myNull = null // Null var

let undefined // undefined, when a let is not declared 

let mySymbol = Symbol('mysymbol') // Unique values, like IDs for properties, cannot change

let myBigInt = BigInt() // Numero de Datos Enteros muuuuuuy grandes

// --- //

// - Operators - //

/*
    valor & type = ===
*/

// - Logical Operators - //

/* 
    and = &&
    or = ||
    not = !

*/

// - Operador Ternario - //

const myBool2 = false

myBool2 ? console.log("Hola") : console.log("Adios")

// Lo que esta despues del ? se ejecuta if it's true, if not executes the code after the ':'

// ------------------- //

// - Conditionals - //

if (myNumber == 6){
    console.log("The number is not " + 6)
} else if (myNumber == 7){
    console.log("The number is " + 7)
} else {
    console.log("The number is not " + 7)
}

switch ("Conditional") {

    case "":
        "Instruction"
    default:
        "this is an else"
}

// ---------------//

// - Functions - //

function myFunction(){
    /* 
        x instruction = the instructions that I want :)
        return "hello world" = if we want to return something
    */
}

const myFunc = function(){

    // A function can be saved as a Var
}

const arrowFunc = (name) => {
    // An Arrow Function
    // If there's to many instructions we can use {}, if not, we could just leave the instruction next to the arrow
}

// A Superior Order function
function applyFunc(func, param){
    func(param)
} applyFunc(arrowFunc, 1)




// ---------------//

// - List - //

let myList = ["My Name", 4 , "Hello", "@lol"]
console.log(myList[0]) // Get access to X part from the List

// --------//

// - Set (Cannot have duplicates) - //

let mySet = new Set(["My Name", 4 , "Hello", "@lol"])
mySet.add("X") // Whatever that I want to add

// ------ //

// - Map - //

let myMap = new Map([["My Name", 4], ["Victor", 21]]) // New Dict
myMap.set("Dani", 32)
console.log(myMap)
console.log(myMap.get("Victor"))
console.log(myMap.has("Victor")) // Return Boolean
console.log(myMap.entries)

// ------ //

// - Loops - //

for (const value of myList){ // For
    console.log(value)
}

let myCounter = 0
while (myCounter <= myList){ // While with Counter
    console.log(myList[myCounter])
    myCounter++
}

do { // Do something and then can do the while then

} while (i = 2) {}



// -------- //

// - Class - //

// Plantillas de objetos, puede tener sus propios elementos, y funciones

class MyClass {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    run(){
        console.log("Run")
    }
}

let myClass = new MyClass("Victo", 21)
console.log(myClass)
console.log(myClass.age)

// Extends: Herencia

class Persona extends MyClass {

    constructor(name, age, email){
        super(name) // Llama al nombre del padre
        super(age)
        this.email = email
    }

    run(){ // Modifica la funcion del padre
        console.log(`${this.name} esta corriendo`)
    }
}

// Métodos estáticos

class MathOperation {

    static sum(a, b){
        return a + b
    }
}

console.log(MathOperation.sum(10, 5)) // Al ser una operacion estatico no hay necesidad de instanciar la clase

// -------- //

// - Enum - //

const MyEnum = {
    DART: "dart",
    PYTHON: "python",
    SWIFT: "swift",
    JAVA: "java",
    KOTLIN: "kotlin",
    JAVASCRIPT: "javascript"
}

const myEnum = MyEnum.JAVASCRIPT
console.log(myEnum)

// ------- //

// - Object - //

let person = {
    name: "Victor",
    age: 23,
    work: function(){
        console.log("Chambeando")
    },
    job: {
        name: "Incident Manager",
        exp: 1,
        work1: function(){
            console.log("Chambeando x2")
        }
    }
} 

// An object that can have their own functions and objects inside

// ------- //


// - Desestructuracion - //

let [myValue0, myValue1, myValue2] = myArray // This is the way to get the Array info in some specifics Arrays
let {name, age, email} = myObject /* Same but for Objects, but we need to make sure about the names of the vars, 
                                    because it needs to be the same */ 
let {name: myName, age: myAge, email: myEmail} = myObject // But if needed I can do this to change the name

let {job: {name: jobName} } = person // Gets the Job name from an Object inside another

// ------- //

// - Propagacion - //

let myArrayIDK = [...myArray, 6, 7] // A copy of an Array and at the same time it adds new values
let myPerson = {...person, email: victorxd} // A copy of an Object

// ------- //


// - Try Cath Finally - //

try {

} catch {

} finally {

}

// ------- //

// - Throw Errors - //


throw new Error ("LOL")

// Custom Errors

class MyCustomError extends Error {
    constructor(message, x, y){
        super(message)
        this.x = x
        this.y = y
    }
}

// ------- //

/* Tambien existe la importancion y Exportacion de lo que sea necesario, 
    a veces es importante tomar en cuenta el tipo de archivo que se debe utilizar, 
    o bien la creacion de lo que se desea exportar, 
    pueden ser importanciones externas o internas
*/

//-----------------------------------------------------------------------------------------------------------------//