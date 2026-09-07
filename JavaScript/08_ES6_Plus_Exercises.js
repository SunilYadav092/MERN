// ======================================
// JavaScript ES6+ Features Exercises
// ======================================

// EXERCISE 1: Template Literals
console.log("=== EXERCISE 1: Template Literals ===");

// TODO: Use template literals for string interpolation
// SOLUTION:

const name = "Alice";
const age = 28;
const city = "San Francisco";

// Basic interpolation
const message = `My name is ${name} and I'm ${age} years old`;
console.log(message);

// Multi-line strings
const bio = `
    Name: ${name}
    Age: ${age}
    City: ${city}
    Status: Active
`;
console.log(bio);

// Expression evaluation
const a = 10;
const b = 20;
console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`Is ${a} > ${b}? ${a > b}`);

// Nested templates
const greeting = `Hello ${name}, ${age > 18 ? 'you are an adult' : 'you are a minor'}`;
console.log(greeting);

// -----------------------------------

// EXERCISE 2: Array Destructuring
console.log("\n=== EXERCISE 2: Array Destructuring ===");

// TODO: Extract values from arrays using destructuring
// SOLUTION:

// Basic destructuring
const [x, y, z] = [1, 2, 3];
console.log(`x=${x}, y=${y}, z=${z}`);

// Skip elements
const [first, , third] = [10, 20, 30];
console.log(`first=${first}, third=${third}`);

// Rest operator
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(`head=${head}, tail=[${tail.join(", ")}]`);

// Default values
const [a = 0, b = 0] = [5];
console.log(`a=${a}, b=${b}`);

// Swapping variables
let num1 = 10;
let num2 = 20;
[num1, num2] = [num2, num1];
console.log(`After swap: num1=${num1}, num2=${num2}`);

// Function return destructuring
function getCoordinates() {
    return [40.7128, -74.0060];  // latitude, longitude
}

const [lat, lon] = getCoordinates();
console.log(`Location: ${lat.toFixed(4)}, ${lon.toFixed(4)}`);

// -----------------------------------

// EXERCISE 3: Object Destructuring
console.log("\n=== EXERCISE 3: Object Destructuring ===");

// TODO: Extract properties from objects
// SOLUTION:

// Basic destructuring
const person = {name: "Bob", age: 30, email: "bob@example.com"};
const {name: personName, age: personAge} = person;
console.log(`${personName} is ${personAge} years old`);

// Without renaming
const {name, age, email} = person;
console.log(`Email: ${email}`);

// Default values
const {country = "USA", phone = "N/A"} = person;
console.log(`Country: ${country}, Phone: ${phone}`);

// Nested destructuring
const user = {
    id: 1,
    profile: {
        firstName: "Charlie",
        lastName: "Brown",
        location: {
            city: "New York",
            zip: "10001"
        }
    }
};

const {profile: {firstName, location: {city}}} = user;
console.log(`${firstName} from ${city}`);

// Destructuring in function parameters
function printUser({name, age}) {
    console.log(`${name} is ${age} years old`);
}

printUser({name: "Diana", age: 25});

// -----------------------------------

// EXERCISE 4: Arrow Functions
console.log("\n=== EXERCISE 4: Arrow Functions ===");

// TODO: Use arrow function syntax
// SOLUTION:

// Single parameter, concise
const square = x => x * x;
console.log(`square(5) = ${square(5)}`);

// Multiple parameters
const multiply = (a, b) => a * b;
console.log(`multiply(3, 4) = ${multiply(3, 4)}`);

// No parameters
const greet = () => "Hello, World!";
console.log(greet());

// Multiple statements (return required)
const calculate = (a, b) => {
    const sum = a + b;
    const product = a * b;
    return {sum, product};
};

console.log(calculate(5, 3));

// Array of objects
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);

console.log(`Doubled: [${doubled.join(", ")}]`);
console.log(`Evens: [${evens.join(", ")}]`);

// Arrow function with object return (need parentheses)
const createUser = (name, age) => ({name, age});
console.log(createUser("Eve", 26));

// -----------------------------------

// EXERCISE 5: Default Parameters
console.log("\n=== EXERCISE 5: Default Parameters ===");

