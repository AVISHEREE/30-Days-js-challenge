let text1 = `Hello im a coder and im learning javascript With chai aur code 
            and also Practsing it With the a 30 days Javascript challenege`;
let count1 = 0;
let capsRegx = /[A-Z]/g;
let matches1 = text1.match(capsRegx)
if(matches1){
    count1 = matches1.length;
}
console.log(matches1);
console.log(count1);

let text2 = "there are 124 boxes whos id is 4392 and it will only given to 124 people and minimum 32";
let numberSeqRegx = /\d+/g;
let matches2 = text2.match(numberSeqRegx)
count1 = matches2.length;
console.log(matches2);
console.log(count1);