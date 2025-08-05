// - Axios Library - //

// Axios is a promise-based HTTP client for the browser and Node.js.

axios("json.txt") // axios.get | axios.post
    .then((res=>console.log(res.data))) // Fetching data from json.txt using Axios

axios.post("json.txt", { "name": "John Doe", "age": 30 })
    .then(res => console.log(res.data)) // Sending data to json.txt using Axios




