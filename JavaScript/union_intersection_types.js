/* ============================================================
   Union Types and Intersection Types
   (JavaScript equivalent behavior - JS has no static type system,
   so these are shown as runtime patterns)
   ============================================================ */

// Union-like behavior - a value that could be one of several types
function printId(id) {
  if (typeof id === "string") {
    console.log("String ID: " + id.toUpperCase());
  } else if (typeof id === "number") {
    console.log("Number ID: " + id);
  }
}

printId(101);
printId("A101");


// Intersection-like behavior - merging multiple object shapes into one
const person = { name: "Ravi", age: 30 };
const employee = { empId: "E123", department: "Training" };

const staff = { ...person, ...employee };
console.log(staff);
// { name: 'Ravi', age: 30, empId: 'E123', department: 'Training' }


/* Equivalent TypeScript for reference:

type ID = string | number;              // Union
type Staff = Person & Employee;         // Intersection

*/
