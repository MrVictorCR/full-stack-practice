// Clases Excercise

// 1. Create a class that receive 2 properties

class MyClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // 2. Create a method that return the name and age
    getInfo() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }

    // 3. Add a static method that returns a greeting
    static greet() {
        return "Hello from MyClass!";
    }
}

// Show the properties
let myObject = new MyClass("Victor", 21);
console.log(myObject.getInfo());

// Show the static method
console.log(MyClass.greet());

// 4. Create a subclass that extends MyClass
class Student extends MyClass {
    constructor(name, age, grade) {
        super(name, age); // Call the parent constructor
        this.grade = grade; // Add new property
    }

    // 5. Override the getInfo method to include the grade
    getInfo() {
        return `${super.getInfo()}, Grade: ${this.grade}`;
    }
}

// 6. Create a class that use getter and setter for a property
class Teacher extends MyClass {
    constructor(name, age, subject) {
        super(name, age);
        this._subject = subject; // Use underscore to indicate private property
    }

    // Getter for subject
    get subject() {
        return this._subject;
    }

    // Setter for subject
    set subject(newSubject) {
        this._subject = newSubject;
    }

    // Override getInfo method
    getInfo() {
        return `${super.getInfo()}, Subject: ${this.subject}`;
    }
}

let myTeacher = new Teacher("Alice", 30, "Math");
console.log(myTeacher.getInfo());
myTeacher.subject = "Physics"; // Use setter to change subject
console.log(myTeacher.getInfo());


