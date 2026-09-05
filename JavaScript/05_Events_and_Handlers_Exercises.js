// ======================================
// JavaScript Events & Handlers Exercises
// ======================================

// EXERCISE 1: Click Events
console.log("=== EXERCISE 1: Click Events ===");

/*
// TODO: Handle different types of click events
// SOLUTION (HTML context):

let clickCount = 0;

const button = document.querySelector('button');

// Single click
button.addEventListener('click', (event) => {
    clickCount++;
    console.log(`Clicked ${clickCount} times`);
});

// Double click
button.addEventListener('dblclick', () => {
    clickCount = 0;
    console.log('Clicked doubled! Count reset.');
});

// Right click (context menu)
button.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    console.log('Right-clicked!');
});

// Mouse button tracking
document.addEventListener('mousedown', (event) => {
    if (event.button === 0) console.log('Left button');
    if (event.button === 1) console.log('Middle button');
    if (event.button === 2) console.log('Right button');
});
*/

console.log(`
Click Events:
- click               // Single click
- dblclick           // Double click
- mousedown          // Mouse button pressed
- mouseup            // Mouse button released
- contextmenu        // Right-click

Event Properties:
- event.button       // 0=left, 1=middle, 2=right
- event.clickCount   // Number of clicks
- event.clientX/Y    // Mouse position
`);

// -----------------------------------

// EXERCISE 2: Keyboard Events
console.log("\n=== EXERCISE 2: Keyboard Events ===");

/*
// TODO: Handle keyboard input and key detection
// SOLUTION (HTML context):

const input = document.querySelector('input');

// Key down event
input.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key} (Code: ${event.code})`);
    
    // Detect specific keys
    if (event.key === 'Enter') {
        console.log('Enter pressed!');
    }
    
    // Detect key combinations
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        console.log('Save shortcut triggered');
    }
});

// Key up event
input.addEventListener('keyup', (event) => {
    console.log(`Key released: ${event.key}`);
});

// Input event (fires when value changes)
input.addEventListener('input', (event) => {
    console.log(`Input value: ${event.target.value}`);
});

// Track key state
const keys = {};

document.addEventListener('keydown', (e) => {
    keys[e.key] = true;
});

document.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

// Check if multiple keys pressed
if (keys['w'] && keys['a']) {
    console.log('Moving up-left');
}
*/

console.log(`
Keyboard Events:
- keydown            // Key pressed down
- keyup              // Key released
- keypress           // Character typed (deprecated)
- input              // Input value changed

Event Properties:
- event.key          // Character key pressed
- event.code         // Physical key code
- event.ctrlKey      // Ctrl held down
- event.shiftKey     // Shift held down
- event.altKey       // Alt held down
- event.metaKey      // Meta/Command key
`);

// -----------------------------------

// EXERCISE 3: Form Events
console.log("\n=== EXERCISE 3: Form Events ===");

/*
// TODO: Handle form submission and input changes
// SOLUTION (HTML context):

const form = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');
const selectField = document.querySelector('select');
const checkbox = document.querySelector('input[type="checkbox"]');

// Form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();  // Prevent default form submission
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    console.log('Form submitted:', data);
    // Send to server here
});

// Email input change
emailInput.addEventListener('change', (event) => {
    console.log(`Email changed to: ${event.target.value}`);
});

// Focus and blur
emailInput.addEventListener('focus', () => {
    console.log('Email input focused');
});

emailInput.addEventListener('blur', () => {
    console.log('Email input blurred');
    // Validate here
});

// Select dropdown change
selectField.addEventListener('change', (event) => {
    console.log(`Selected: ${event.target.value}`);
});

// Checkbox change
checkbox.addEventListener('change', (event) => {
    console.log(`Checkbox ${event.target.checked ? 'checked' : 'unchecked'}`);
});

// Real-time input validation
emailInput.addEventListener('input', (event) => {
    const isValid = event.target.value.includes('@');
    event.target.classList.toggle('invalid', !isValid);
});
*/

