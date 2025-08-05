// Events: Changes in the website that happen after point 0. Assign a code to each event.

const button = document.querySelector('.button');
const container = document.querySelector('.container');
const inputKeyboard = document.querySelector('.inputKeyboard');
const image = document.querySelector('.image');

// Example of an event listener for a button click
button.addEventListener('click', () => {
    alert('Button clicked!');
});

// Example of deleting an event listener

/* 
    La cuestion es que a la hora de remover los listener en un ejemplo como el anterior no se podria, por lo que
    se hace uso de funciones simples    
*/

button.addEventListener('click', hi);

function hi() {
    alert('Hello!');
    button.removeEventListener('click', hi); // This will remove the event listener after it has been executed once
}

// ---------------------------------------------------------------------------------------------------------------- //

// Object Event
// The event object contains information about the event that occurred, it has properties
button.addEventListener('click', (e) => {
    console.log(e); // Logs the event object
});

// Event Bubbling vs Event Capturing
/*
Event Bubbling: The event starts from the target element and bubbles up to the root. De lo mas especifico a lo mas general.
Event Capturing: The event starts from the root and goes down to the target element. Al reves.
*/

// Example of event bubbling

container.addEventListener('click', () => {
    console.log('Container clicked!');
}//, true
);

button.addEventListener('click', (e) => {
    alert('Button clicked!');
    e.stopPropagation(); // Prevents the event from bubbling up to the container [ANY event]
});

// It doesn't matter the order, it will go the specific first

// With the True parameter, we can change the event to capture and that one will be the first one to be executed

// ---------------------------------------------------------------------------------------------------------------- //

// - Mouse Events - //

// Double click event
button.addEventListener('dbclick', () => {
    alert('Button clicked!');
});

// Mouseover Event, this happens when the mouse pointer moves over an element
button.addEventListener('mouseover', () => {
    console.log('Mouse over the button!');
});

// Mouseout Event, this happens when the mouse pointer moves out of an element
button.addEventListener('mouseout', () => {
    console.log('Mouse out of the button!');
});

// ---------------------------------------------------------------------------------------------------------------- //

// - Keyboard Events - //

// Keydown Event, this happens when a key is pressed down
inputKeyboard.addEventListener('keydown', (e) => {
    console.log(`Key down: ${e.key}`); // Logs the key that was pressed
});

// Keypress Event, this happens when a key is pressed and released
inputKeyboard.addEventListener('keypress', (e) => {
    console.log(`Key pressed: ${e.key}`); // Logs the key that was pressed
});

// Keyup Event, this happens when a key is released
inputKeyboard.addEventListener('keyup', (e) => {
    console.log(`Key up: ${e.key}`); // Logs the key that was released
});

// ---------------------------------------------------------------------------------------------------------------- //

// - Interface Events - //

// Error Event, this happens when an error occurs in the meantime of loading an multimedia element
image.addEventListener('error', () => {
    console.log('Error loading image!'); // Logs an error message if the image fails to load
});

// Load Event, this happens when the page is fully loaded
window.addEventListener('load', () => {
    console.log('Page fully loaded!'); // Logs a message when the page is fully loaded
});

// Beforeunload Event, this happens when the user is about to leave the page

// Unload Event, this happens when the user leaves the page

// Resize Event, this happens when the window is resized

// Scroll Event, this happens when the user scrolls the page

// Select Event, this happens when an element is selected (Input or Textarea)
inputKeyboard.addEventListener('select', (e) => {
    let start = e.target.selectionStart; // Gets the start position of the selection
    let end = e.target.selectionEnd; // Gets the end position of the selection
    let completeText = inputKeyboard.value; // Gets the complete text of the input
    container.innerHTML = completeText.substring(start, end); // Displays the selected text in the container
});

// Another Example
inputKeyboard.addEventListener('keyup', (e) => {
    let key = e.key; // Gets the key that was pressed
    content = `The last key pressed was: ${key}`; // Creates a message with the last key pressed
    container.innerHTML = content; // Displays the message in the container
});

// ---------------------------------------------------------------------------------------------------------------- //

// - Temporary Events - //

// SetTimeout Event, this happens after a specified time
const temp = setTimeout(() => {
    console.log('This message appears after 2 seconds!'); // Logs a message after 2 seconds
}, 2000); // It can also be used with a function as the first parameter

// ClearTimeout Event, this is used to cancel a timeout
clearTimeout(temp); 

// SetInterval Event, this happens at regular intervals
const interval = setInterval(() => {
    console.log('This message appears every 1 second!');
}, 1000); // It can also be used with a function as the first parameter

// ClearInterval Event, this is used to cancel an interval
clearInterval(interval);

// ---------------------------------------------------------------------------------------------------------------- //



