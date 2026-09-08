/* ============================================================
   OOP in JavaScript (equivalent to OOP in TypeScript, minus
   compile-time type checking)
   Demonstrates: Encapsulation, Inheritance, Polymorphism
   ============================================================ */

class Animal {
  constructor(name) {
    this.name = name; // encapsulated instance data
  }

  speak() {
    console.log(this.name + " makes a sound.");
  }
}

// Inheritance - Dog extends Animal
class Dog extends Animal {
  // Polymorphism - overrides the parent's speak() method
  speak() {
    console.log(this.name + " barks.");
  }
}

const generic = new Animal("Creature");
const dog = new Dog("Rex");

generic.speak(); // Creature makes a sound.
dog.speak();     // Rex barks.
