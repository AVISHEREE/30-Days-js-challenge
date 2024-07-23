let Name = "Akash";
let age = 17;
let Number = 7888;
let personDetails = `Name : ${Name} , Age : ${age} , Number : ${Number}`;
console.log(personDetails);
let personInfo = `${Name}, who is passionate about his carrer at the age of ${age} \nto know more Info : ${personDetails}`
console.log(personInfo);
let array1 = [1,2,3,4,5];
let [num1 , num2] = array1;
console.log(num1);
console.log(num2);
let book = {
    author:"ava haung",
    tittle:"Twisted Love",
    date:"17/07/2015"
}
let {author,tittle} = book;
console.log(author);
console.log(tittle);

let array2 = [...array1,6,7,8]
console.log(array2);

function restOperator(...nums){
    let n = 0;
    for(let number of nums){
        n+= number;
    }
    return n; 
}
console.log(restOperator(1,2,3));

function sum(num1,num2=2){
    return num1 + num2;
}
console.log(sum(1,3));
console.log(sum(1));
let person = {name :"AKa",age:"17",city:"Goa"};
let {name , ...rest} = person;
console.log(name);
console.log(rest);
let type1 = "user";
let User1 = "handry";
let type2 = "admin";
let user2 = "avishere"
let obj = {
    [type1]:User1,
    [type2]:user2
}
console.log(obj)