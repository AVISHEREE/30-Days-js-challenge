let clickh2 = document.getElementById("clickh2");
let imgdoubleclickevent = document.getElementById("imgdoubleclickevent");
let mouseoverevent = document.getElementById("mouseoverevent");
let inputevent = document.getElementById("inputevent");
let para = document.getElementById("para");
let formsubmit = document.getElementById("formsubmit");
let selectTech = document.getElementById("selectTech");
let p3 = document.getElementById("p3");
let parent = document.getElementById("parent");
let addButtons = document.getElementById("addButtons");

clickh2.addEventListener('click',()=>{
    clickh2.innerText = 'you clicked on this heading'
});

imgdoubleclickevent.addEventListener('dblclick',()=>{
    imgdoubleclickevent.style.height = '18rem'
    imgdoubleclickevent.style.opacity = '1'
})

mouseoverevent.addEventListener('mouseover',()=>{
    mouseoverevent.innerHTML = 'magic happend 😏';
    mouseoverevent.style.backgroundColor = 'blue'
})
mouseoverevent.addEventListener('mouseout',()=>{
    mouseoverevent.innerHTML = 'hover on me to see magic';
    mouseoverevent.style.backgroundColor = 'white'
})

inputevent.addEventListener('keydown',(e)=>{
    console.log('key pressed');
})

inputevent.addEventListener('keyup',()=>{
    para.innerHTML = inputevent.value;
})

formsubmit.addEventListener('submit',(e)=>{
    e,preventDefault();
    // console.log(form submit);
    console.log("input 1:", formsubmit.elements.in1.value);
    console.log("input 2:", formsubmit.elements.in2.value);
})

selectTech.addEventListener('click',()=>{
    p3.innerText = selectTech.value;
})

parent.addEventListener('click',(e)=>{
    e.target.tagName == "BUTTON" && alert("Button Clicked");
})
addButtons.addEventListener('click',()=>{
    newbtn = document.createElement('button');
    newbtn.innerHTML = 'Button';
let parent = document.getElementById("parent");
    parent.appendChild(newbtn);
})