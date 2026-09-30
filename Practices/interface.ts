
export{}

interface student {
    id: number;
    name: string;
    age: number;
}

let Student:student={
    id:234,
    name:"pujitha",
    age:22,
}
console.log(Student);


//optional properties


interface student1{
    id: number;
    name: string;
    age?: number; //optional property
}

let Student1:student1={
    id:234,
    name:"pujitha",
}
console.log(Student1);

let Student2:student1={
    id:234,
    name:"pujitha",
    age:22
}
console.log(Student2);
console.log(Student1); 


//interface with function type



interface product{
    id: number;
    name: string;
    price: number;
}


function Productdetails(product:product):void{
    console.log(product.id);
    console.log(product.name);
    console.log(product.price);
}
   Productdetails({
    id:678,
    name:"mobile",
    price:20000
   })

   Productdetails({
    id:5788,
    name:"laptop",
    price:50000
   })

   console.log(Productdetails);



//nested interface

interface Address{
    city: string;
    state: string;
}

interface user{
    name: string;
    age: number;
    address: Address;
}

let User:user={
name:"pujitha",
age:22,
address:{
    city:"hyderabad",
    state:"telangana"
}
}
console.log(User);



////

interface student3{

    id:number;
    name:string;
    marks:number;

}

let Student3:student3={
    id:234,
    name:"pujitha",
    marks:90
}
console.log(Student3);  


///

interface prodcuts{
    id:number;
    name:string;
    price:number;
}

let Products:prodcuts={
    id:234,
    name:"mobile",
    price:20000
}

let Products1:prodcuts={
    id:345,
    name:"laptop",
    price:50000
}
console.log(Products);
console.log(Products1);



