// TODO: Use default parameter values
// SOLUTION:

// Simple defaults
const greetUser = (name = "Guest", greeting = "Hello") => {
    return `${greeting}, ${name}!`;
};

console.log(greetUser());
console.log(greetUser("Frank"));
console.log(greetUser("Grace", "Hi"));

// Default with expressions
const getConfig = (timeout = 5000, retries = 3) => ({
    timeout,
    retries,
    timestamp: Date.now()
});

console.log(getConfig());
console.log(getConfig(10000, 5));

// Default referencing other parameters
const createURL = (domain, path = "/", protocol = "https") => {
    return `${protocol}://${domain}${path}`;
};

console.log(createURL("example.com"));
console.log(createURL("example.com", "/api"));

// -----------------------------------

// EXERCISE 6: Rest & Spread Operators
console.log("\n=== EXERCISE 6: Rest & Spread Operators ===");

// TODO: Use ... operator for rest and spread
// SOLUTION:

// Rest parameters
const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);
console.log(`sum(1, 2, 3) = ${sum(1, 2, 3)}`);
console.log(`sum(1, 2, 3, 4, 5) = ${sum(1, 2, 3, 4, 5)}`);

// Spread with arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(`Combined: [${combined.join(", ")}]`);

// Spread with objects
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const merged = {...obj1, ...obj2};
console.log("Merged object:", JSON.stringify(merged));

// Override properties
const defaults = {theme: "light", fontSize: 14};
const userSettings = {theme: "dark"};
const settings = {...defaults, ...userSettings};
console.log("Settings:", JSON.stringify(settings));

// Rest in destructuring
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(`First: ${first}, Second: ${second}, Rest: [${rest.join(", ")}]`);

// -----------------------------------

// EXERCISE 7: For...of Loop
console.log("\n=== EXERCISE 7: For...of Loop ===");

// TODO: Use for...of for iteration
// SOLUTION:

const colors = ["red", "green", "blue", "yellow"];

// For...of with array
console.log("Array items:");
for (const color of colors) {
    console.log(`  ${color}`);
}

// For...of with string
console.log("\nString characters:");
for (const char of "hello") {
    console.log(`  ${char}`);
}

// For...of with entries()
console.log("\nArray entries:");
for (const [index, value] of colors.entries()) {
    console.log(`  [${index}] = ${value}`);
}

// For...in (get keys)
const person2 = {name: "Henry", age: 32, city: "Boston"};
console.log("\nObject properties (for...in):");
for (const key in person2) {
    console.log(`  ${key}: ${person2[key]}`);
}

// -----------------------------------

// EXERCISE 8: Enhanced Object Literals
console.log("\n=== EXERCISE 8: Enhanced Object Literals ===");

// TODO: Use shorthand in object literals
// SOLUTION:

const firstName = "Iris";
const age2 = 28;

// Shorthand properties
const person3 = {
    firstName,
    age: age2,
    greet() {
        return `Hello, I'm ${this.firstName}`;
    }
};

console.log(JSON.stringify(person3));
console.log(person3.greet());

// Computed property names
const propName = "dynamicKey";
const obj = {
    [propName]: "value",
    [`computed_${Math.random()}`]: 42,
    ["normal"]: "property"
};

console.log("Object with computed properties:", obj);

// Method shorthand
const calculator = {
    add(a, b) { return a + b; },
    subtract(a, b) { return a - b; },
    multiply(a, b) { return a * b; },
    divide(a, b) { return b !== 0 ? a / b : "Cannot divide by zero"; }
};

console.log("Calculator:");
console.log(`  add(10, 5) = ${calculator.add(10, 5)}`);
console.log(`  multiply(4, 3) = ${calculator.multiply(4, 3)}`);

// -----------------------------------

// EXERCISE 9: Promises and Async/Await
console.log("\n=== EXERCISE 9: Promises & Async/Await ===");

// TODO: Work with promises and async functions
// SOLUTION (shown earlier in async exercises, included here for completeness):

// Basic promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise resolved!"), 500);
});

myPromise.then(result => console.log(result));

