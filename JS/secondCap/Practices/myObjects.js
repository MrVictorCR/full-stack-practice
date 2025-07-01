// Objects execercises

// 1. Create an object with 3 properties: name, age, and email

const person = {
    name: "Victor",
    age: 23,
    email: ""
}

// Accessing properties of the object
console.log(person.name);

person.city = "SJ" // Adding a new property to the object

 // Deleting a property from the object

delete person.age 

console.log(person);

// Adding a function to the object
person.func = function hello (name) {
    console.log(`Hello, ${name}`);
}

person.func("Victor");


// Iterating over the properties of the object
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Creating an object with a nested object
person.object = {
    name: "Sara",
    age: 23,
    email: ""
}

// Accessing properties of the nested object
console.log(person.object.name);

// Proof if both objects are the same
console.log(person.object === person); // false, because they are different objects

// Proof if 2 different properties are the same
console.log(person.age === person.name); // false, because they are different values



