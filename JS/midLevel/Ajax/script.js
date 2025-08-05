// Ajax request is a way to send and receive data asynchronously without refreshing the page. 
// This is not supported in all browsers, so it's important to check compatibility.

// - AJAX - //

// If the browser doesn't support XMLHttpRequest, use ActiveXObject for older versions of Internet Explorer

let request; 

if (window.XMLHttpRequest) request = new XMLHttpRequest();
else request = new ActiveXObject("Microsoft.XMLHTTP");

/*
    ReadyState values:
    0: Request not initialized
    1: Server connection established
    2: Request received
    3: Processing request
    4: Request finished and response is ready

    Status codes:
    200: OK
    404: Not Found
    500: Internal Server Error
*/

request.addEventListener('load', () => {
    let response;
    if (request.status == 200) response = request.responseText; // If the request is successful, get the response text
    else response = `Error: ${request.status}`; // If there's an error, return the status code
    console.log(JSON.parse(response).nombre); // Log the response to the console
});

request.open('GET',"info.txt") // Get the info

request.send(); // Send the request

// -------------------------------------------------------------------------------------------------------------- //

// - Post Request - //

// The difference will be the following:

request.open('POST', "info.txt"); // Change the method to POST
request.setRequestHeader("Content-Type", "application/json;charset=UTF8"); // Set the content type to JSON
request.send(JSON.stringify({ nombre: "Pedro", edad: 24 })); // Send a JSON object as the request body
// This will send the data to the server in JSON format, which can be processed by the server-side script.


