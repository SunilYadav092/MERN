// ======================================
// JavaScript DOM Manipulation Exercises
// ======================================
// Note: These exercises assume running in a browser environment
// They include code examples that would work with DOM elements

// EXERCISE 1: DOM Selection
console.log("=== EXERCISE 1: DOM Selection ===");

/*
// TODO: Select DOM elements using different methods
// SOLUTION (HTML context):

// getElementById
const header = document.getElementById('header');

// querySelector (CSS selector)
const firstButton = document.querySelector('button');
const mainContent = document.querySelector('.main-content');
const inputField = document.querySelector('[type="text"]');

// querySelectorAll (returns NodeList)
const allButtons = document.querySelectorAll('button');
const allItems = document.querySelectorAll('.item');

// getElementsByClassName
const activeElements = document.getElementsByClassName('active');

// getElementsByTagName
const allParagraphs = document.getElementsByTagName('p');
*/

// Demonstration of selection patterns
console.log(`
Selection patterns:
- getElementById('id')           // Single element by ID
- querySelector('selector')      // First matching element
- querySelectorAll('selector')   // All matching elements (NodeList)
- getElementsByClassName('class') // Live HTMLCollection
- getElementsByTagName('tag')    // Live HTMLCollection
- getElementsByName('name')      // Elements with specific name attribute
`);

// -----------------------------------

// EXERCISE 2: Accessing Content
console.log("\n=== EXERCISE 2: Accessing & Changing Content ===");

/*
// TODO: Get and modify element content
// SOLUTION (HTML context):

const element = document.getElementById('content');

// Read content
const textContent = element.innerText;      // Text only
const htmlContent = element.innerHTML;      // HTML content
const allText = element.textContent;        // All text including hidden

// Modify content
element.innerText = "New text";
element.innerHTML = "<strong>New HTML</strong>";
element.textContent = "Plain text only";

// Add HTML safely (preventing XSS)
element.innerHTML = "<p>Safe content</p>";
// Avoid:
// element.innerHTML = userInput;  // Dangerous!
*/

console.log(`
Content access methods:
- element.innerText              // Visible text
- element.innerHTML              // HTML string
- element.textContent            // All text content

Content modification:
- element.innerText = "text"
- element.innerHTML = "<p>html</p>"
- element.textContent = "text"
`);

// -----------------------------------

// EXERCISE 3: Creating Elements
console.log("\n=== EXERCISE 3: Creating & Inserting Elements ===");

/*
// TODO: Create new DOM elements and add them to the page
// SOLUTION (HTML context):

// Create elements
const newDiv = document.createElement('div');
const newParagraph = document.createElement('p');
const textNode = document.createTextNode('Hello');

// Add content
newDiv.textContent = "I'm a new div";
newParagraph.innerHTML = "<strong>Paragraph content</strong>";

// Add to DOM
const container = document.getElementById('container');
container.appendChild(newDiv);              // Add to end
container.insertBefore(newParagraph, container.firstChild); // Add at start

// Add multiple elements
const fragment = document.createDocumentFragment();
for (let i = 0; i < 5; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i + 1}`;
    fragment.appendChild(li);
}
document.getElementById('list').appendChild(fragment);

// Remove elements
newDiv.remove();
container.removeChild(newDiv);
*/

console.log(`
Creating elements:
- document.createElement('tag')             // Create element
- document.createTextNode('text')           // Create text node
- document.createDocumentFragment()         // Create fragment (efficient)

Inserting elements:
- parent.appendChild(child)                 // Add to end
- parent.insertBefore(child, reference)    // Add before reference
- parent.replaceChild(newChild, oldChild)   // Replace element

Removing elements:
- element.remove()                          // Remove from DOM
- parent.removeChild(child)                 // Remove child
*/);

// -----------------------------------

// EXERCISE 4: Modifying Attributes
console.log("\n=== EXERCISE 4: Modifying Attributes ===");

/*
// TODO: Get and set element attributes
// SOLUTION (HTML context):

const image = document.querySelector('img');

// Get attributes
const src = image.getAttribute('src');
const alt = image.getAttribute('alt');
const dataId = image.getAttribute('data-id');

// Set attributes
image.setAttribute('src', 'new-image.jpg');
image.setAttribute('alt', 'New description');
image.setAttribute('data-id', '123');

// Direct property access (common attributes)
image.src = 'image.jpg';
image.alt = 'Description';
image.width = 300;

// Remove attributes
image.removeAttribute('alt');

// Check if attribute exists
if (image.hasAttribute('data-id')) {
    console.log('Has data-id');
}

// Dataset API (for data-* attributes)
console.log(image.dataset.id);              // Get data-id value
image.dataset.id = '456';                   // Set data-id value
*/

console.log(`
Attribute methods:
- element.getAttribute('attr')              // Get attribute value
- element.setAttribute('attr', 'value')     // Set attribute value
- element.removeAttribute('attr')           // Remove attribute
- element.hasAttribute('attr')              // Check existence
- element.dataset.propertyName              // Access data-* attributes

Direct properties (common):
- element.id                                // id attribute
- element.src, element.href                 // src, href
- element.className                         // class attribute
- element.style                             // inline styles
*/);

