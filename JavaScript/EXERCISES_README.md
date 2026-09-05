# JavaScript Exercises - Complete Guide

## Overview
This folder contains comprehensive JavaScript exercises organized by topic, with solutions and detailed explanations. Each exercise file can be run in Node.js or a browser console.

## File Structure

### Exercise Files (.js)
Each file contains multiple exercises with solutions:

1. **01_Introduction_Exercises.js** (12 exercises)
   - Variable declaration & data types
   - Arithmetic operations
   - Comparison & logical operators
   - String manipulation
   - Conditional logic
   - Loops
   - Type conversion
   - Temperature converter
   - Number validation (prime check)
   - String counting
   - FizzBuzz pattern
   - Simple calculator

2. **02_Objects_and_Arrays_Exercises.js** (12 exercises)
   - Object creation & access
   - Array methods (map, filter, reduce)
   - Objects in arrays
   - Object manipulation
   - Object utility methods
   - Array destructuring
   - Object destructuring
   - Array searching
   - Merging arrays & objects
   - Sorting arrays
   - Array transformations
   - Flatten & chunk arrays

3. **03_Functions_and_Scope_Exercises.js** (12 exercises)
   - Function declaration vs expression
   - Arrow functions
   - Default parameters
   - Rest parameters
   - Variable scope
   - Closures
   - Higher-order functions
   - Callback functions
   - Function composition
   - Memoization/caching
   - Function binding
   - Recursion

4. **04_DOM_Manipulation_Exercises.js** (10 exercises)
   - DOM selection methods
   - Accessing & modifying content
   - Creating & inserting elements
   - Modifying attributes
   - CSS class manipulation
   - Inline style manipulation
   - DOM traversal
   - Event listeners
   - Practical todo list example
   - Performance optimization tips

5. **05_Events_and_Handlers_Exercises.js** (10 exercises)
   - Click events
   - Keyboard events
   - Form events
   - Mouse events
   - Event delegation
   - Event bubbling & capturing
   - Preventing default behavior
   - Event object properties
   - Touch events (mobile)
   - Custom events

6. **06_Async_Programming_Exercises.js** (13 exercises)
   - setTimeout & setInterval
   - Basic promises
   - Promise chaining
   - Promise.all
   - Promise.race
   - Async/await basics
   - Error handling with try/catch
   - Multiple awaits
   - Parallel requests
   - Fetch API
   - Timeout promise wrapper
   - Retry with exponential backoff
   - Debounce & throttle

7. **07_OOP_and_Advanced_Exercises.js** (12 exercises)
   - Constructor functions
   - ES6 classes
   - Class inheritance
   - Static methods & properties
   - Getters and setters
   - Private fields
   - Polymorphism
   - Composition
   - Singleton pattern
   - Factory pattern
   - Observer pattern
   - Prototypal inheritance

8. **08_ES6_Plus_Exercises.js** (12 exercises)
   - Template literals
   - Array destructuring
   - Object destructuring
   - Arrow functions
   - Default parameters
   - Rest & spread operators
   - For...of loop
   - Enhanced object literals
   - Promises & async/await
   - Optional chaining & nullish coalescing
   - ES6 classes
   - Module pattern

### Supporting Files
- **JavaScript_Concept.md** - Comprehensive reference guide (11,000+ words)
- **HTML Demo Files** - Interactive examples for each topic
  - 01_Introduction.html
  - 02_Objects_and_Arrays.html
  - 03_Functions_and_Scope.html
  - 04_DOM_Manipulation.html
  - 05_Events_and_Handlers.html
  - 06_Async_Programming.html
  - 07_OOP_and_Advanced.html
  - 08_ES6_Plus_Features.html

## How to Run Exercises

### Node.js (Terminal)
```bash
node 01_Introduction_Exercises.js
node 02_Objects_and_Arrays_Exercises.js
# etc...
```

### Browser Console
1. Open any HTML file in a browser
2. Press F12 or right-click → Inspect → Console
3. Copy and paste code from .js files into console
4. Or link the .js file in the HTML: `<script src="01_Introduction_Exercises.js"></script>`

### VS Code or Similar Editor
1. Open exercise file
2. Install Node.js extension if needed
3. Right-click → Run Code
4. Or use terminal: `node filename.js`

