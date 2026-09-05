# Comprehensive JavaScript Concept Guide

## Table of Contents
1. Introduction to JavaScript
2. Fundamentals
3. Functions
4. Objects & Arrays
5. DOM & Events
6. Asynchronous Programming
7. Object-Oriented Programming
8. ES6+ Features
9. Best Practices
10. Debugging & Performance

---

## 1. Introduction to JavaScript

### What is JavaScript?
- High-level, interpreted programming language
- Originally designed for web browsers
- Now runs on servers (Node.js) and various platforms
- Dynamically typed, supporting multiple paradigms (OOP, Functional, Procedural)
- ECMAScript (ES) is the standardized specification

### Why JavaScript?
- Universal language for web development (frontend & backend)
- Large ecosystem of libraries and frameworks (React, Vue, Angular)
- Asynchronous capabilities for responsive applications
- Growing server-side presence (Node.js)
- Constantly evolving with new features annually

### Where JavaScript Runs
- Web browsers (Chrome, Firefox, Safari, Edge)
- Node.js (server-side runtime)
- Desktop applications (Electron)
- Mobile apps (React Native, Flutter)
- IoT devices

---

## 2. Fundamentals

### Variables & Scope

#### Variable Declaration
```javascript
// let - block-scoped (preferred)
let age = 25;

// const - block-scoped, immutable reference
const name = "John";

// var - function-scoped (avoid)
var city = "New York";
```

#### Scope Types
- **Global Scope**: Accessible everywhere
- **Function Scope**: Accessible within function
- **Block Scope**: Accessible within {}, only for let/const
- **Lexical Scope**: Inner functions can access outer variables

### Data Types

#### Primitive Types
```javascript
// Number
let integer = 42;
let float = 3.14;
let infinity = Infinity;
let notANumber = NaN;

// String
let text = "Hello";
let template = `Hello, ${name}`;

// Boolean
let isTrue = true;
let isFalse = false;

// Null & Undefined
let empty = null;         // Intentionally empty
let notDefined;          // No value assigned

// Symbol (ES6)
const id = Symbol("id");

// BigInt (large numbers)
const largeNumber = 123456789012345678901234567890n;
```

#### Complex Types
- Objects
- Arrays
- Functions
- Dates
- Regular Expressions
- Maps, Sets, WeakMap, WeakSet

### Operators

#### Arithmetic
```javascript
+, -, *, /, %, **  (exponentiation)
++, --  (increment/decrement)
```

#### Comparison
```javascript
==   (loose equality)
===  (strict equality - preferred)
!=, !==
<, >, <=, >=
```

#### Logical
```javascript
&&   (AND)
||   (OR)
!    (NOT)
```

#### Assignment
```javascript
=, +=, -=, *=, /=, %=
```

#### Special Operators
```javascript
typeof      // Check type
instanceof  // Check instance
in          // Check property
delete      // Remove property
void        // Execute and return undefined
?.          // Optional chaining
??          // Nullish coalescing
```

### Type Coercion & Conversion
```javascript
// Implicit coercion (loose comparison)
"5" == 5    // true
true + 1    // 2

// Explicit conversion
Number("42")        // 42
String(42)          // "42"
Boolean(1)          // true
parseInt("42")      // 42
parseFloat("3.14")  // 3.14
```

---

## 3. Functions

### Function Declaration
```javascript
// Regular function
function greet(name) {
    return "Hello, " + name;
}

// Function expression
const greet = function(name) {
    return "Hello, " + name;
};

// Arrow function (ES6)
const greet = (name) => "Hello, " + name;

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("Runs immediately!");
})();
```

### Parameters & Arguments
```javascript
// Default parameters
const greet = (name = "Guest") => `Hello, ${name}`;

// Rest parameters (...args)
const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);

// Destructuring parameters
const printUser = ({name, age}) => {
    console.log(`${name} is ${age}`);
};
```

### Return Value
```javascript
// No return statement returns undefined
function noReturn() { }

// Early return
function processData(data) {
    if (!data) return;  // Returns undefined
    // process...
}

// Return object
const getCoordinates = () => ({x: 10, y: 20});
```

