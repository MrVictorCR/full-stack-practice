// Import practices

import { add, subtract, Calculator} from './myModuleExport.js';

// Using the imported functions and class
const calc = new Calculator();
calc.setResult(10);
console.log(`Initial result: ${calc.getResult()}`);
console.log(`Adding 5: ${calc.add(5)}`);
console.log(`Subtracting 3: ${calc.subtract(3)}`);
console.log(`Multiplying by 2: ${calc.multiply(2)}`);
console.log(`Dividing by 4: ${calc.divide(4)}`);
console.log(`Final result: ${calc.getResult()}`);
console.log(`Pi value: ${Calculator.pi()}`);
console.log(`Adding 10 and 5: ${add(10, 5)}`);
console.log(`Subtracting 5 from 10: ${subtract(10, 5)}`);

// Note: Ensure that the file paths are correct based on your project structure.
// If you have any issues with the import, check the file paths and ensure that the module exports are correctly defined.
// If you want to use the greet function, you can uncomment the following line:

import { greet } from './myModuleExport.js';
console.log(greet("Victor")); // Output: Hello, Victor!

// If you want to use the pi constant, you can uncomment the following line:
import { pi } from './myModuleExport.js';
console.log(`Value of pi: ${pi}`); // Output: 3.14159