## Exercise Structure

Each exercise follows this pattern:

```javascript
// EXERCISE N: Exercise Title
console.log("=== EXERCISE N: Exercise Title ===");

// TODO: Task description
// SOLUTION:

// Your code here with explanations
console.log("Result:", result);

// -----------------------------------
```

## Learning Path

**Recommended order:**
1. Start with 01_Introduction for fundamentals
2. Move to 02_Objects_and_Arrays
3. Learn 03_Functions_and_Scope
4. If working with web: 04_DOM_Manipulation
5. If working with web: 05_Events_and_Handlers
6. Study 06_Async_Programming
7. Learn 07_OOP_and_Advanced
8. Master 08_ES6_Plus_Features

## Practice Tips

1. **Read the code**: Understand what each exercise does
2. **Try it yourself**: Cover the solution and attempt first
3. **Modify it**: Change values, test edge cases
4. **Combine concepts**: Mix multiple exercises together
5. **Create projects**: Build real apps using these patterns
6. **Debug**: Use console.log() and debugger statements
7. **Reference**: Check JavaScript_Concept.md for deeper understanding

## Key Concepts Covered

### Fundamentals
- Variables (let, const, var)
- Data types
- Operators
- Control flow
- Loops

### Data Structures
- Arrays and methods
- Objects and properties
- Collections (Map, Set)
- Destructuring

### Functions
- Declarations and expressions
- Arrow functions
- Parameters and arguments
- Scope and closures
- Higher-order functions

### Asynchronous
- Callbacks
- Promises
- Async/await
- Fetch API
- Timers

### Web APIs
- DOM manipulation
- Events
- EventListener
- Event delegation
- Touch events

### OOP
- Classes
- Inheritance
- Prototypes
- Encapsulation
- Design patterns

### Modern ES6+
- Template literals
- Destructuring
- Spread operator
- Optional chaining
- Nullish coalescing

## Common Patterns Used

1. **Closure Pattern** - Private variables
2. **Observer Pattern** - Event handling
3. **Singleton Pattern** - Single instance
4. **Factory Pattern** - Object creation
5. **Composition Pattern** - Combining objects
6. **Module Pattern** - Encapsulation
7. **Memoization** - Performance caching
8. **Debounce/Throttle** - Event optimization

## Testing Your Code

Add this to any exercise to verify:

```javascript
console.assert(condition, "Error message");
console.table(data);
console.group("Group name");
// ... code
console.groupEnd();
```

## Troubleshooting

**Problem**: Code doesn't run
- Check Node.js is installed: `node --version`
- Check file path is correct
- Look for syntax errors

**Problem**: Unexpected results
- Add console.log() statements
- Use debugger: `debugger;` statement
- Check variable types with typeof
- Review the concept in JavaScript_Concept.md

**Problem**: Async code seems synchronous
- Remember await pauses execution
- Promises don't block by default
- Use Promise.all() for parallel execution

## Resources

- **MDN Web Docs**: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **JavaScript.info**: https://javascript.info
- **Node.js Docs**: https://nodejs.org/docs
- **ES6 Features**: https://es6-features.org

## File Statistics

- **Total Exercises**: ~95
- **Total Lines of Code**: ~3,500+
- **Topics Covered**: 8 major topics
- **Difficulty**: Beginner to Advanced
- **Time to Complete**: 40-60 hours (comprehensive)

## Quick Start

1. Open `01_Introduction_Exercises.js`
2. Run it: `node 01_Introduction_Exercises.js`
3. Read the output
4. Understand each exercise
5. Try modifying the code
6. Move to next file

## Progress Checklist

- [ ] Introduction exercises (7.4 KB)
- [ ] Objects & Arrays exercises (8.9 KB)
- [ ] Functions & Scope exercises (11 KB)
- [ ] DOM Manipulation exercises (17 KB)
- [ ] Events & Handlers exercises (18 KB)
- [ ] Async Programming exercises (13 KB)
- [ ] OOP & Advanced exercises (13 KB)
- [ ] ES6+ Features exercises (13 KB)

---

**Total Package Size**: ~292 KB of comprehensive, practical JavaScript exercises with solutions!

Happy coding! 🚀
