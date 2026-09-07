// ======================================
// JavaScript Introduction Exercises
// ======================================

// EXERCISE 1: Variable Declaration & Data Types
// Write code to declare variables of different types
console.log("=== EXERCISE 1: Variables & Data Types ===");

// TODO: Declare variables for: name (string), age (number), isStudent (boolean), hobbies (array)
// SOLUTION:
const name = "Alice";
const age = 25;
const isStudent = true;
const hobbies = ["Reading", "Coding", "Gaming"];

console.log(name, age, isStudent, hobbies);
console.log(`Type of name: ${typeof name}`);
console.log(`Type of hobbies: ${typeof hobbies}`);

// -----------------------------------

// EXERCISE 2: Arithmetic Operations
// Create a program that calculates the area and perimeter of a rectangle
console.log("\n=== EXERCISE 2: Arithmetic Operations ===");

// TODO: Given width = 10 and height = 5, calculate area and perimeter
// SOLUTION:
const width = 10;
const height = 5;

const area = width * height;
const perimeter = 2 * (width + height);

console.log(`Rectangle dimensions: ${width} x ${height}`);
console.log(`Area: ${area}`);
console.log(`Perimeter: ${perimeter}`);

// -----------------------------------

// EXERCISE 3: Comparison & Logical Operators
// Determine if a person is eligible for a discount
console.log("\n=== EXERCISE 3: Comparisons & Logical Operators ===");

// TODO: Person is eligible if age >= 60 OR purchase amount >= 1000
const personAge = 65;
const purchaseAmount = 500;

// SOLUTION:
const isEligible = personAge >= 60 || purchaseAmount >= 1000;

console.log(`Age: ${personAge}, Purchase: $${purchaseAmount}`);
console.log(`Eligible for discount: ${isEligible}`);

// -----------------------------------

// EXERCISE 4: String Manipulation
// Create a function that reverses a string
console.log("\n=== EXERCISE 4: String Manipulation ===");

// TODO: Write a function to reverse any string
// SOLUTION:
function reverseString(str) {
    return str.split('').reverse().join('');
}

const original = "JavaScript";
const reversed = reverseString(original);

console.log(`Original: ${original}`);
console.log(`Reversed: ${reversed}`);

// Alternative solution using loop:
function reverseStringLoop(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

console.log(`Reversed (loop): ${reverseStringLoop(original)}`);

// -----------------------------------

// EXERCISE 5: Conditional Logic
// Grade calculator based on score
console.log("\n=== EXERCISE 5: Conditional Logic ===");

// TODO: Create a function that assigns grades: A(90+), B(80-89), C(70-79), F(<70)
// SOLUTION:
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else {
        return "F";
    }
}

const scores = [95, 85, 75, 65];
console.log("Score -> Grade");
scores.forEach(score => {
    console.log(`${score} -> ${getGrade(score)}`);
});

// -----------------------------------

// EXERCISE 6: Loops
// Print a multiplication table
console.log("\n=== EXERCISE 6: Loops ===");

// TODO: Print multiplication table for 7 (7x1 through 7x10)
// SOLUTION:
console.log("Multiplication Table of 7:");
for (let i = 1; i <= 10; i++) {
    console.log(`7 × ${i} = ${7 * i}`);
}

// -----------------------------------

// EXERCISE 7: Type Conversion
// Convert and validate user input
console.log("\n=== EXERCISE 7: Type Conversion ===");

// TODO: Convert string inputs to appropriate types and validate
// SOLUTION:
const stringNumber = "42";
const stringFloat = "3.14";
const stringBoolean = "true";

const num = Number(stringNumber);
const float = parseFloat(stringFloat);
const bool = stringBoolean === "true";

console.log(`"${stringNumber}" -> ${num} (${typeof num})`);
console.log(`"${stringFloat}" -> ${float} (${typeof float})`);
console.log(`"${stringBoolean}" -> ${bool} (${typeof bool})`);

// -----------------------------------

// EXERCISE 8: Temperature Converter
// Convert between Celsius and Fahrenheit
console.log("\n=== EXERCISE 8: Temperature Converter ===");

// TODO: Create functions to convert between C and F
// SOLUTION:
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

const celsius = 25;
const fahrenheit = 77;

console.log(`${celsius}°C = ${celsiusToFahrenheit(celsius).toFixed(2)}°F`);
console.log(`${fahrenheit}°F = ${fahrenheitToCelsius(fahrenheit).toFixed(2)}°C`);

// -----------------------------------

// EXERCISE 9: Number Validation
// Check if a number is prime
console.log("\n=== EXERCISE 9: Number Validation ===");

// TODO: Create a function to check if a number is prime
// SOLUTION:
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    
    return true;
}

console.log("Prime numbers from 1 to 20:");
for (let i = 1; i <= 20; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}

// -----------------------------------

// EXERCISE 10: String Counting
// Count words and characters in a sentence
console.log("\n=== EXERCISE 10: String Counting ===");

// TODO: Count total characters and words in a sentence
// SOLUTION:
function countStatistics(sentence) {
    const totalChars = sentence.length;
    const withoutSpaces = sentence.replace(/\s/g, '').length;
    const words = sentence.trim().split(/\s+/).length;
    
    return {
        totalChars,
        withoutSpaces,
        words
    };
}

const sentence = "JavaScript is a powerful programming language";
const stats = countStatistics(sentence);

console.log(`Sentence: "${sentence}"`);
console.log(`Total characters: ${stats.totalChars}`);
console.log(`Characters (no spaces): ${stats.withoutSpaces}`);
console.log(`Word count: ${stats.words}`);

// -----------------------------------

// EXERCISE 11: FizzBuzz
// Classic programming exercise
console.log("\n=== EXERCISE 11: FizzBuzz ===");

// TODO: Print numbers 1-20, but:
// - "Fizz" if divisible by 3
// - "Buzz" if divisible by 5
// - "FizzBuzz" if divisible by both
// SOLUTION:
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        let output = "";
        if (i % 3 === 0) output += "Fizz";
        if (i % 5 === 0) output += "Buzz";
        console.log(output || i);
    }
}

console.log("FizzBuzz 1-20:");
fizzBuzz(20);

// -----------------------------------

// EXERCISE 12: Calculator
// Simple calculator function
console.log("\n=== EXERCISE 12: Simple Calculator ===");

// TODO: Create a calculator that takes two numbers and an operator
// SOLUTION:
function calculator(a, b, operator) {
    switch(operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) return "Cannot divide by zero";
            return a / b;
        default:
            return "Invalid operator";
    }
}

console.log(`10 + 5 = ${calculator(10, 5, '+')}`);
console.log(`10 - 5 = ${calculator(10, 5, '-')}`);
console.log(`10 * 5 = ${calculator(10, 5, '*')}`);
console.log(`10 / 5 = ${calculator(10, 5, '/')}`);
console.log(`10 / 0 = ${calculator(10, 0, '/')}`);

// ======================================
// End of Introduction Exercises
// ======================================
