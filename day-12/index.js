function a(){
    k
}
try {
    console.log(a());
} catch (e) {
    console.log(`Error in The Function : ${e}`);
}

function div(num1 ,num2){
    if(num2===0){
        throw new Error("Cannot be divided by zero");
    }
    let a = num1 / num2;
    return a
}
class CustomError extends Error{
    constructor(status,ErrorMessage,ErrorIn){
        super(ErrorMessage);
        this.status = status;
        this.ErrorIn = ErrorIn;
        this.name = 'CustomError';
    }
}
try {
   console.log( div(4,0));
} catch (e) {
    console.log(`${e}`);
}
finally{
    console.log("done checking with code");
}

function sampleFunct(a){
    if(a===0){
        return new CustomError("404","Input can't be Zero","Error in sampleFunct()");
    }
    return a;
}
try {
   console.log(sampleFunct(0));
} catch (e) {
    console.log(`Error is Here :${e}`);
}

function input(userInput){
    if(userInput===''||userInput===undefined){
        throw new Errors("200","Input can't be empty","Error in userInput()")
    }
    return userInput;
}
try {
    console.log(input());
} catch (e) {
    console.log(e);
}

let promise1 = new Promise((res,rej)=>{
    rej('nothing')
})

promise1.then((m)=>{
    console.log(m);
})
.catch((e)=>{
    console.log(`Error is :${e}`);
})
let invalidUrl = "http://nothing.com/data"
fetch(invalidUrl) 
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    console.log('Data:', data);
})
.catch(error => {
    console.error(`Fetch error: ${error.message}`);
});

const fetchData = async () => {
    let invalidUrl = 'https://invalid.com/data';

    try {
        const response = await fetch(invalidUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Data:', data);
    } catch (error) {
        console.error(`Fetch error: ${error.message}`);
    }
};

fetchData();