class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    get fullname(){
        return `${this.name}`;
    }
    greet() {
        return `hello ${this.name} ik you're ${this.age} years old`;
    }
    updateAge(newAge = this.age){
        this.age = newAge;
        return `your Age is updated , current Age : ${this.age}`;
    }
    static personFeilds(){
        return "name and age";
    }
}
let p1 = new person('akash',62);
console.log(p1);
console.log(p1.greet());
console.log(p1.updateAge(19));

class student extends person{
    static numofstudent = 0;
    constructor(name,age,studentID){
        super(name,age);
        this.studentID = studentID;
        student.numofstudent++
    }
    set newName(name){
       return this.name = name;
    }
}

student.prototype.greetStudent = function(){
    return `hello ${this.name} welcome to our college student your ID is ${this.studentID}`;
}

let s1 = new student('xyzz',17,1);
let s2 = new student(p1.name,p1.age,2);
console.log(s1);
console.log(s1.greetStudent());
console.log(s2);
console.log(person.personFeilds());
console.log(student.numofstudent);
s1.newName = "akash";
console.log(s1.fullname);


class Account{

    constructor(amount){
        this.amount = amount;
    }

    deposit(amount){
        this.amount += amount;
        return this.amount;
    }

    withdraw(amount){
        this.amount -= amount;
        return this.amount;
    }
}

let a1 = new Account(100);
console.log(`a1 balance : ${a1.amount}`);
a1.deposit(20);
console.log(a1.amount);
a1.withdraw(40);
console.log(a1.amount);