// Async/await example
async function fetchData() {
    try {
        return new Promise(resolve => {
            setTimeout(() => resolve("Data loaded"), 500);
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

// Note: Uncomment to run
// fetchData().then(data => console.log("Async result:", data));

// -----------------------------------

// EXERCISE 10: Optional Chaining & Nullish Coalescing
console.log("\n=== EXERCISE 10: Optional Chaining & Nullish Coalescing ===");

// TODO: Use modern operators for safe access
// SOLUTION:

const userData = {
    name: "Jack",
    address: {
        street: "123 Main St",
        city: "LA"
    }
};

const emptyUser = null;

// Optional chaining (?.)
console.log("Optional chaining:");
console.log(`  userData?.name = ${userData?.name}`);
console.log(`  userData?.email = ${userData?.email}`);
console.log(`  userData?.address?.city = ${userData?.address?.city}`);
console.log(`  emptyUser?.name = ${emptyUser?.name}`);

// Optional chaining with arrays
const items = [1, 2, 3];
console.log(`  items?.[0] = ${items?.[0]}`);
console.log(`  items?.[10] = ${items?.[10]}`);

// Nullish coalescing (??)
console.log("\nNullish coalescing:");
const value1 = null ?? "default";
const value2 = undefined ?? "default";
const value3 = 0 ?? "default";
const value4 = "" ?? "default";

console.log(`  null ?? "default" = "${value1}"`);
console.log(`  undefined ?? "default" = "${value2}"`);
console.log(`  0 ?? "default" = ${value3}`);
console.log(`  "" ?? "default" = "${value4}"`);

// Compare with || (OR operator)
console.log("\nComparison with || operator:");
console.log(`  0 || "default" = "${0 || 'default'}"`);  // Coerced
console.log(`  "" || "default" = "${"" || 'default'}"`);  // Coerced
console.log(`  false ?? "default" = ${false ?? 'default'}`);  // Only nullish

// -----------------------------------

// EXERCISE 11: Classes (Review)
console.log("\n=== EXERCISE 11: ES6 Classes ===");

// TODO: Review ES6 class syntax
// SOLUTION:

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    area() {
        return this.width * this.height;
    }
    
    perimeter() {
        return 2 * (this.width + this.height);
    }
    
    static isSquare(width, height) {
        return width === height;
    }
}

const rect = new Rectangle(10, 5);
console.log(`Rectangle 10x5:`);
console.log(`  Area: ${rect.area()}`);
console.log(`  Perimeter: ${rect.perimeter()}`);
console.log(`  Is square? ${Rectangle.isSquare(10, 5)}`);
console.log(`  Is square? ${Rectangle.isSquare(5, 5)}`);

// -----------------------------------

// EXERCISE 12: Modules Pattern
console.log("\n=== EXERCISE 12: Module Pattern ===");

// TODO: Create modular code using IIFE
// SOLUTION:

const Calculator = (() => {
    // Private variables
    let lastResult = 0;
    
    // Private function
    function validateNumber(num) {
        return typeof num === 'number' && !isNaN(num);
    }
    
    // Public API
    return {
        add(a, b) {
            if (validateNumber(a) && validateNumber(b)) {
                lastResult = a + b;
                return lastResult;
            }
            return "Invalid input";
        },
        
        subtract(a, b) {
            if (validateNumber(a) && validateNumber(b)) {
                lastResult = a - b;
                return lastResult;
            }
            return "Invalid input";
        },
        
        multiply(a, b) {
            if (validateNumber(a) && validateNumber(b)) {
                lastResult = a * b;
                return lastResult;
            }
            return "Invalid input";
        },
        
        getLastResult() {
            return lastResult;
        }
    };
})();

console.log("Module pattern - Calculator:");
console.log(`  add(10, 5) = ${Calculator.add(10, 5)}`);
console.log(`  multiply(4, 3) = ${Calculator.multiply(4, 3)}`);
console.log(`  Last result: ${Calculator.getLastResult()}`);
// Note: Cannot access private variables:
// console.log(Calculator.lastResult);  // undefined

// ======================================
// End of ES6+ Features Exercises
// ======================================
