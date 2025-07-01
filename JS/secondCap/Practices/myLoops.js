// Loop Exercises

// 1. Create a loop that print all the pares # between 1-50

i = 1

while(i <= 50){
   if (i % 2){
      
  } else {
      console.log(i)
    }
  i++
}

// 2. Array with Names: Print all the names

let names = ["Victor", "Dani", "Javi", "Pablo", "Sergio"]

for (let i = 0; i <= names.length; i++){
    if (i < names.length){
        console.log(names[i])
    }
}

// 3. A loop that counts all the vocals in a string

let myString = "Hello, my name is Victor, how are you? I hope you are fine."
let vocals = "aeiou"
let counter = 0
for (let i = 0; i < myString.length; i++){
    if (vocals.includes(myString[i].toLowerCase())){
        counter++
    }
}
console.log(`The number of vocals in the string is: ${counter}`)

// 4. A loop to print the reverse of a string

let reverseString = "Hello, my name is Victor."
let reversed = ""
while (reverseString.length > 0){
    reversed += reverseString[reverseString.length - 1];
    reverseString = reverseString.slice(0, -1);
}

console.log(`The reverse of the string is: ${reversed}`)


