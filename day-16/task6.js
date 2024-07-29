function reverseString(str){
    n = str.length;
    if(n === 1) return str

    return str.slice(-1) + reverseString(str.slice(0, -1));
}

function palindromeCheck(str){
   strcheck = reverseString(str);
   if(strcheck === str){
    return `${str} is palindrome`;
   }
   else{
    return `${str} is not palindrome`;
   }
}

console.log(palindromeCheck('aba'));
console.log(palindromeCheck('abc'));