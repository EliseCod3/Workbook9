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

    promote(newJobTitle, newPayRate) {
        this.jobTitle = newJobTitle;
        this.payRate = newPayRate;
    }

    getIntro(){
        return `Hi my name is ${this.firstName} ${this.lastName}, I'm a ${this.jobTitle}.`
    }
}

// let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.50);
    // console.log(`Employee ${employee1.firstName} created`);

let employee1 = new Employee (1, "Ian", "Auston", "Graphic Artist", 42.50);
    console.log(`Employee ${employee1.fullName()} created`);
    console.log(`Job title is ${employee1.jobTitle}`);
    console.log(`Pay rate is $${employee1.payRate}`);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

let employee2 = new Employee (2, "Ray", "Bell", "Software Developer", 63.93);
    console.log(`Employee ${employee2.fullName()} created`);
    console.log(`Job title is ${employee2.jobTitle}`);
    console.log(`Pay rate is $${employee2.payRate}`);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// Exercise 2
employee1.promote("Sr. Graphic Artist", 46.75);

    console.log(`Job title is ${employee1.jobTitle}`); 
    console.log(`Pay rate is $${employee1.payRate}`);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// Exercise 3
let intro = employee1.getIntro();
console.log(intro);