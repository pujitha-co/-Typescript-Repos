export{};

let cities:string[]=["hyderabad","bangalore","chennai","delhi"];

let data=cities.push("mumbai");
console.log(data);
console.log(cities);


let numbers: number[] = [10, 20, 30, 40, 50];
console.log(numbers);
console.log(numbers[0]);
console.log(numbers.push(60));
console.log(numbers);
console.log(numbers.pop());
console.log(numbers.length);

// let sum:number=0;

// for(let i:number=0;i< numbers.length;i++){
//     sum=sum+numbers[i];
// }
// console.log("SUM OF NUMBERS:",sum);

let numbers1:number[]=[10, 50, 20, 80, 30];

let largest:number=numbers1[0];

for(let i:number=0;i<numbers1.length;i++){
    if(numbers1[i]>largest){
        largest=numbers1[i];
    }
}
console.log("LARGEST NUMBER:", largest);

let number2:number[]=[10, 50, 20, 80, 30];
let smallest:number=number2[0];

for(let i:number=0;i < number2.length;i++){
    if(number2[i]<smallest){
        smallest=number2[i];
    }
}
console.log("SMALLEST NUMBER:", smallest);


let numbers3:number[]=[10,20,30,40,50];

let sum:number=numbers3[0];

for(let i:number=0;i<numbers3.length;i++){

    sum=sum+numbers3[i];
}
let average:number=sum/numbers3.length;
console.log("AVERAGE OF NUMBERS:",average);



let numbers4:number[]=[10, 15, 20, 25, 30, 35];
 for(let i:number=0;i<numbers4.length;i++){
    if(numbers4[i]%2==0){
        console.log(numbers4[i]);
    }
 }

let numbers5:number[]=[10, 15, 20, 25, 30, 35];
for(let i:number=0;i<numbers5.length;i++){
    if(numbers5[i]%2!=0){
        console.log(numbers5[i]);
    }
 }

//let student: [number, string, boolean] = [101, "Pujitha", true];
 
//console.log(student[0]);
// console.log(student[1]);
// console.log(student[2]);



//let student1:[number,string,number]=[101,"pujitha",25000];
// console.log("Employee ID:", student1[0]);
// console.log("Employee Name:", student1[1]);
// console.log("Employee Salary:", student1[2]);


enum Role {
    Admin,
    Manager,
    Employee
}
console.log(Role[0]);

enum Status {
    Success = "SUCCESS",
    Failed = "FAILED",
    Pending = "PENDING"
}
console.log(Status.Success);
