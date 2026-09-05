// ======================================
// JavaScript Functions & Scope Exercises
// ======================================

// EXERCISE 1: Function Declaration and Expression
console.log("=== EXERCISE 1: Function Declaration vs Expression ===");

// TODO: Compare function declaration and function expression
// SOLUTION:

// Function declaration (hoisted)
function add(a, b) {
    return a + b;
}

// Function expression (not hoisted)
const subtract = function(a, b) {
    return a - b;
};

console.log(`add(10, 5) = ${add(10, 5)}`);
console.log(`subtract(10, 5) = ${subtract(10, 5)}`);

// -----------------------------------

// EXERCISE 2: Arrow Functions
console.log("\n=== EXERCISE 2: Arrow Functions ===");

// TODO: Create arrow functions with different syntaxes
// SOLUTION:

// Single parameter, concise
const square = x => x * x;

// Multiple parameters
const multiply = (a, b) => a * b;

// No parameters
const greet = () => "Hello, World!";

// Multiple statements
const calculate = (a, b) => {
    const sum = a + b;
    const product = a * b;
    return {sum, product};
};

console.log(`square(5) = ${square(5)}`);
console.log(`multiply(4, 3) = ${multiply(4, 3)}`);
console.log(`greet() = ${greet()}`);
console.log(`calculate(3, 4):`, calculate(3, 4));

// -----------------------------------

// EXERCISE 3: Default Parameters
console.log("\n=== EXERCISE 3: Default Parameters ===");

// TODO: Create functions with default parameter values
// SOLUTION:

