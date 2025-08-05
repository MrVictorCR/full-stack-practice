/* Window object in JavaScript

The Window object represents the browser window and is the global object in a web browser environment.
It provides methods and properties to interact with the browser, such as manipulating the DOM, handling events, and managing timers.
*/

// Window object --> Functionalities

let youtubeURL = "https://www.youtube.com";

// Open a new window
let newWindow = window.open(youtubeURL);

// Close the new window after 5 seconds
setTimeout(() => {
    if (newWindow) {
        newWindow.close();
    }
}, 5000);

// Check if the new window is closed
setInterval(() => {
    if (newWindow && newWindow.closed) {
        console.log("The new window has been closed.");
    } else {
        console.log("The new window is still open.");
    }
}, 1000);

// Stop the current page from loading
window.stop();

// Alert
window.alert("This is an alert message!");

// Print --> Imprimir

// Prompt
window.prompt("Please enter your name:");

// Confirm
let userConfirmed = window.confirm("Do you want to proceed?");
console.log("User confirmed:", userConfirmed);

/* SCREEN Module 
The screen object provides information about the user's screen, such as its dimensions and color depth.
*/

// Screen left and top position
document.write(`Screen Left: ${screen.left} <br>
Screen Top: ${screen.top} <br>               
`);

// Scroll X - Y position
document.write(`Scroll X: ${window.scrollX} <br>
Scroll Y: ${window.scrollY} <br>`);

// Scroll to a specific position
window.scrollTo(0, 500); // Scrolls to 500 pixels down from the top


// Location
document.write(`Location: ${window.location.href} <br>
Location Host: ${window.location.host} <br>
Location Pathname: ${window.location.pathname} <br>
Location Protocol: ${window.location.protocol} <br>
Location Assign: ${window.location.assign(youtubeURL)} <br>`);
/* href = URL from the website
hostname = WebServer Dominio's Name
pathname = route of the website
protocol = protocol used (http, https, etc.)
location.assign() = changes the current URL to the specified URL
*/

// Excersise: Let the user know what's the heigh and width of the screen within an alert, and if user acceepts, show a message confirming that they approved
let screenWidth = screen.width;
let screenHeight = screen.height;
let screenInfo = `Screen Width: ${screenWidth} <br>Screen Height: ${screenHeight}`;
if (window.confirm(`Do you want to see your screen dimensions?\n${screenInfo}`)) {
    alert("Thank you for confirming!");
}

// Now show all the information from the website regarding the location per parts
document.write(`<h2>Location Information</h2>
<p>URL: ${window.location.href}</p>
<p>Host: ${window.location.host}</p>
<p>Pathname: ${window.location.pathname}</p>
<p>Protocol: ${window.location.protocol}</p>`);

