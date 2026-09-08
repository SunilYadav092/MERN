/* ============================================================
   Class, Class Properties, and Static Properties
   ============================================================ */

class Employee {
  // Instance property (class field) - each object gets its own copy
  department = "General";

  // Static property - shared across all instances, belongs to the class itself
  static companyName = "Ethnus";

  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  showDetails() {
    console.log(this.name + " (" + this.id + ") - " + this.department);
  }

  // Static method - called on the class, not on an instance
  static getCompanyName() {
    return Employee.companyName;
  }
}

const emp1 = new Employee("Anita", "E001");
const emp2 = new Employee("Kiran", "E002");

emp1.showDetails(); // Anita (E001) - General
emp2.showDetails(); // Kiran (E002) - General

console.log(Employee.getCompanyName()); // Ethnus
console.log(Employee.companyName);      // Ethnus
