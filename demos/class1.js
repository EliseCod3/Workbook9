let person1 = {
    first: 'Ray',
    last: 'Bell',
    email: 'nottoday@gmail.com'

}
console.log(person1);

let person2 = {
    first: 'Ari',
    last: 'Black',
    email: 'blackisback@gmail.com'

}

console.log(person2);

class Person {
    // first;
    // last;
    // email;

    constructor(first, last, email) {
        this.first = first;
        this.last = last;
        this.email = email;
    }

    getFullName(){
        return `${this.first} ${this.last}`;
    }

    getIntroduction(){
        return `Hi my name is ${this.first} ${this.last}. You can contact me at: ${this.email}.`;
    }

}

// let person3 = new Person();
// person3.first = "Rayna";
// person3.last = "Bell";
// person3.email = "eliseraynehasawsomesauce@gmail.com"

let person3 = new Person('Rayna', 'Bell', 'ringmybell@gmail.com')

console.log(person3);
console.log(person3.getIntroduction());

let person4 = new Person('Jarel', 'Wright', 'idontwattodoit@gmail.com');
console.log(person4);
console.log(person4.getIntroduction());


