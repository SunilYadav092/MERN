// ======================================
// JavaScript OOP & Advanced Concepts Exercises
// ======================================

// EXERCISE 1: Constructor Functions
console.log("=== EXERCISE 1: Constructor Functions ===");

// TODO: Create objects using constructor functions
// SOLUTION:

function Person(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
}

// Add method to prototype
Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

Person.prototype.getAge = function() {
    return `I'm ${this.age} years old`;
};

const person1 = new Person("Alice", 25, "alice@example.com");
const person2 = new Person("Bob", 30, "bob@example.com");

console.log(person1.greet());
console.log(person1.getAge());
console.log(person2.greet());

console.log("Person1 instanceof Person:", person1 instanceof Person);

// -----------------------------------

// EXERCISE 2: ES6 Classes
console.log("\n=== EXERCISE 2: ES6 Classes ===");

// TODO: Create classes with constructor and methods
// SOLUTION:

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    
    speak() {
        return `${this.name} makes a sound`;
    }
    
    getInfo() {
        return `${this.name} is a ${this.species}`;
    }
}

const dog = new Animal("Rex", "Dog");
const cat = new Animal("Whiskers", "Cat");

console.log(dog.speak());
console.log(dog.getInfo());
console.log(cat.speak());

// -----------------------------------

// EXERCISE 3: Inheritance
console.log("\n=== EXERCISE 3: Class Inheritance ===");

// TODO: Create child classes that extend parent class
// SOLUTION:

class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    
    describe() {
        return `${this.brand} ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(brand, model, doors) {
        super(brand, model);
        this.doors = doors;
    }
    
    describe() {
        return `${super.describe()} with ${this.doors} doors`;
    }
}

class Motorcycle extends Vehicle {
    constructor(brand, model, hasGear) {
        super(brand, model);
        this.hasGear = hasGear;
    }
    
    describe() {
        return `${super.describe()} (gear: ${this.hasGear ? 'yes' : 'no'})`;
    }
}

const car = new Car("Toyota", "Camry", 4);
const motorcycle = new Motorcycle("Honda", "CBR", true);

console.log(car.describe());
console.log(motorcycle.describe());

console.log("car instanceof Vehicle:", car instanceof Vehicle);
console.log("motorcycle instanceof Vehicle:", motorcycle instanceof Vehicle);

// -----------------------------------

// EXERCISE 4: Static Methods and Properties
console.log("\n=== EXERCISE 4: Static Methods & Properties ===");

// TODO: Create class-level methods and properties
// SOLUTION:

class MathUtils {
    static PI = 3.14159;
    static E = 2.71828;
    
    static add(a, b) {
        return a + b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
    
    static circleArea(radius) {
        return this.PI * radius * radius;
    }
    
    // Instance method (requires new instance)
    divide(a, b) {
        if (b === 0) return "Cannot divide by zero";
        return a / b;
    }
}

console.log("Static properties:");
console.log(`PI = ${MathUtils.PI}`);
console.log(`E = ${MathUtils.E}`);

console.log("\nStatic methods:");
console.log(`add(5, 3) = ${MathUtils.add(5, 3)}`);
console.log(`multiply(4, 7) = ${MathUtils.multiply(4, 7)}`);
console.log(`circleArea(5) = ${MathUtils.circleArea(5).toFixed(2)}`);

// Instance method requires instantiation
const math = new MathUtils();
console.log(`divide(10, 2) = ${math.divide(10, 2)}`);

// -----------------------------------

// EXERCISE 5: Getters and Setters
console.log("\n=== EXERCISE 5: Getters & Setters ===");

// TODO: Create property accessors
// SOLUTION:

class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    
    // Getter
    get width() {
        return this._width;
    }
    
    // Setter with validation
    set width(value) {
        if (value <= 0) {
            console.log("Width must be positive");
            return;
        }
        this._width = value;
    }
    
    get height() {
        return this._height;
    }
    
    set height(value) {
        if (value <= 0) {
            console.log("Height must be positive");
            return;
        }
        this._height = value;
    }
    
    get area() {
        return this._width * this._height;
    }
    
    get perimeter() {
        return 2 * (this._width + this._height);
    }
}

const rect = new Rectangle(10, 5);
console.log(`Rectangle: ${rect.width} x ${rect.height}`);
console.log(`Area: ${rect.area}`);
console.log(`Perimeter: ${rect.perimeter}`);

rect.width = 15;
console.log(`\nAfter width change to 15:`);
console.log(`Area: ${rect.area}`);

rect.width = -5;  // Validation prevents change

// -----------------------------------

// EXERCISE 6: Private Fields
console.log("\n=== EXERCISE 6: Private Fields ===");

// TODO: Create truly private properties
// SOLUTION:

class BankAccount {
    #balance = 0;  // Private field
    
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    
    deposit(amount) {
        if (amount <= 0) {
            return "Amount must be positive";
        }
        this.#balance += amount;
        return `Deposited $${amount}. New balance: $${this.#balance}`;
    }
    
    withdraw(amount) {
        if (amount <= 0) {
            return "Amount must be positive";
        }
        if (amount > this.#balance) {
            return "Insufficient funds";
        }
        this.#balance -= amount;
        return `Withdrew $${amount}. New balance: $${this.#balance}`;
    }
    
    getBalance() {
        return this.#balance;
    }
    
    // Private method
    #calculateInterest() {
        return this.#balance * 0.05;
    }
    
    applyInterest() {
        const interest = this.#calculateInterest();
        this.#balance += interest;
        return `Interest applied: $${interest.toFixed(2)}`;
    }
}

