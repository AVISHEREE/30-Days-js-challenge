const checkNumOddOrEven =(num)=>{
    if(num%2==0){
        return 'even'
    }
    else{
        return 'odd'
    }
}

const squareOfNum = (num) =>{
    return (num*num)
}

const bigInThree = (num1,num2,num3) =>{
    if(num1>=num2&&num1>=num3){
        return `${num1} is the greatest`;
    }
    else if(num2>=num1&&num2>=num3){
        return `${num2} is the greatest`;
    }
    else {
        return `${num3} is the greatest`;
    }
}

const concatenateStrings = (str1,str2) =>{
    return (str1 + str2)
}

const sumOfTwoNums = (num1,num2) =>{
    return (num1 + num2)
}

const specailCharacterFinder = (str,c) =>{
    return str.includes(c);
}

const productOfTwo = (num1,num2=6) =>{
    return (num1*num2)
}

const greetingFunc = (name,age = 69) =>{
    return `your Name : ${name} , your Age : ${age} `
}
const functionCalling = (func,n) =>{
  for(let i = 1;i <= n; i++){
    // return func('akash')
     func()
  }
    
}

function hello() {
    console.log('hello world');
}

const funct = (func1,func2,n) =>{
   return func1(func2,n)
}
const firstFunc = (func2,n) =>{
    return func2(n)
}
const secoundFunct = (n) =>{
    return (n+n)
}


console.log(checkNumOddOrEven(2));
console.log(squareOfNum(3));
console.log(bigInThree(4,5,6));
console.log(concatenateStrings("hello ","Humans"));
console.log(sumOfTwoNums(7,8));
console.log(specailCharacterFinder('akash@123','@'));
console.log(productOfTwo(2));
console.log(greetingFunc('akash'));
functionCalling(hello,4)
console.log(funct(firstFunc,secoundFunct,3));