// -----------------------------------

// EXERCISE 5: Working with Classes
console.log("\n=== EXERCISE 5: CSS Class Manipulation ===");

/*
// TODO: Add, remove, toggle CSS classes
// SOLUTION (HTML context):

const element = document.querySelector('.box');

// Add class
element.classList.add('active');

// Remove class
element.classList.remove('highlight');

// Toggle class (add if not present, remove if present)
element.classList.toggle('selected');

// Check if has class
if (element.classList.contains('active')) {
    console.log('Element is active');
}

// Add/remove multiple classes
element.classList.add('class1', 'class2');
element.classList.remove('class3', 'class4');

// Replace class
element.classList.replace('oldClass', 'newClass');

// Access all classes
console.log(element.classList);
for (let cls of element.classList) {
    console.log(cls);
}

// Old way (avoid)
element.className = 'active highlight';    // Replaces all classes
element.className += ' new-class';          // Adds class (fragile)
*/

console.log(`
Class manipulation:
- element.classList.add('class')            // Add class
- element.classList.remove('class')         // Remove class
- element.classList.toggle('class')         // Add/remove toggle
- element.classList.contains('class')       // Check if has class
- element.classList.replace('old', 'new')   // Replace class
`);

// -----------------------------------

// EXERCISE 6: Style Manipulation
console.log("\n=== EXERCISE 6: Inline Style Manipulation ===");

/*
// TODO: Modify inline styles via JavaScript
// SOLUTION (HTML context):

const element = document.querySelector('.styled');

// Set individual styles
element.style.color = 'blue';
element.style.backgroundColor = '#f0f0f0';
element.style.fontSize = '18px';
element.style.padding = '10px 20px';
element.style.border = '1px solid black';

// Read styles (inline only)
console.log(element.style.color);

// Get computed styles (includes CSS rules)
const computed = window.getComputedStyle(element);
console.log(computed.backgroundColor);

// Remove inline style
element.style.color = '';

// Set multiple styles at once (cssText)
element.style.cssText = 'color: red; font-size: 20px; margin: 10px;';

// Clear all inline styles
element.style.cssText = '';
*/

console.log(`
Style modification:
- element.style.property = 'value'          // Set style
- element.style.backgroundColor = 'red'     // Camel case property names
- element.style.cssText = 'css string'      // Set multiple styles
- getComputedStyle(element).property        // Read computed styles

Note: Property names use camelCase in JavaScript
(CSS 'background-color' becomes 'backgroundColor')
`);

// -----------------------------------

// EXERCISE 7: DOM Traversal
console.log("\n=== EXERCISE 7: DOM Traversal ===");

/*
// TODO: Navigate through DOM tree
// SOLUTION (HTML context):

const element = document.querySelector('.target');

// Parent navigation
const parent = element.parentElement;        // Direct parent
const grandparent = element.parentElement.parentElement;

// Children navigation
const children = element.children;           // HTMLCollection of child elements
const firstChild = element.firstElementChild;
const lastChild = element.lastElementChild;

// Sibling navigation
const nextSibling = element.nextElementSibling;
const prevSibling = element.previousElementSibling;

// Get all descendants
const descendants = element.querySelectorAll('*');

// Traverse up to find matching parent
function findParent(element, selector) {
    let current = element;
    while (current) {
        if (current.matches(selector)) {
            return current;
        }
        current = current.parentElement;
    }
    return null;
}

const closestForm = findParent(element, 'form');
*/

console.log(`
DOM Traversal:
Parent:
- element.parentElement                     // Direct parent
- element.parentNode                        // Parent node

Children:
- element.children                          // HTMLCollection of children
- element.childNodes                        // All child nodes (including text)
- element.firstElementChild                 // First child element
- element.lastElementChild                  // Last child element

Siblings:
- element.nextElementSibling                // Next sibling element
- element.previousElementSibling            // Previous sibling element
- element.nextSibling                       // Next sibling (any type)
- element.previousSibling                   // Previous sibling (any type)

Searching:
- element.closest('selector')               // Closest ancestor matching
- element.matches('selector')               // Check if matches selector
`);

// -----------------------------------

// EXERCISE 8: Event Listeners
console.log("\n=== EXERCISE 8: Event Listeners ===");

