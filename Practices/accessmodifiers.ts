export{}

// public 


class Student {

    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

let s1 = new Student("pujitha");

console.log(s1.name);


// private

class Employee {

    private salary: number;

    constructor(salary: number) {
        this.salary = salary;
    }

    displaySalary() {
        console.log("Salary:", this.salary);
    }
}

let e1 = new Employee(40000);

e1.displaySalary();



// protected

class Person {

    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class student extends Person {

    displayName() {
        console.log("Student Name:", this.name);
    }
}

let s2 = new student("puji");

s2.displayName();

// all three access modifiers

class employee {

    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    displaySalary() {
        console.log("Salary:", this.salary);
    }
}

class Manager extends employee {

    displayManager() {
        console.log("Name:", this.name);
        console.log("Department:", this.department);
    }
}

let m1 = new Manager("pooja", 90000, "IT");

m1.displayManager();
m1.displaySalary();