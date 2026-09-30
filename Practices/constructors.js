"use strict";

class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    display() {
        console.log("Student ID:", this.id);
        console.log("Student Name:", this.name);
    }
}
let s1 = new Student(101, "puji");
s1.display();
// example 2 
class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    add() {
        console.log("Addition:", this.num1 + this.num2);
    }
    sub() {
        console.log("Subtraction:", this.num1 - this.num2);
    }
    multiply() {
        console.log("Multiplication:", this.num1 * this.num2);
    }
}
let c1 = new Calculator(20, 10);
c1.add();
c1.sub();
c1.multiply();
//example 3
class student {
    constructor(name, age, city = "Hyderabad") {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("City:", this.city);
    }
}
let s2 = new student("pujitha", 22);
s2.display();
