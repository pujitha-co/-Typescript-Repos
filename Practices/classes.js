"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor() {
        this.id = 1234;
        this.name = "pujitha";
        this.age = 22;
    }
}
let student1 = new Student();
console.log(student1);
console.log(student1.id);
class students {
    constructor() {
        this.id = 2345;
        this.name = "pujith";
        this.age = 23;
    }
    display() {
        console.log(this.id);
        console.log(this.name);
        console.log(this.age);
    }
}
let student2 = new students();
student2.display();
class product {
    constructor() {
        this.productId = 234;
        this.productName = "mobile";
        this.price = 50000;
    }
}
let product1 = new product();
let product2 = new product();
console.log(product1);
console.log(product1.productId);
//////////
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    displayDetails() {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Price:", this.price);
    }
}
let laptop = new Product(101, "Laptop", 50000);
let mobile = new Product(102, "Mobile", 20000);
laptop.displayDetails();
mobile.displayDetails();
///calculator
class Calculator {
    add(a, b) {
        return a + b;
    }
    sub(a, b) {
        return a - b;
    }
    mul(a, b) {
        return a * b;
    }
}
let calculator = new Calculator();
console.log(calculator.add(20, 10));
console.log(calculator.sub(20, 10));
console.log(calculator.mul(20, 10));
