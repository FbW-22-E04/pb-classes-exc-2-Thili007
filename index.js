// Exercise 01

class Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.taxId = taxId;
    this.salary = salary + "€";
  }
  generatePaySlip() {
    console.log(
      `Employee ID : ${this.id} Name: ${this.firstName} ${this.lastName} Tax ID: ${this.taxId} Pay: ${this.salary}€`
    );
  }
}

const firstEmployee = new Employee(22, "John", "Clark", 223344, 4000);

// Exercise 02

class Manager extends Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    super(id, firstName, lastName, taxId, salary);
    this.managedEmployee = [];
  }
  addManagedEmployee(employee) {
    this.managedEmployee.push(employee);
  }
  removeManagedEmployee(employee) {
    this.managedEmployee = this.managedEmployee.filter(
      (item) => item.id !== employee.id
    );
  }
}

const secondEmployee = new Employee(44, "Michel", "Balack", 344553, 3000);

const thirdNewEmployee = new Employee(69, "David", "Beckham", 689993, 4500);

const manager1 = new Manager(78, "Aral", "Clark", 336758, 4000);

manager1.addManagedEmployee(firstEmployee);
console.log(manager1);
console.log(manager1);

manager1.addManagedEmployee(secondEmployee);

manager1.addManagedEmployee(thirdNewEmployee);
console.log(manager1);

console.log(manager1);

manager1.removeManagedEmployee(firstEmployee);
manager1.removeManagedEmployee(secondEmployee);
manager1.removeManagedEmployee(thirdNewEmployee);

console.log(manager1);
