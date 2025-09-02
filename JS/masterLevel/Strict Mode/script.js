// Strict mode //

/* 

     Characteristics of strict mode:
        1. Eliminates some JavaScript silent errors by changing them to throw errors.
        2. Fixes mistakes that make it difficult for JavaScript engines to perform optimizations.
        3. Prohibits some syntax likely to be defined in future versions of ECMAScript.
        4. Makes it easier to write "secure" JavaScript.
        5. Disallows duplicate property names or parameter values.
        6. Makes eval() safer.
        7. Convert the Errors to exceptions.

*/

"use strict"; // Enabling strict mode

// 1. Need to declare variables before using them

// 2. Writable

const obj = {};

Object.defineProperty(obj, "name", {value: "John", writable: false}); // Non-writable property
obj.name = "Doe"; // This will throw an error in strict mode

// 3. Prevent Extensions

Object.preventExtensions(obj);
obj.age = 30; // This will throw an error in strict mode

// 4. Parameter names must be unique

function exampleFunction(param1, param1) { // Duplicate parameter name
    console.log(param1);
} // This will throw an error in strict mode

// 5. Deleting variables, functions, or function arguments is not allowed
function exampleFunction2() {
    let x = 10;
    delete x; // This will throw an error in strict mode
}

// 6. use strict mode in functions
function strictFunction() {
    "use strict"; // Enabling strict mode within the function
    y = 20;
    console.log(y); // This will throw an error because y is not declared
}