let strng1 = "hello we are storing this in your local storage";
localStorage.setItem("strng1",strng1);
let strng = localStorage.getItem("strng1");
console.log(strng);

let obj1 = {
    name:"akash",
    age:"18",
    username:"AVISHERE"
}

let jsonObj = JSON.stringify(obj1);
localStorage.setItem("obj1",jsonObj);
let strngToObj = JSON.parse(localStorage.getItem("obj1"));
// let strngToObj = localStorage.getItem("obj1");
console.log(strngToObj);