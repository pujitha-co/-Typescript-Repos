export{}

type strName=string;

let studentName1:strName= "pujith";
let studentNmae2:strName="pujitha";

console.log(studentName1);
console.log(studentNmae2);


type numericals=number;

let age:numericals=23;
let pincode:numericals=500081;

console.log(age);
console.log(pincode);


type Student={
    id:number;
    name:string;
    age:number;
}

let student:Student={
    id:2345,
    name:"pujith",
    age:23,

}

console.log(student);


type product={
    productId:number;
    productName:string;
    price:number;
}

let product1:product={
    productId:234,
    productName:"mobile",
    price:50000,
}

let product2:product={
    productId:345,
    productName:"laptop",
    price:80000,
}
console.log(product1);
console.log(product2);

type ID=number | string;
let id1:ID=1234;
let id2:ID="EMP1234";

console.log(id1);
console.log(id2);