const account = new BankAccount(1000);
console.log(account.deposit(500));
console.log(account.withdraw(200));
console.log(account.applyInterest());
console.log(`Current balance: $${account.getBalance()}`);

// Try to access private field (will fail)
// console.log(account.#balance);  // Error!

// -----------------------------------

// EXERCISE 7: Polymorphism
console.log("\n=== EXERCISE 7: Polymorphism ===");

// TODO: Implement method overriding
// SOLUTION:

class Shape {
    area() {
        throw new Error("area() must be implemented");
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    
    area() {
        return this.side ** 2;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    
    area() {
        return Math.PI * this.radius ** 2;
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }
    
    area() {
        return (this.base * this.height) / 2;
    }
}

const shapes = [
    new Square(5),
    new Circle(3),
    new Triangle(4, 6)
];

console.log("Shape areas:");
shapes.forEach((shape, index) => {
    console.log(`Shape ${index + 1}: ${shape.area().toFixed(2)}`);
});

// -----------------------------------

// EXERCISE 8: Composition
console.log("\n=== EXERCISE 8: Composition over Inheritance ===");

// TODO: Use composition to combine functionality
// SOLUTION:

// Components
const canEat = {
    eat() {
        return `${this.name} is eating`;
    }
};

const canWalk = {
    walk() {
        return `${this.name} is walking`;
    }
};

const canFly = {
    fly() {
        return `${this.name} is flying`;
    }
};

// Create objects using composition
const dog = Object.assign(
    {name: "Dog"},
    canEat,
    canWalk
);

const bird = Object.assign(
    {name: "Bird"},
    canEat,
    canWalk,
    canFly
);

console.log(dog.eat());
console.log(dog.walk());

console.log(bird.eat());
console.log(bird.walk());
console.log(bird.fly());

// -----------------------------------

// EXERCISE 9: Design Pattern - Singleton
console.log("\n=== EXERCISE 9: Singleton Pattern ===");

// TODO: Ensure only one instance exists
// SOLUTION:

class Singleton {
    static instance = null;
    
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        
        this.data = [];
        Singleton.instance = this;
    }
    
    addData(item) {
        this.data.push(item);
    }
    
    getData() {
        return this.data;
    }
}

const singleton1 = new Singleton();
const singleton2 = new Singleton();

singleton1.addData("Item 1");
singleton2.addData("Item 2");

console.log("Are they the same instance?", singleton1 === singleton2);
console.log("Data:", singleton1.getData());

// -----------------------------------

// EXERCISE 10: Design Pattern - Factory
console.log("\n=== EXERCISE 10: Factory Pattern ===");

// TODO: Create objects without specifying exact classes
// SOLUTION:

class Dog {
    speak() {
        return "Woof!";
    }
}

class Cat {
    speak() {
        return "Meow!";
    }
}

class Bird {
    speak() {
        return "Tweet!";
    }
}

class AnimalFactory {
    static createAnimal(type) {
        switch(type.toLowerCase()) {
            case 'dog':
                return new Dog();
            case 'cat':
                return new Cat();
            case 'bird':
                return new Bird();
            default:
                throw new Error(`Unknown animal type: ${type}`);
        }
    }
}

const dog2 = AnimalFactory.createAnimal('dog');
const cat2 = AnimalFactory.createAnimal('cat');
const bird2 = AnimalFactory.createAnimal('bird');

console.log("Dog:", dog2.speak());
console.log("Cat:", cat2.speak());
console.log("Bird:", bird2.speak());

// -----------------------------------

// EXERCISE 11: Design Pattern - Observer
console.log("\n=== EXERCISE 11: Observer Pattern ===");

// TODO: Implement publish-subscribe pattern
// SOLUTION:

class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }
    
    emit(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(callback => {
                callback(data);
            });
        }
    }
    
    off(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(
                cb => cb !== callback
            );
        }
    }
}

const emitter = new EventEmitter();

// Subscribe to events
emitter.on('userLogin', (user) => {
    console.log(`User logged in: ${user.name}`);
});

emitter.on('userLogin', (user) => {
    console.log(`Welcome ${user.name}!`);
});

emitter.on('userLogout', (user) => {
    console.log(`User logged out: ${user.name}`);
});

// Emit events
emitter.emit('userLogin', {name: 'Alice'});
emitter.emit('userLogout', {name: 'Alice'});

// -----------------------------------

// EXERCISE 12: Prototypes and Prototype Chain
console.log("\n=== EXERCISE 12: Prototypal Inheritance ===");

// TODO: Understand prototype chain
// SOLUTION:

function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    return `${this.name} makes a sound`;
};

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

// Set up prototype chain
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add dog-specific method
Dog.prototype.bark = function() {
    return `${this.name} barks!`;
};

const myDog = new Dog("Rex", "Labrador");

console.log("Prototype chain test:");
console.log(myDog.speak());
console.log(myDog.bark());
console.log("myDog instanceof Dog:", myDog instanceof Dog);
console.log("myDog instanceof Animal:", myDog instanceof Animal);

// Check prototype chain
let obj = myDog;
console.log("\nPrototype chain:");
while (obj) {
    console.log(obj.constructor.name);
    obj = Object.getPrototypeOf(obj);
    if (obj === Object.prototype) break;
}

// ======================================
// End of OOP & Advanced Concepts Exercises
// ======================================