### Higher-Order Functions
```javascript
// Function that returns a function
const makeMultiplier = (factor) => (num) => num * factor;
const double = makeMultiplier(2);
double(5);  // 10

// Function that accepts a function
const map = (arr, callback) => arr.map(callback);
map([1, 2, 3], x => x * 2);  // [2, 4, 6]
```

### Closures
```javascript
const createCounter = () => {
    let count = 0;
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        get: () => count
    };
};

const counter = createCounter();
counter.increment();  // 1
counter.increment();  // 2
counter.get();        // 2
```

---

## 4. Objects & Arrays

### Objects

#### Object Creation
```javascript
// Object literal
const person = {name: "John", age: 30};

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person = new Person("John", 30);

// Object.create()
const person = Object.create(Object.prototype);
person.name = "John";

// Class (ES6)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
```

#### Object Properties
```javascript
// Access
obj.property;
obj["property"];

// Add/Update
obj.newProp = "value";
obj["newProp"] = "value";

// Delete
delete obj.property;

// Check existence
"property" in obj;
obj.hasOwnProperty("property");
```

#### Object Methods
```javascript
Object.keys(obj);           // Get all keys
Object.values(obj);         // Get all values
Object.entries(obj);        // Get [key, value] pairs
Object.assign(target, ...sources);  // Merge objects
Object.freeze(obj);         // Make immutable
Object.seal(obj);           // Prevent adding/removing properties

// Spread operator
const merged = {...obj1, ...obj2};
```

### Arrays

#### Array Creation
```javascript
// Array literal
const arr = [1, 2, 3];

// Array constructor
const arr = new Array(1, 2, 3);

// Array.from()
const arr = Array.from("hello");  // ['h', 'e', 'l', 'l', 'o']

// Array.of()
const arr = Array.of(1, 2, 3);
```

#### Array Methods (Non-Mutating)
```javascript
arr.map(callback);              // Transform each element
arr.filter(callback);           // Keep matching elements
arr.reduce(callback, initial);  // Accumulate value
arr.forEach(callback);          // Execute for each element
arr.find(callback);             // Find first match
arr.findIndex(callback);        // Find index of first match
arr.includes(value);            // Check if contains
arr.indexOf(value);             // Get index of value
arr.slice(start, end);          // Get portion
arr.concat(other);              // Combine arrays
arr.join(separator);            // Convert to string
```

#### Array Methods (Mutating)
```javascript
arr.push(item);                 // Add to end
arr.pop();                      // Remove from end
arr.unshift(item);              // Add to start
arr.shift();                    // Remove from start
arr.splice(index, count, items);  // Add/remove at index
arr.reverse();                  // Reverse in place
arr.sort(compareFn);            // Sort in place
arr.fill(value);                // Fill with value
```

#### Array Destructuring
```javascript
const [a, b, c] = [1, 2, 3];
const [a, , c] = [1, 2, 3];       // Skip middle
const [a, ...rest] = [1, 2, 3];   // Rest elements
const [a = 0] = [];               // Default value
```

---

## 5. DOM & Events

### DOM Selection
```javascript
// Single element
document.getElementById('id');
document.querySelector('selector');
document.querySelector('.class');
document.querySelector('[attr="value"]');

// Multiple elements
document.querySelectorAll('selector');
document.getElementsByClassName('class');
document.getElementsByTagName('tag');
document.getElementsByName('name');
```

### DOM Manipulation
```javascript
// Content
element.innerText;          // Text only
element.innerHTML;          // HTML content
element.textContent;        // All text

// Attributes
element.getAttribute('attr');
element.setAttribute('attr', 'value');
element.removeAttribute('attr');

// Classes
element.classList.add('class');
element.classList.remove('class');
element.classList.toggle('class');
element.classList.contains('class');

// Styles
element.style.color = "red";
element.style.backgroundColor = "blue";
```

### Creating & Inserting
```javascript
// Create
const elem = document.createElement('div');
const text = document.createTextNode('Hello');

// Insert
parent.appendChild(child);
parent.insertBefore(child, reference);
parent.replaceChild(newChild, oldChild);

// Remove
element.remove();
parent.removeChild(child);
```

### DOM Traversal
```javascript
element.parentElement;
element.children;
element.firstChild / element.lastChild;
element.nextSibling / element.previousSibling;
element.nextElementSibling / element.previousElementSibling;
```

