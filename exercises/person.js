// Exercise 1
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return `Hello ${this.firstName} ${this.lastName}.`
    }
}

let person1 = new Person("Ray", "Bell");
console.log(person1.getFullName());

// Exercise 2
class Employee extends Person {
    constructor(firstName, lastName, id, jobTitle, payRate) {
        super(firstName, lastName)

        this.id = id;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }

    getGrossPay(hoursWorked){
        return `Your gross pay equals ${hoursWorked * this.payRate}`;
    }
}

let employee1 = new Employee("Rayna", "Bell", 1, "Digital Artist", 56.38);
console.log(employee1.getFullName());

// Exercise 3
let employee2 = new Employee("Lucky", "Daye", 2, "Singer", 500.36);
console.log(employee2.getFullName());
console.log(employee2.getGrossPay(40));