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

// ---------------//

// - Functions - //

function myFunction(){
    /* 
        x instruction = the instructions that I want :)
        return "hello world" = if we want to return something
    */
}

// ---------------//

// - List - //

let myList = ["My Name", 4 , "Hello", "@lol"]
console.log(myList[0]) // Get access to X part from the List

// --------//

// - Set - //

let mySet = new Set(["My Name", 4 , "Hello", "@lol"])
mySet.add("X") // Whatever that I want to add

// ------ //

// - Map - //

let myMap = new Map([["My Name", 4], ["Victor", 21]]) // New Dict
myMap.set("Dani", 32)
console.log(myMap)
console.log(myMap.get("Victor"))

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

// -------- //

// - Class - //

class MyClass {
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

let myClass = new MyClass("Victo", 21)
console.log(myClass)
console.log(myClass.age)

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

//-----------------------------------------------------------------------------------------------------------------//