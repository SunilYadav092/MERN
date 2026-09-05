// ======================================
// JavaScript Objects & Arrays Exercises
// ======================================

// EXERCISE 1: Create and Access Objects
console.log("=== EXERCISE 1: Objects Creation & Access ===");

// TODO: Create a student object and access its properties
// SOLUTION:
const student = {
    name: "John",
    age: 20,
    email: "john@example.com",
    gpa: 3.8,
    courses: ["Math", "Science", "English"]
};

console.log(`Student: ${student.name}`);
console.log(`Age: ${student.age}`);
console.log(`Email: ${student["email"]}`);
console.log(`Courses: ${student.courses.join(", ")}`);

// -----------------------------------

// EXERCISE 2: Array Methods
console.log("\n=== EXERCISE 2: Array Methods ===");

// TODO: Use array methods to transform and filter data
// SOLUTION:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Map: double each number
const doubled = numbers.map(n => n * 2);
console.log(`Original: [${numbers.join(", ")}]`);
console.log(`Doubled: [${doubled.join(", ")}]`);

// Filter: get only even numbers
const evens = numbers.filter(n => n % 2 === 0);
console.log(`Even numbers: [${evens.join(", ")}]`);

// Reduce: sum all numbers
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(`Sum: ${sum}`);

// -----------------------------------

// EXERCISE 3: Working with Objects in Arrays
console.log("\n=== EXERCISE 3: Objects in Arrays ===");

// TODO: Create an array of product objects and perform operations
// SOLUTION:
const products = [
    {id: 1, name: "Laptop", price: 1000},
    {id: 2, name: "Phone", price: 500},
    {id: 3, name: "Tablet", price: 300},
    {id: 4, name: "Monitor", price: 250}
];

// Get product names
const names = products.map(p => p.name);
console.log(`Product names: ${names.join(", ")}`);

// Get expensive products (price > 400)
const expensive = products.filter(p => p.price > 400);
console.log(`Expensive products:`);
expensive.forEach(p => console.log(`  ${p.name}: $${p.price}`));

// Calculate total value
const totalValue = products.reduce((sum, p) => sum + p.price, 0);
console.log(`Total inventory value: $${totalValue}`);

// -----------------------------------

// EXERCISE 4: Object Manipulation
console.log("\n=== EXERCISE 4: Object Manipulation ===");

// TODO: Add, update, and delete properties
// SOLUTION:
let person = {
    firstName: "Alice",
    lastName: "Smith",
    age: 30
};

console.log("Initial:", JSON.stringify(person));

// Add property
person.email = "alice@example.com";
console.log("After adding email:", JSON.stringify(person));

// Update property
person.age = 31;
console.log("After updating age:", JSON.stringify(person));

// Delete property
delete person.lastName;
console.log("After deleting lastName:", JSON.stringify(person));

// -----------------------------------

// EXERCISE 5: Object Methods (Object.keys, Object.values, Object.entries)
console.log("\n=== EXERCISE 5: Object Utility Methods ===");

// TODO: Use Object methods to analyze object structure
// SOLUTION:
const user = {
    username: "johndoe",
    email: "john@example.com",
    isActive: true,
    level: 5
};

