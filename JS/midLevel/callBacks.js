// - Callbacks - //

// A functions that's in another function

function nameFunction(callback){
    callback("Victor")
}

nameFunction(nombre => console.log(`Hola ${nombre}`))

// Example with a Constructor

class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getUser(callback){
        callback(this.name, this.age);
    }
}

// Add multiple Users

const data = [
    ["Victor", 30],
    ["Ana", 25],
    ["Luis", 28],
    ["Maria", 22]
];

const users = [];

for (let i = 0; i < data.length; i++) {
    users[i] = new User(data[i][0], data[i][1]);
}

// Get all the info with Callbacks

const getUsers = (id, cb) => {
    if (users[id] == undefined) {
        cb("User not found");
    } else {
        cb(null, users[id]);
    }
}

// Show the info

getUsers(0, (error, user) => {
    if (error) {
        console.error(error);
    } else {
        console.log(`Name: ${user.name}, Age: ${user.age}`);
    }
});

// La desventaja de los Callbacks es que si se anidan muchos, se vuelve difícil de leer y mantener el código.

// Por eso se usan Promesas

// ----------------------------------------------------------------------------------------------------------- //

// - Promises - //

let name = "Victor";

const promesa = new Promise((resolve, reject) => {
    if (nombre !== "Victor") reject("El nombre no es Victor");
    else resolve("El nombre es Victor");
});

promesa.then((resultado) => {
    console.log(resultado);
}).catch((error) => {
    console.error(error);
});

// - Diference between Callbacks and Promises: - //

/* 
Callbacks: Se ejecuta una función dentro de otra función.
Promises: Se ejecuta una función que devuelve un resultado o un error, y se maneja con .then() y .catch(). 
Callbacks pueden llevar a "Callback Hell si se anidan muchos, mientras que las Promesas son más fáciles de leer y mantener.
*/


class UserPromise {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getUsersPromise(callback){
        callback(this.name, this.age);
    }
}

// Add multiple Users

const dataPromise = [
    ["Victor", 30],
    ["Ana", 25],
    ["Luis", 28],
    ["Maria", 22]
];

const usersPromise = [];

for (let i = 0; i < dataPromise.length; i++) {
    users[i] = new User(dataPromise[i][0], dataPromise[i][1]);
}

// Get all the info with Callbacks

const getUsersPromise = (id) => {
    return new Promise((resolve, reject) => {
        if (usersPromise[id] == undefined) reject("User not found");
        else {resolve(usersPromise[id]);}
    });
}

const obtenerAge = (id) => {
    return new Promise((resolve, reject) => {
        if (usersPromise[id] == undefined) reject("User not found");
        else resolve(usersPromise[id].age);
    });
}

// Show the info

let id = 1;

getUsersPromise(id).then((user) => {
    console.log(user.name);
    return obtenerAge(id);
}).then((age) => {
    console.log(`Age: ${age}`);
}).catch((error) => {
    console.error(error);
});

// ----------------------------------------------------------------------------------------------------------- //

// - Async/Await - //

// Async trata con promesas y el await espera a que la promesa se resuelva antes de continuar con el código.

const obtenerInfo = (text) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(text)},Math.random()*200);
    })
}

const mostrarInfo = async () => {
    data1: await obtenerInfo("1: Hola");
    data2: await obtenerInfo("2: Mundo");
    data3: await obtenerInfo("3: Async/Await");
    console.log(data1, data2, data3);
}

mostrarInfo();

// ----------------------------------------------------------------------------------------------------------- //