### Events

#### Adding Listeners
```javascript
// Method 1: addEventListener (preferred)
element.addEventListener('click', (event) => {
    console.log("Clicked!");
});

// Method 2: HTML attribute
<button onclick="handleClick()">Click</button>

// Method 3: DOM property
element.onclick = (event) => { };
```

#### Common Events
```javascript
// Mouse events
click, dblclick, mousedown, mouseup
mouseover, mouseout, mousemove, mouseenter, mouseleave

// Keyboard events
keydown, keyup, keypress

// Form events
submit, change, input, focus, blur

// Window events
load, unload, resize, scroll, beforeunload

// Touch events
touchstart, touchend, touchmove, touchcancel
```

#### Event Object
```javascript
event.type;              // Event type
event.target;            // Element that triggered
event.currentTarget;     // Element with listener
event.key;               // Key pressed
event.clientX, event.clientY;  // Mouse position
event.preventDefault();  // Stop default behavior
event.stopPropagation(); // Stop event bubbling
event.stopImmediatePropagation();  // Stop other listeners
```

#### Event Delegation
```javascript
container.addEventListener('click', (e) => {
    if (e.target.matches('.item')) {
        // Handle item click
    }
});
```

---

## 6. Asynchronous Programming

### Callbacks
```javascript
function fetchData(callback) {
    setTimeout(() => {
        callback("Data loaded");
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});
```

### Promises
```javascript
const promise = new Promise((resolve, reject) => {
    if (success) {
        resolve("Data");
    } else {
        reject("Error");
    }
});

promise
    .then(data => console.log(data))
    .catch(error => console.log(error))
    .finally(() => console.log("Complete"));
```

### Async/Await
```javascript
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error:", error);
    } finally {
        console.log("Done");
    }
}

// Call async function
fetchData().then(data => console.log(data));
```

### Promise Methods
```javascript
Promise.all([promise1, promise2]);    // All must resolve
Promise.race([promise1, promise2]);   // First to resolve/reject
Promise.allSettled([...]);            // All complete
Promise.any([...]);                   // First to resolve
```

### Timers
```javascript
// setTimeout - execute once
const timeoutId = setTimeout(() => {
    console.log("After 2 seconds");
}, 2000);

clearTimeout(timeoutId);

// setInterval - execute repeatedly
const intervalId = setInterval(() => {
    console.log("Every 1 second");
}, 1000);

clearInterval(intervalId);
```

---

## 7. Object-Oriented Programming

### Classes (ES6)
```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        return `${this.name} makes a sound`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    
    speak() {
        return `${this.name} barks`;
    }
}

const dog = new Dog("Rex", "Labrador");
dog.speak();  // Rex barks
```

### Static Methods & Properties
```javascript
class MathUtils {
    static PI = 3.14159;
    
    static add(a, b) {
        return a + b;
    }
}

MathUtils.PI;        // 3.14159
MathUtils.add(5, 3); // 8
```

### Getters & Setters
```javascript
class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    
    get radius() {
        return this._radius;
    }
    
    set radius(r) {
        if (r > 0) this._radius = r;
    }
    
    get area() {
        return Math.PI * this._radius ** 2;
    }
}
```

### Private Fields
```javascript
class BankAccount {
    #balance = 0;
    
    constructor(initial) {
        this.#balance = initial;
    }
    
    deposit(amount) {
        this.#balance += amount;
    }
    
    getBalance() {
        return this.#balance;
    }
}
```

### Inheritance & Polymorphism
```javascript
class Shape {
    area() {
        throw new Error("Must implement area()");
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    
    area() {
        return this.width * this.height;
    }
}
```

---

## 8. ES6+ Features

### Template Literals
```javascript
const name = "John";
const message = `Hello, ${name}!`;
const multiline = `
    Line 1
    Line 2
`;
```

### Destructuring
```javascript
// Array
const [a, b, c] = [1, 2, 3];

// Object
const {name, age} = person;
const {name: personName} = person;  // Rename

// Function parameters
const printUser = ({name, age}) => { };
```

### Arrow Functions
```javascript
const add = (a, b) => a + b;
const square = x => x * x;
const greet = () => "Hello";
```

