let num1 = 0;
console.log("numbers from 1 to 10");
for(let i = 0 ; i <= 10 ; i++){
    
    console.log(i);
}
console.log("multiplication table of 5");
for(let i = 1;i <= 10; i++){
    console.log("5 * ",i,"=",(5*i));
}
let num2 = 0;
let x = 1;
while (x<=10) {
    num2+=x;
    x++;
}
console.log(num2);
let num3 = 0;
x = 1;
do {
    console.log(num3+x);
    x++;
} while (x<=5);
num3 = 1;
x = 1;
let factorialUpto = 6;
do {
   num3=x*num3;
   x++;

} while (x<=factorialUpto);
console.log(num3);

num3 = 1;
x = 1;
for(x;x<=5;x++){
    let pattern = ''
    for(i = 1;i<=x;i++){
        pattern+='*';
    }
    console.log(pattern);
}

for(let i = 0 ; i <= 10 ; i++){
    
    if(i == 5) continue
    console.log(i);
}

for(let i = 0 ; i <= 10 ; i++){
    
    if(i == 7) break
    console.log(i);
}