let text1 = `hello im a coder and im learning javascript with chai aur code 
            and also practsing it with the a 30 days javascript challenege`;
let count1 = 0;
let javascriptRegx = /javascript/g;
let matches1 = text1.match(javascriptRegx)
if (matches1){
    count1 = matches1.length
}

console.log(count1);

let text2 = "hello 123 your id number is 234 and your phone number is 0660415";
let count2 = 0;
let numberRegx = /\d/g
let matches2 = text2.match(numberRegx)
if (matches2){
    count2 = matches2.length
}
console.log(matches2);
console.log(count2);