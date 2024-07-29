function reverseString(str){
    n = str.length;
    if(n === 1) return str

    return str.slice(-1) + reverseString(str.slice(0, -1));
}
console.log(reverseString('happy'));