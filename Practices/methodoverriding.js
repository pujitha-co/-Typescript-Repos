"use strict";
class Animal {
    sound() {
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal {
    sound() {
        console.log("Dog barks");
    }
}
let d1 = new Dog();
d1.sound();
//example 2
class Employee {
    displayRole() {
        console.log("Employee works in the company");
    }
}
class Developer extends Employee {
    displayRole() {
        console.log("Developer writes code");
    }
}
let e1 = new Developer();
e1.displayRole();
// example 3
class Vehicle {
    start() {
        console.log("Vehicle is starting");
    }
}
class Car extends Vehicle {
    start() {
        console.log("Car is starting");
    }
}
let c1 = new Car();
c1.start();
// example 4
class BankAccount {
    calculateInterest() {
        console.log("Bank account interest");
    }
}
class SavingsAccount extends BankAccount {
    calculateInterest() {
        console.log("Savings account interest is 5%");
    }
}
let s1 = new SavingsAccount();
s1.calculateInterest();
///using super() method
class animal {
    sound() {
        console.log("Animal makes a sound");
    }
}
class dog extends Animal {
    sound() {
        super.sound();
        console.log("Dog barks");
    }
}
let D1 = new Dog();
D1.sound();
// constructor   +   methodoverriding
class employee {
    constructor(name) {
        this.name = name;
    }
    work() {
        console.log(this.name + " is working");
    }
}
class developer extends employee {
    work() {
        console.log(this.name + " is developing software");
    }
}
let E1 = new developer("Poojitha");
E1.work();
