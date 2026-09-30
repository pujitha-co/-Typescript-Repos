export{}

class Student{
                                           
 id:number=1234;
    name:string="pujitha";
    age:number=22;
    
}
let student1=new Student()
console.log(student1);
console.log(student1.id);




class students{
    id:number=2345;
    name:string="pujith";
    age:number=23;
    display():void{
        console.log(this.id);
        console.log(this.name);
        console.log(this.age);
    }
}
let student2=new students()
student2.display();







class product{
    productId:number=234;
    productName:string="mobile";
    price:number=50000

}

let product1=new product()
let product2=new product()
console.log(product1);
console.log(product1.productId);



//////////
class Product {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    displayDetails(): void {
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
   add(a:number,b:number){
    return a+b;
   }
   
   sub(a:number,b:number){
    return a-b;
   }
   mul(a:number,b:number){
    return a*b;
   }
}

let calculator=new Calculator();
console.log(calculator.add(20,10));

console.log(calculator.sub(20,10));

console.log(calculator.mul(20,10));


