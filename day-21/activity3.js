function reverseInteger(num){
    let reversed = parseInt(Math.abs(num).toString().split('').reverse().join(''));
    if(num<0){
        reversed = reversed * (-1);
    }
    if(num === reversed){
        return true
    }else{
       return false
    }
}

console.log(reverseInteger(121));
console.log(reverseInteger(-232));
console.log(reverseInteger(1020));