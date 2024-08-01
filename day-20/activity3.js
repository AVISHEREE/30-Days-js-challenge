let strng3 = "hello this is stored in session storage";

sessionStorage.setItem("strng3",strng3);
let getStrng3 = sessionStorage.getItem("strng3");
console.log(getStrng3);

let obj2 = {
    name:"akash",
    age:"18",
    username:"AVISHERE"
}

let strngObj2 = JSON.stringify(obj2);

sessionStorage.setItem("obj2",strngObj2);

let getStrngObj2 = JSON.parse(localStorage.getItem("obj2"))
console.log(getStrngObj2);