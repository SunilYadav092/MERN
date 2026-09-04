// Simple Object
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

// Handler with get trap
const handler = {
  get(target, property) {
    console.log(`Reading property: ${property}`);
    return target[property];
  },
  
  set(target, property, value) {
    console.log(`Setting ${property} to ${value}`);
    target[property] = value;
  }
};

// Create Proxy
const proxyPerson = new Proxy(person, handler);

// Using proxy
console.log(proxyPerson.firstName); 
// Output: Reading property: firstName
//         John

proxyPerson.age = 30;
// Output: Setting age to 30