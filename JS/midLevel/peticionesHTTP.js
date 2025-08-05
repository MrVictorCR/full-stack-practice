// - JSON - //

// JSON is a format for data exchange that is easy to read and write for humans and machines.
// It is often used in web applications to send and receive data between a client and a server.

// Exaple:

const jsonData = {
    "name": "John Doe",
    "age": 30,
    "isEmployed": true,
    "skills": ["JavaScript", "Python", "Java"],
    "address": {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};

// Un JSON necesita estar serializado para ser enviado a través de la red. Basicamente, es agregarle unas comillas

const serializado = JSON.stringify(jsonData);

// Deserializar un JSON es convertirlo de nuevo a un objeto de JavaScript

const deserializado = JSON.parse(serializado); // Lo vuelve a hacer un Objecto