console.log("User object:", user);
console.log(`Keys: ${Object.keys(user).join(", ")}`);
console.log(`Values: ${Object.values(user).join(", ")}`);
console.log("Entries:");
Object.entries(user).forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`);
});

// -----------------------------------

// EXERCISE 6: Destructuring Arrays
console.log("\n=== EXERCISE 6: Array Destructuring ===");

// TODO: Use destructuring to extract array elements
// SOLUTION:
const colors = ["red", "green", "blue", "yellow", "purple"];

// Get first three colors
const [first, second, third] = colors;
console.log(`First: ${first}, Second: ${second}, Third: ${third}`);

// Skip elements
const [primary, , secondary] = colors;
console.log(`Primary: ${primary}, Secondary: ${secondary}`);

// Rest operator
const [color1, color2, ...restColors] = colors;
console.log(`Main colors: ${color1}, ${color2}`);
console.log(`Rest: ${restColors.join(", ")}`);

// -----------------------------------

// EXERCISE 7: Destructuring Objects
console.log("\n=== EXERCISE 7: Object Destructuring ===");

// TODO: Extract properties from objects using destructuring
// SOLUTION:
const book = {
    title: "JavaScript Guide",
    author: "John Doe",
    year: 2023,
    pages: 400
};

// Basic destructuring
const {title, author} = book;
console.log(`Book: "${title}" by ${author}`);

// With renaming
const {title: bookTitle, year: publishYear} = book;
console.log(`"${bookTitle}" published in ${publishYear}`);

// With default values
const {genre = "Technology"} = book;
console.log(`Genre: ${genre}`);

// -----------------------------------

// EXERCISE 8: Array Searching
console.log("\n=== EXERCISE 8: Array Searching ===");

// TODO: Find elements in arrays using different methods
// SOLUTION:
const items = ["apple", "banana", "cherry", "date", "elderberry"];

// indexOf: find position
const bananaIndex = items.indexOf("banana");
console.log(`"banana" is at index: ${bananaIndex}`);

// includes: check if exists
console.log(`Array includes "cherry": ${items.includes("cherry")}`);
console.log(`Array includes "grape": ${items.includes("grape")}`);

// find: get first match
const foundItem = items.find(item => item.length > 5);
console.log(`First item with length > 5: ${foundItem}`);

// findIndex: get first match index
const foundIndex = items.findIndex(item => item.startsWith("d"));
console.log(`First item starting with 'd' at index: ${foundIndex}`);

// -----------------------------------

// EXERCISE 9: Merging Arrays and Objects
console.log("\n=== EXERCISE 9: Merging Arrays & Objects ===");

// TODO: Combine arrays and objects using spread operator
// SOLUTION:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(`Combined arrays: [${combined.join(", ")}]`);

const obj1 = {name: "John", age: 30};
const obj2 = {city: "NYC", country: "USA"};
const merged = {...obj1, ...obj2};
console.log("Merged objects:", JSON.stringify(merged));

// Override properties
const defaults = {theme: "light", fontSize: 14};
const userSettings = {theme: "dark"};
const settings = {...defaults, ...userSettings};
console.log("Merged settings:", JSON.stringify(settings));

// -----------------------------------

// EXERCISE 10: Sorting Arrays
console.log("\n=== EXERCISE 10: Sorting Arrays ===");

// TODO: Sort arrays of primitives and objects
// SOLUTION:
const nums = [5, 2, 8, 1, 9, 3];
const sortedAsc = [...nums].sort((a, b) => a - b);
const sortedDesc = [...nums].sort((a, b) => b - a);

console.log(`Original: [${nums.join(", ")}]`);
console.log(`Ascending: [${sortedAsc.join(", ")}]`);
console.log(`Descending: [${sortedDesc.join(", ")}]`);

// Sort objects by property
const employees = [
    {name: "Alice", salary: 50000},
    {name: "Bob", salary: 60000},
    {name: "Charlie", salary: 45000}
];

const sortedBySalary = [...employees].sort((a, b) => b.salary - a.salary);
console.log("\nEmployees sorted by salary (high to low):");
sortedBySalary.forEach(emp => {
    console.log(`  ${emp.name}: $${emp.salary}`);
});

// -----------------------------------

// EXERCISE 11: Array Transformations
console.log("\n=== EXERCISE 11: Array Transformations ===");

// TODO: Transform data using chained array methods
// SOLUTION:
const sales = [
    {product: "Laptop", amount: 1200},
    {product: "Phone", amount: 800},
    {product: "Tablet", amount: 300},
    {product: "Monitor", amount: 400}
];

// Get products with amount > 500, sorted by amount
const topProducts = sales
    .filter(s => s.amount > 500)
    .sort((a, b) => b.amount - a.amount)
    .map(s => `${s.product} ($${s.amount})`);

console.log("Top sales (> $500):");
topProducts.forEach(p => console.log(`  ${p}`));

// Calculate total of filtered items
const totalSales = sales
    .filter(s => s.amount >= 400)
    .reduce((sum, s) => sum + s.amount, 0);

console.log(`Total sales (>= $400): $${totalSales}`);

// -----------------------------------

// EXERCISE 12: Flatten and Chunk Arrays
console.log("\n=== EXERCISE 12: Flatten & Chunk Arrays ===");

// TODO: Flatten nested arrays and split into chunks
// SOLUTION:

// Flatten nested array
const nested = [1, [2, 3], [4, [5, 6]], 7];
const flattened = nested.flat(2); // Depth 2
console.log(`Nested: ${JSON.stringify(nested)}`);
console.log(`Flattened: [${flattened.join(", ")}]`);

// Chunk array into smaller arrays
function chunkArray(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunks = chunkArray(data, 3);
console.log(`\nOriginal: [${data.join(", ")}]`);
console.log("Chunked into groups of 3:");
chunks.forEach((chunk, i) => {
    console.log(`  Chunk ${i + 1}: [${chunk.join(", ")}]`);
});

// ======================================
// End of Objects & Arrays Exercises
// ======================================