console.log(`
Form Events:
- submit             // Form submitted
- change             // Value changed (on blur)
- input              // Real-time input change
- focus              // Element focused
- blur               // Element lost focus
- reset              // Form reset

FormData API:
- new FormData(form) // Collect form data
- Object.fromEntries(formData) // Convert to object
`);

// -----------------------------------

// EXERCISE 4: Mouse Events
console.log("\n=== EXERCISE 4: Mouse Events ===");

/*
// TODO: Track mouse movement and position
// SOLUTION (HTML context):

const box = document.querySelector('.box');

// Mouse enter (no bubbling)
box.addEventListener('mouseenter', (event) => {
    console.log('Mouse entered box');
    box.style.backgroundColor = 'blue';
});

// Mouse leave (no bubbling)
box.addEventListener('mouseleave', (event) => {
    console.log('Mouse left box');
    box.style.backgroundColor = 'red';
});

// Mouse move (updates frequently)
box.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    console.log(`Mouse at: (${x}, ${y})`);
    
    // Show coordinates
    box.textContent = `X: ${x}, Y: ${y}`;
});

// Mouse over (bubbles)
box.addEventListener('mouseover', () => {
    console.log('Mouse over');
});

// Mouse out (bubbles)
box.addEventListener('mouseout', () => {
    console.log('Mouse out');
});

// Get position relative to element
box.addEventListener('mousemove', (event) => {
    const rect = box.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log(`Position in box: (${x}, ${y})`);
});

// Debounce frequent events
let debounceTimer;
box.addEventListener('mousemove', (event) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        console.log('Mouse moved:', event.clientX);
    }, 100);
});
*/

console.log(`
Mouse Events:
- mouseenter         // Mouse entered (no bubbling)
- mouseleave         // Mouse left (no bubbling)
- mouseover          // Mouse over (bubbles)
- mouseout           // Mouse out (bubbles)
- mousemove          // Mouse moving
- mousedown          // Button pressed
- mouseup            // Button released

Position Properties:
- event.clientX/Y    // Position relative to viewport
- event.pageX/Y      // Position relative to page
- event.offsetX/Y    // Position relative to element
- element.getBoundingClientRect() // Element position & size
`);

// -----------------------------------

// EXERCISE 5: Event Delegation
console.log("\n=== EXERCISE 5: Event Delegation ===");

/*
// TODO: Use event delegation for efficient event handling
// SOLUTION (HTML context):

const list = document.querySelector('ul');
const items = list.querySelectorAll('li');

// Inefficient: Add listener to each item
// items.forEach(item => {
//     item.addEventListener('click', handler);
// });

// Efficient: Single listener on container
list.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        console.log('Item clicked:', event.target.textContent);
        event.target.classList.toggle('selected');
    }
    
    // Handle delete button in item
    if (event.target.classList.contains('delete-btn')) {
        event.target.closest('li').remove();
    }
});

// Check which specific element triggered event
list.addEventListener('click', (event) => {
    if (event.target.matches('.item-link')) {
        event.preventDefault();
        console.log('Link clicked:', event.target.href);
    }
});

// Add dynamic items - they automatically have listeners!
const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = 'New item';
    list.appendChild(newItem);
    // No need to add event listener - delegation handles it!
});
*/

console.log(`
Event Delegation Pattern:
1. Add single listener to parent
2. Check event.target for specific elements
3. Dynamically added elements automatically handled
4. More efficient than individual listeners
5. Reduces memory usage
6. Better performance for large lists

Useful Methods:
- event.target.matches('selector')  // Check if target matches
- event.target.closest('selector')  // Find closest ancestor
- event.target.classList            // Manipulate classes
`);

// -----------------------------------

// EXERCISE 6: Event Bubbling and Capturing
console.log("\n=== EXERCISE 6: Event Bubbling & Capturing ===");

