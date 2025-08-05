// - Fetch - //

// Fetch is a modern way to make HTTP requests in JavaScript, replacing the older XMLHttpRequest.
// It is promise-based, making it easier to work with asynchronous code.
// Fetch is supported in most modern browsers, but for older browsers, you may need to use a polyfill.


// Creationg a fetch request is simple and straightforward:

fetch("json.txt") // Fetch the JSON file
    .then(res => res.json()) // Convert the response to text
    .then(res=>console.log(res));

// Fetch elaboratated version:+

fetch("json.txt", {
    method: "Post",
    body: JSON.stringify({ nombre: "Pedro", edad: 24 }), // Send a JSON object as the request body
    headers: {"Content-Type": "application/json"} // Set the content type to JSON
})

    .then(res => res.json()) // Convert the response to text
    .then(res=>console.log(res));


// Fetch for a Blob (Binary Large Object):

const imagen = document.querySelector("img");

fetch("img.png")
.then(res => res.blob()) // Convert the response to a Blob
.then(img => imagen.src = URL.createObjectURL(img)); // Create a URL for the Blob and set it as the image source

// So this creates a URL for the Blob and sets it as the image source, allowing you to display the image in the browser.