function greetUser(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

const getConfig = (timeout = 5000, retries = 3) => ({
    timeout,
    retries
});

console.log(greetUser());
console.log(greetUser("Alice"));
console.log(greetUser("Bob", "Hi"));
console.log("Config:", getConfig());
console.log("Custom config:", getConfig(10000, 5));

// -----------------------------------

// EXERCISE 4: Rest Parameters
console.log("\n=== EXERCISE 4: Rest Parameters ===");

// TODO: Create functions that accept variable number of arguments
// SOLUTION:

function sum(...numbers) {
    return numbers.reduce((acc, n) => acc + n, 0);
}

function printItems(...items) {
    console.log(`Items (${items.length}): ${items.join(", ")}`);
}

function logInfo(prefix, ...messages) {
    messages.forEach(msg => console.log(`${prefix}: ${msg}`));
}

console.log(`sum(1, 2, 3) = ${sum(1, 2, 3)}`);
console.log(`sum(1, 2, 3, 4, 5) = ${sum(1, 2, 3, 4, 5)}`);

printItems("apple", "banana", "cherry");
printItems(10, 20, 30, 40);

console.log("Logging:");
logInfo("INFO", "Server started", "Database connected", "Ready");

// -----------------------------------

// EXERCISE 5: Variable Scope
console.log("\n=== EXERCISE 5: Variable Scope ===");

// TODO: Demonstrate global, function, and block scope
// SOLUTION:

let globalVar = "I'm global";

function demonstrateScope() {
    let functionVar = "I'm in function scope";
    
    if (true) {
        let blockVar = "I'm in block scope";
        var varVariable = "I'm function scoped (var)";
        
        console.log(`Inside if block:`);
        console.log(`  blockVar: ${blockVar}`);
        console.log(`  functionVar: ${functionVar}`);
        console.log(`  globalVar: ${globalVar}`);
    }
    
    // blockVar would cause ReferenceError here
    console.log(`Outside if block (within function):`);
    console.log(`  functionVar: ${functionVar}`);
    console.log(`  varVariable: ${varVariable}`);
    // console.log(`  blockVar: ${blockVar}`);  // Error!
}

demonstrateScope();
console.log(`Global scope: ${globalVar}`);

// -----------------------------------

// EXERCISE 6: Closures
console.log("\n=== EXERCISE 6: Closures ===");

// TODO: Create and use closure functions
// SOLUTION:

// Closure for counter
function createCounter() {
    let count = 0;
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const counter = createCounter();
console.log(`Initial: ${counter.getCount()}`);
console.log(`After increment: ${counter.increment()}`);
console.log(`After increment: ${counter.increment()}`);
console.log(`After decrement: ${counter.decrement()}`);
console.log(`Final: ${counter.getCount()}`);

// Closure for function factory
function makeMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(`\ndouble(5) = ${double(5)}`);
console.log(`double(10) = ${double(10)}`);
console.log(`triple(5) = ${triple(5)}`);

// -----------------------------------

// EXERCISE 7: Higher-Order Functions
console.log("\n=== EXERCISE 7: Higher-Order Functions ===");

// TODO: Create functions that work with other functions
// SOLUTION:

// Function that takes a function as parameter
function applyOperation(a, b, operation) {
    return operation(a, b);
}

const ops = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

console.log(`applyOperation(10, 5, add) = ${applyOperation(10, 5, ops.add)}`);
console.log(`applyOperation(10, 5, multiply) = ${applyOperation(10, 5, ops.multiply)}`);

// Function that returns a function
function createValidator(min, max) {
    return function(value) {
        return value >= min && value <= max;
    };
}

const isAdult = createValidator(18, 120);
const isValidAge = createValidator(0, 150);

console.log(`\nisAdult(25) = ${isAdult(25)}`);
console.log(`isAdult(15) = ${isAdult(15)}`);
console.log(`isValidAge(200) = ${isValidAge(200)}`);

// -----------------------------------

// EXERCISE 8: Callback Functions
console.log("\n=== EXERCISE 8: Callback Functions ===");

// TODO: Use callbacks for asynchronous-like operations
// SOLUTION:

function processData(data, callback) {
    console.log(`Processing: ${data}`);
    // Simulate processing
    setTimeout(() => {
        const result = data.toUpperCase();
        callback(result);
    }, 100);
}

processData("hello", (result) => {
    console.log(`Callback received: ${result}`);
});

// Array callback methods
const numbers = [1, 2, 3, 4, 5];

console.log("\nArray callbacks:");
console.log("forEach:");
numbers.forEach((n, i) => console.log(`  [${i}] = ${n}`));

console.log("map (double):");
const doubled = numbers.map(n => n * 2);
console.log(`  [${doubled.join(", ")}]`);

console.log("filter (even):");
const evens = numbers.filter(n => n % 2 === 0);
console.log(`  [${evens.join(", ")}]`);

// -----------------------------------

// EXERCISE 9: Function Composition
console.log("\n=== EXERCISE 9: Function Composition ===");

// TODO: Combine multiple functions
// SOLUTION:

const add5 = x => x + 5;
const multiply2 = x => x * 2;
const subtract3 = x => x - 3;

// Manual composition
const compose = (...fns) => (value) => {
    return fns.reduceRight((acc, fn) => fn(acc), value);
};

const composed = compose(subtract3, multiply2, add5);

console.log("Applying: add5 -> multiply2 -> subtract3");
console.log(`compose(10) = ${composed(10)}`);
// Step by step: 10 + 5 = 15, 15 * 2 = 30, 30 - 3 = 27

// Pipe (reverse order)
const pipe = (...fns) => (value) => {
    return fns.reduce((acc, fn) => fn(acc), value);
};

const piped = pipe(add5, multiply2, subtract3);
console.log("\nApplying: add5 -> multiply2 -> subtract3 (pipe)");
console.log(`pipe(10) = ${piped(10)}`);

// -----------------------------------

// EXERCISE 10: Memoization
console.log("\n=== EXERCISE 10: Memoization (Caching) ===");

// TODO: Cache function results to improve performance
// SOLUTION:

function memoize(fn) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (key in cache) {
            console.log(`  Cache hit for ${key}`);
            return cache[key];
        }
        
        console.log(`  Computing for ${key}`);
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

// Expensive function
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Memoized version
const memoFib = memoize(fibonacci);

console.log("Fibonacci with memoization:");
console.log(`fib(5) = ${memoFib(5)}`);
console.log(`fib(5) = ${memoFib(5)}`);  // From cache
console.log(`fib(6) = ${memoFib(6)}`);

// -----------------------------------

// EXERCISE 11: Function Binding
console.log("\n=== EXERCISE 11: Function Binding ===");

// TODO: Control 'this' binding in functions
// SOLUTION:

const person = {
    name: "Alice",
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};

console.log(person.greet());

// Unbind the function
const unboundGreet = person.greet;
// console.log(unboundGreet()); // 'this' would be undefined

// Bind the function
const boundGreet = person.greet.bind(person);
console.log(boundGreet());

// Bind with additional arguments
function introduce(greeting, punctuation) {
    return `${greeting}, I'm ${this.name}${punctuation}`;
}

const boundIntroduce = introduce.bind(person, "Hi");
console.log(boundIntroduce("!"));

// -----------------------------------

// EXERCISE 12: Recursion
console.log("\n=== EXERCISE 12: Recursion ===");

// TODO: Solve problems using recursive functions
// SOLUTION:

// Factorial
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(`factorial(5) = ${factorial(5)}`);
console.log(`factorial(6) = ${factorial(6)}`);

// Fibonacci
function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

console.log(`\nfibonacci(7) = ${fib(7)}`);

// Sum array
function sumArray(arr, index = 0) {
    if (index === arr.length) return 0;
    return arr[index] + sumArray(arr, index + 1);
}

const nums = [1, 2, 3, 4, 5];
console.log(`sumArray([1,2,3,4,5]) = ${sumArray(nums)}`);

// Traverse nested object
function getAllProperties(obj) {
    let result = [];
    
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            result = result.concat(getAllProperties(obj[key]));
        } else {
            result.push(`${key}: ${obj[key]}`);
        }
    }
    
    return result;
}

const nested = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    }
};

console.log("\nAll properties from nested object:");
getAllProperties(nested).forEach(prop => console.log(`  ${prop}`));

// ======================================
// End of Functions & Scope Exercises
// ======================================
