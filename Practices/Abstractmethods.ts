export{}

abstract class Animal {

    abstract sound(): void;
}

class Dog extends Animal {

    sound(): void {
        console.log("Dog barks");
    }
}

let d1 = new Dog();

d1.sound();

// example 2

abstract class Vehicle {

    abstract start(): void;
}

class Car extends Vehicle {

    start(): void {
        console.log("Car starts with a key");
    }
}

class Bike extends Vehicle {

    start(): void {
        console.log("Bike starts with a self-start button");
    }
}

let c1 = new Car();
let b1 = new Bike();

c1.start();
b1.start();



// example  3

abstract class Employee {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    displayName(): void {
        console.log("Employee Name:", this.name);
    }

    abstract work(): void;
}

class Developer extends Employee {

    work(): void {
        console.log("Developer writes code");
    }
}

let D1 = new Developer("Ravi");

D1.displayName();
D1.work();