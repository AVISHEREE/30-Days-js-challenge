function reverseInteger(num){
    let reversed = parseInt(Math.abs(num).toString().split('').reverse().join(''));
    if(num<0){
        reversed = reversed * (-1);
    }
    return reversed
}

console.log(reverseInteger(123));
console.log(reverseInteger(-234));
console.log(reverseInteger(1020));