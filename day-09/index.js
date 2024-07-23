let heading = document.getElementById("heading");
let an = document.getElementsByClassName("andiv");
let hello = document.querySelector(".hello");
let ul = document.getElementById("ul")
let imgtag = document.getElementById("imgtag")

an[0].style.color = "blue";
heading.innerText = "Hello JS Coders";
let newdiv = document.createElement("newdiv");
newdiv.innerText = "this is a div that is genereted from js";
document.body.appendChild(newdiv)
let li1 = document.createElement("li");
let li2 = document.createElement("li")
let li3 = document.createElement("li")
li1.innerText = "One";
li2.innerText = "Two"
li3.innerText = "Three"
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
hello.remove();
ul.removeChild(ul.lastChild);
imgtag.src = '/img/img1.png'
imgtag.height = '220'
imgtag.classList.add('imgtagclass')
imgtag.classList.remove('imgtagclass')
heading.addEventListener('click',()=>{
    heading.style.backgroundColor = 'blue'
})
heading.addEventListener('mouseover',()=>{
    heading.style.border = '2px solid yellow'
})