/*
// TODO: Understand and control event propagation
// SOLUTION (HTML context):

const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// Bubbling (default - bottom-up)
child.addEventListener('click', (event) => {
    console.log('Child clicked (bubbling)');
});

parent.addEventListener('click', (event) => {
    console.log('Parent clicked (bubbling)');
});

// Capturing (top-down)
parent.addEventListener('click', (event) => {
    console.log('Parent clicked (capturing)');
}, true);  // true = capturing phase

// Stop propagation (prevent bubbling)
child.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('Child clicked (no bubbling)');
});

// Stop all listeners
child.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    console.log('First listener');
});

child.addEventListener('click', (event) => {
    console.log('Second listener (will not fire)');
});
*/

console.log(`
Event Propagation:
1. Capturing Phase (top-down)
2. Target Phase (event.target)
3. Bubbling Phase (bottom-up, default)

Control Propagation:
- event.stopPropagation()           // Stop bubbling
- event.stopImmediatePropagation()  // Stop all listeners
- event.preventDefault()            // Stop default behavior

Listener Options:
- element.addEventListener(type, handler, {
    capture: false,      // Capturing phase
    once: false,         // Remove after one trigger
    passive: false       // Can prevent default
  })
`);

// -----------------------------------

// EXERCISE 7: Preventing Default Behavior
console.log("\n=== EXERCISE 7: Preventing Default Behavior ===");

/*
// TODO: Use preventDefault() to stop default actions
// SOLUTION (HTML context):

// Prevent form submission
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Handle submission manually
    console.log('Form submission prevented');
});

// Prevent link navigation
const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Link navigation prevented');
    // Handle manually if needed
});

// Prevent context menu
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    console.log('Context menu prevented');
});

// Prevent default key behavior
document.addEventListener('keydown', (event) => {
    if (event.key === 'F12') {
        event.preventDefault();
        console.log('Developer tools prevented');
    }
});

// Check if prevented
document.addEventListener('submit', (event) => {
    if (event.defaultPrevented) {
        console.log('Default was prevented');
    }
});
*/

console.log(`
preventDefault() Methods:
- event.preventDefault()             // Cancel default action
- event.defaultPrevented             // Check if prevented

Common Uses:
- Form submission (validate manually)
- Link navigation (single-page apps)
- Context menu (custom menus)
- Keyboard shortcuts (F12, Ctrl+S)
`);

// -----------------------------------

// EXERCISE 8: Event Object Properties
console.log("\n=== EXERCISE 8: Event Object Properties ===");

/*
// TODO: Explore useful event properties
// SOLUTION (HTML context):

document.addEventListener('click', (event) => {
    console.log('Event Properties:');
    console.log('- type:', event.type);              // 'click'
    console.log('- target:', event.target);          // Element clicked
    console.log('- currentTarget:', event.currentTarget); // Element with listener
    console.log('- timeStamp:', event.timeStamp);    // When occurred
    console.log('- isTrusted:', event.isTrusted);    // User-triggered?
    console.log('- clientX/Y:', event.clientX, event.clientY); // Position
    console.log('- screenX/Y:', event.screenX, event.screenY); // Screen position
    console.log('- pageX/Y:', event.pageX, event.pageY);       // Page position
    console.log('- offsetX/Y:', event.offsetX, event.offsetY); // Relative to target
    console.log('- key:', event.key);                // Key pressed
    console.log('- code:', event.code);              // Physical key
    console.log('- ctrlKey:', event.ctrlKey);        // Modifier keys
    console.log('- shiftKey:', event.shiftKey);
    console.log('- altKey:', event.altKey);
    console.log('- metaKey:', event.metaKey);
    console.log('- button:', event.button);          // Mouse button
});
*/

