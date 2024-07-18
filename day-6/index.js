const array1 = [1,2,3,4,5];
console.log(array1);
console.log(array1[0]);
console.log(array1[4]);
array1.push(6)
console.log(array1);
array1.pop()
console.log(array1);
array1.shift()
console.log(array1);
array1.unshift(1)
console.log(array1);

const array2 = array1.map((num)=>{
    return num+num;
})
console.log(array2);
const array3 = array1.filter((num)=>{
    if(num%2===0){
        return num;
    }
})
console.log(array3);
const array4 = array1.reduce((first,secound)=>{
    return first+secound;
})
console.log(array4);
console.log("for loop >>>>>");
for( i = 0;i<array1.length;i++){
    console.log(array1[i]);
}
console.log("for each method >>>>>");
array1.forEach((e)=>{
    console.log(e);
})

const array5 = [
    [1,2,3],
    [4,5,6],
];
console.log(array5); 
console.log(array5[0][1]); 
console.log(array5[1][2]); 
