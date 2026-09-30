"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
}
class Dog extends Animal {
    sound() {
        console.log("Dog barks");
    }
}
let d1 = new Dog();
d1.sound();
// example 2
class Vehicle {
}
class Car extends Vehicle {
    start() {
        console.log("Car starts with a key");
    }
}
class Bike extends Vehicle {
    start() {
        console.log("Bike starts with a self-start button");
    }
}
let c1 = new Car();
let b1 = new Bike();
c1.start();
b1.start();
// example  3
class Employee {
    constructor(name) {
        this.name = name;
    }
    displayName() {
        console.log("Employee Name:", this.name);
    }
}
class Developer extends Employee {
    work() {
        console.log("Developer writes code");
    }
}
let D1 = new Developer("Ravi");
D1.displayName();
D1.work();