### Default Parameters & Rest
```javascript
const greet = (name = "Guest", ...titles) => { };
```

### Spread Operator
```javascript
// Arrays
const combined = [...arr1, ...arr2];

// Objects
const merged = {...obj1, ...obj2};

// Function calls
Math.max(...numbers);
```

### For...of Loop
```javascript
for (const value of array) { }
for (const [index, value] of array.entries()) { }
for (const key in object) { }
```

### Optional Chaining & Nullish Coalescing
```javascript
obj?.property?.nested;
obj?.method?.();
arr?.[0];

const val = null ?? "default";
```

### Promise & Async/Await
Already covered in Asynchronous Programming section.

---

## 9. Best Practices

### Code Quality
1. **Use let/const over var**
   ```javascript
   // Good
   const name = "John";
   let age = 30;
   
   // Avoid
   var name = "John";
   ```

2. **Meaningful Names**
   ```javascript
   // Good
   const getUserById = (id) => { };
   
   // Bad
   const get = (x) => { };
   ```

3. **Keep Functions Small**
   ```javascript
   // Good - single responsibility
   const validateEmail = (email) => { };
   const sendEmail = (email) => { };
   
   // Bad
   const processEmail = (email) => { /* validation + sending */ };
   ```

4. **Use Arrow Functions for Callbacks**
   ```javascript
   // Good
   arr.map(x => x * 2);
   
   // Acceptable but verbose
   arr.map(function(x) { return x * 2; });
   ```

5. **Error Handling**
   ```javascript
   try {
       riskyOperation();
   } catch (error) {
       console.error("Error:", error.message);
   }
   ```

### Performance
- Minimize DOM manipulation
- Use event delegation
- Cache DOM queries
- Debounce/throttle events
- Lazy load images
- Use async/defer for scripts

### Security
- Never trust user input
- Use textContent instead of innerHTML when possible
- Escape HTML entities
- Use HTTPS
- Validate on both client and server
- Use Content Security Policy (CSP)

### Testing
```javascript
// Using Jest
test('adds numbers', () => {
    expect(add(1, 2)).toBe(3);
});
```

---

## 10. Debugging & Performance

### Debugging Techniques
```javascript
// Console methods
console.log("Regular");
console.warn("Warning");
console.error("Error");
console.table(data);
console.group("Group");
console.time("timer");
console.timeEnd("timer");

// Debugger statement
debugger;  // Pauses execution

// Try/catch
try {
    // code
} catch (error) {
    console.error(error.stack);
}
```

### Performance Monitoring
```javascript
// Measure time
const start = performance.now();
// code
const end = performance.now();
console.log(`Took ${end - start}ms`);

// Memory
console.log(performance.memory);

// User Timing API
performance.mark("start");
// code
performance.mark("end");
performance.measure("operation", "start", "end");
```

---

## Common Patterns & Idioms

### Conditional Assignment
```javascript
const value = condition ? trueValue : falseValue;
const value = value || defaultValue;
const value = value ?? defaultValue;
```

### Safe Array Access
```javascript
const first = arr?.[0];
const last = arr?.[arr.length - 1];
```

### Object Merging
```javascript
const merged = {...default, ...custom, ...override};
```

### Null Coalescing vs OR
```javascript
const config = null ?? "default";      // "default"
const config = 0 ?? "default";         // 0

const config = null || "default";      // "default"
const config = 0 || "default";         // "default" (coerced)
```

---

## Useful Resources

- **Official Spec**: ECMAScript (ECMA-262)
- **MDN Web Docs**: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **JavaScript.info**: https://javascript.info
- **Node.js Docs**: https://nodejs.org/docs
- **npm Packages**: https://www.npmjs.com

---

## Summary

JavaScript has evolved from a simple scripting language to a powerful, versatile programming language capable of powering complex applications both on the frontend and backend. By mastering the fundamentals, understanding async patterns, learning OOP, and staying updated with ES6+ features, you'll be well-equipped to build robust JavaScript applications.

**Key Takeaways:**
- Master fundamentals: variables, functions, objects, arrays
- Understand scope and closures
- Learn asynchronous programming (Promises, async/await)
- Use modern ES6+ features
- Write clean, testable, secure code
- Practice debugging and performance optimization
- Keep learning and stay updated with the ecosystem
