// Module Excersises

// 1. Export a function
function greet(name) {
    return `Hello, ${name}!`;
}

// 2. Export a variable
const pi = 3.14159;

// 3. Export a class
export default class Calculator {

    constructor() {
        this.result = 0;
    }

    add(value) {
        this.result += value;
        return this.result;
    }

    subtract(value) {
        this.result -= value;
        return this.result;
    }

    multiply(value) {
        this.result *= value;
        return this.result;
    }

    divide(value) {
        this.result /= value;
        return this.result;
    }

    getResult() {
        return this.result;
    }
    setResult(value) {
        this.result = value;
    }

    reset() {
        this.result = 0;
    }

    static pi() {
        return pi;
    }

}

// 4. Export multiple items
export { greet, pi };
