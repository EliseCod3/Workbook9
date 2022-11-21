class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
    this.employeeId = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

// let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.50);
    // console.log(`Employee ${employee1.firstName} created`);

let employee1 = new Employee (1, "Ian", "Auston", "Graphic Artist", 42.50);
    console.log(`Employee ${employee1.fullName()} created`);
    console.log(`Job title is ${employee1.jobTitle}`);
    console.log(`Pay rate is $${employee1.payRate}`);

let employee2 = new Employee (2, "Ray", "Bell", "Software Developer", 63.93);
console.log(`Employee ${employee2.fullName()} created`);
console.log(`Job title is ${employee2.jobTitle}`);
console.log(`Pay rate is $${employee2.payRate}`);
