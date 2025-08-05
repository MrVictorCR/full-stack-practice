// Exceptions Excersises

// 1. create an exception using try and catch
try {
    // Simulate an error
    throw new Error("This is a custom error message");
} catch (error) {
    console.error("Caught an error:", error.message);
}

// 2. Create an exception using try, catch, and finally
try {
    // Simulate another error
    throw new Error("This is another custom error message");
} catch (error) {
    console.error("Caught an error in try-catch:", error.message);
}   finally {
    console.log("This will always execute, regardless of an error.");
}

// 3. Use a generic exception to handle any error
try {
    // Simulate yet another error
    throw new Error("This is a generic error message");
} catch (error) {
    console.error("Caught a generic error:", error.message);
}  finally {
    console.log("This will also always execute, even if the error is generic.");
}

//4. Create a custom exception class
class CustomException extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomException";
    }
}

// 5. Throw a custom exception
try {
    throw new CustomException("This is a custom exception message");
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}

// 6. Create a loop that try to transfrom a float value and catch any error
let floatValues = [1.5, 2.3, "not a number", 4.7];
for (let value of floatValues) {
    try {
        // Attempt to convert the value to an integer
        let intValue = parseInt(value);
        if (isNaN(intValue)) {
            throw new Error(`Cannot convert "${value}" to an integer`);
        }
        console.log(`Converted ${value} to ${intValue}`);
    } catch (error) {
        console.error(`Error processing value "${value}":`, error.message);
    }
}  

// 7. Create a function that verify if an object has a specific property and throw an error if it doesn't
function verifyProperty(obj, prop) {
    if (!obj.hasOwnProperty(prop)) {
        throw new Error(`Property "${prop}" does not exist on the object`);
    }
    return true;
}

// Example usage
let myObject = { name: "Victor", age: 21 };
try {
    verifyProperty(myObject, "email");
} catch (error) {
    console.error("Verification failed:", error.message);
    // Handle the error, e.g., log it or notify the user
    // You can also rethrow the error if needed
    // throw error;
    console.log("Please check the object properties.");
    // Additional handling logic can go here
    console.log("Continuing with the program...");
    // Continue with the rest of the program
    console.log("Program continues after error handling.");
    // Can you retry the operation and if the case persist, throw the error again but a maximum of 10 times
    let retryCount = 0;
    const maxRetries = 10;
    while (retryCount < maxRetries) {
        try {
            verifyProperty(myObject, "email");
            console.log("Property verified successfully.");
            break; // Exit the loop if successful
        } catch (error) {
            retryCount++;
            console.error(`Retry ${retryCount}:`, error.message);
            if (retryCount === maxRetries) {
                throw new Error("Max retries reached. Property verification failed.");
            }
        }
    }
}
