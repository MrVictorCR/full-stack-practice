// Function excercises

// 1. A function that returns the sum of two numbers
function sum(a, b){
    return a + b;
}

console.log(sum(5, 3));

// 2. A function that receive an array with numbers and return the maximum number
const maxNumber = (arr) => Math.max(...arr);

console.log(maxNumber([1, 2, 3, 4, 5]));

// 3. A function that receives a string and returns the number of vowels in it
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello, my name is Victor."));

// 4. A function that receive 2 arrays and returns a new array with the elements that are in both arrays
function intersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}
console.log(intersection([1, 2, 3], [2, 3, 4]));

// 5. A function that calculates the factorial of a number
function factorial(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    if (n === 0 || n === 1) return 1; // Base case
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));

