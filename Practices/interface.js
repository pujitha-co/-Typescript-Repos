"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Student = {
    id: 234,
    name: "pujitha",
    age: 22,
};
console.log(Student);
let Student1 = {
    id: 234,
    name: "pujitha",
};
console.log(Student1);
let Student2 = {
    id: 234,
    name: "pujitha",
    age: 22
};
console.log(Student2);
console.log(Student1);
function Productdetails(product) {
    console.log(product.id);
    console.log(product.name);
    console.log(product.price);
}
Productdetails({
    id: 678,
    name: "mobile",
    price: 20000
});
Productdetails({
    id: 5788,
    name: "laptop",
    price: 50000
});
console.log(Productdetails);
let User = {
    name: "pujitha",
    age: 22,
    address: {
        city: "hyderabad",
        state: "telangana"
    }
};
console.log(User);
let Student3 = {
    id: 234,
    name: "pujitha",
    marks: 90
};
console.log(Student3);
let Products = {
    id: 234,
    name: "mobile",
    price: 20000
};
let Products1 = {
    id: 345,
    name: "laptop",
    price: 50000
};
console.log(Products);
console.log(Products1);