console.log(`
Common Event Properties:
- event.type          // Event type ('click', 'submit', etc.)
- event.target        // Element that triggered event
- event.currentTarget // Element with listener
- event.timeStamp     // When event occurred
- event.isTrusted     // Was user-triggered?

Position (Mouse):
- event.clientX/Y     // Relative to viewport
- event.pageX/Y       // Relative to page
- event.screenX/Y     // Relative to screen
- event.offsetX/Y     // Relative to target element

Keyboard:
- event.key           // Character pressed
- event.code          // Physical key code
- event.ctrlKey/shiftKey/altKey/metaKey  // Modifiers

Mouse:
- event.button        // 0=left, 1=middle, 2=right
- event.buttons       // Multiple buttons pressed (bitmask)
`);

// -----------------------------------

// EXERCISE 9: Touch Events
console.log("\n=== EXERCISE 9: Touch Events (Mobile) ===");

/*
// TODO: Handle touch events for mobile devices
// SOLUTION (HTML context):

const element = document.querySelector('.touch-area');

// Touch start
element.addEventListener('touchstart', (event) => {
    const touch = event.touches[0];  // First finger
    console.log(`Touch started at: (${touch.clientX}, ${touch.clientY})`);
});

// Touch move
element.addEventListener('touchmove', (event) => {
    event.preventDefault();  // Prevent scrolling
    const touch = event.touches[0];
    console.log(`Dragging: (${touch.clientX}, ${touch.clientY})`);
});

// Touch end
element.addEventListener('touchend', (event) => {
    console.log(`Touch ended`);
});

// Multi-touch detection
element.addEventListener('touchstart', (event) => {
    if (event.touches.length > 1) {
        console.log('Multi-touch detected!');
    }
});

// Get all touching fingers
element.addEventListener('touchmove', (event) => {
    Array.from(event.touches).forEach((touch, index) => {
        console.log(`Finger ${index}: (${touch.clientX}, ${touch.clientY})`);
    });
});
*/

console.log(`
Touch Events:
- touchstart          // Finger down
- touchmove           // Finger moving
- touchend            // Finger up
- touchcancel         // Touch cancelled

Touch Properties:
- event.touches       // All active touches
- event.targetTouches // Touches on target element
- event.changedTouches // Touches that changed

Single Touch:
- touch.clientX/Y     // Position
- touch.identifier    // Unique ID
- touch.target        // Element touched
`);

// -----------------------------------

// EXERCISE 10: Custom Events
console.log("\n=== EXERCISE 10: Custom Events ===");

/*
// TODO: Create and dispatch custom events
// SOLUTION (HTML context):

// Create custom event
const customEvent = new CustomEvent('userAction', {
    detail: {action: 'login', timestamp: Date.now()}
});

// Create with options
const detailedEvent = new CustomEvent('dataLoaded', {
    bubbles: true,
    cancelable: true,
    detail: {data: [1, 2, 3]}
});

// Dispatch event
document.dispatchEvent(customEvent);

// Listen for custom event
document.addEventListener('userAction', (event) => {
    console.log('Custom event triggered:', event.detail);
});

// Example: Data loader
class DataLoader {
    async load(url) {
        const response = await fetch(url);
        const data = await response.json();
        
        // Dispatch custom event
        this.dispatchEvent('dataReady', data);
    }
    
    dispatchEvent(eventName, data) {
        const event = new CustomEvent(eventName, {detail: data});
        document.dispatchEvent(event);
    }
}

// Usage
const loader = new DataLoader();
document.addEventListener('dataReady', (event) => {
    console.log('Data loaded:', event.detail);
});
*/

console.log(`
Custom Events:
new CustomEvent(type, {
    bubbles: true,
    cancelable: true,
    detail: any  // Custom data
})

Dispatching:
- element.dispatchEvent(event)

Listening:
- element.addEventListener(eventName, handler)

Use Cases:
- Application state changes
- Completion of async operations
- Component communication
- Plugin systems
`);

// ======================================
// End of Events & Handlers Exercises
// ======================================
