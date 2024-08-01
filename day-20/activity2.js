let helloUser = document.querySelector("#helloUser");
function formDataSubmit(e) {
    // e.preventDefault();
    let nameData = document.querySelector("#name")
    let emailData = document.querySelector("#email")
     nameData = nameData.value
     emailData = emailData.value
    console.log(nameData);
    console.log(emailData);
    localStorage.setItem("name",nameData)
    localStorage.setItem("email",emailData)
}
let getName = localStorage.getItem("name")
let getEmail = localStorage.getItem("email")
if(getName && getEmail){
    helloUser.textContent = `hello ${getName} your email we remembered ${getEmail} `
}
document.querySelector("form").addEventListener("submit", formDataSubmit);

let strng2 = localStorage.getItem("strng1")
console.log(strng2);
function removeString(){
    localStorage.removeItem("strng1");
}