/*
// TODO: Add event listeners to elements
// SOLUTION (HTML context):

const button = document.querySelector('button');
const input = document.querySelector('input');

// Add event listener
button.addEventListener('click', (event) => {
    console.log('Button clicked!');
});

// Input event
input.addEventListener('input', (event) => {
    console.log('Input value:', event.target.value);
});

// Form submission
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();  // Stop form submission
    console.log('Form submitted');
});

// Multiple events
const handlers = {
    mouseEnter: () => console.log('Mouse entered'),
    mouseLeave: () => console.log('Mouse left')
};

const box = document.querySelector('.box');
box.addEventListener('mouseenter', handlers.mouseEnter);
box.addEventListener('mouseleave', handlers.mouseLeave);

// Remove event listener
box.removeEventListener('mouseenter', handlers.mouseEnter);

// One-time event
button.addEventListener('click', () => {
    console.log('This runs only once');
}, {once: true});

// Event delegation
const list = document.querySelector('ul');
list.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        console.log('Item clicked:', event.target.textContent);
    }
});
*/

console.log(`
Event Listeners:
- element.addEventListener('event', callback)
- element.removeEventListener('event', callback)
- event.preventDefault()                    // Stop default behavior
- event.stopPropagation()                   // Stop event bubbling
- event.target                              // Element that triggered event

Common events:
click, dblclick, mousedown, mouseup
mouseover, mouseout, mouseenter, mouseleave
focus, blur, change, input, submit, keydown, keyup
`);

// -----------------------------------

// EXERCISE 9: Practical Example - Todo List
console.log("\n=== EXERCISE 9: Practical Example - Todo List ===");

/*
// TODO: Build a simple todo list with DOM manipulation
// SOLUTION (would work with HTML):

class TodoList {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.todos = [];
        this.init();
    }
    
    init() {
        const form = this.container.querySelector('form');
        const input = this.container.querySelector('input');
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.addTodo(input.value);
            input.value = '';
        });
    }
    
    addTodo(text) {
        const todo = {id: Date.now(), text, completed: false};
        this.todos.push(todo);
        this.render();
    }
    
    removeTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        this.render();
    }
    
    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) todo.completed = !todo.completed;
        this.render();
    }
    
    render() {
        const list = this.container.querySelector('ul');
        list.innerHTML = '';
        
        this.todos.forEach(todo => {
            const li = document.createElement('li');
            li.className = todo.completed ? 'completed' : '';
            li.innerHTML = `
                <input type="checkbox" ${todo.completed ? 'checked' : ''}>
                <span>${todo.text}</span>
                <button>Delete</button>
            `;
            
            li.querySelector('input').addEventListener('change', () => {
                this.toggleTodo(todo.id);
            });
            
            li.querySelector('button').addEventListener('click', () => {
                this.removeTodo(todo.id);
            });
            
            list.appendChild(li);
        });
    }
}

// Usage:
// const todoList = new TodoList('app');
*/

console.log(`
Practical Example Structure:
- Create class for managing DOM interactions
- Use event listeners for user input
- Manipulate DOM based on state changes
- Keep HTML structure separate from logic
`);

// -----------------------------------

// EXERCISE 10: Performance Tips
console.log("\n=== EXERCISE 10: DOM Performance Tips ===");

/*
// TODO: Efficient DOM manipulation techniques
// SOLUTION:

// 1. Cache DOM references
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', handler));

// 2. Batch DOM updates
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    div.textContent = `Item ${i}`;
    fragment.appendChild(div);
}
document.body.appendChild(fragment);  // Single update

// 3. Use event delegation
const container = document.querySelector('.items');
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('item')) {
        handleItemClick(e.target);
    }
});

// 4. Read DOM once
const width = element.offsetWidth;     // Read once
element.style.width = (width + 10) + 'px';

// Not this (read/write thrashing):
element.style.width = (element.offsetWidth + 10) + 'px';  // Avoid!
element.style.height = (element.offsetHeight + 10) + 'px'; // Avoid!

// 5. Use classList instead of className
element.classList.add('active');  // Better
element.className += ' active';   // Less efficient

// 6. Minimize reflows/repaints
// Bad: Multiple reflows
for (let i = 0; i < 100; i++) {
    element.style.width = (i * 10) + 'px';  // Reflow each time
}

// Good: Single reflow
element.style.width = '1000px';

// 7. Use requestAnimationFrame for animations
function animate() {
    element.style.transform = 'translateX(' + position + 'px)';
    position += 1;
    
    if (position < 100) {
        requestAnimationFrame(animate);
    }
}
animate();
*/

console.log(`
DOM Performance Best Practices:
1. Cache DOM queries
2. Use DocumentFragment for multiple elements
3. Use event delegation
4. Minimize read/write thrashing
5. Use classList for class manipulation
6. Batch style changes
7. Use requestAnimationFrame for animations
8. Remove unused event listeners
9. Lazy load elements
10. Debounce frequent operations
`);

// ======================================
// End of DOM Manipulation Exercises
// ======================================
