let num1 = -5;
if (num1 >= 0) {
  console.log("number is positive");
} else {
  console.log("number is negative");
}

let num2 = 19;
if (num2 >= 18) {
  console.log("you can vote");
} else {
  console.log("you cont't vote");
}

let num3 = 7;
let num4 = 10;
let num5 = 15;
if (num3 >= num4 && num3 >= num5) {
  console.log("num3 is the greatest :", num3);
} else if (num4 >= num3 && num4 >= num5) {
  console.log("num4 is the greatest :", num4);
} else {
  console.log("num5 is the greatest :", num5);
}

let weeknum = 7;
switch (true) {
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');
        break;
    default:
        console.log('please enter a valid number');
        break;
}

let marks = 70;
switch (true) {
    case (marks >= 90 && marks <= 100):
        console.log('grade A');
        break;
    case (marks >= 80 && marks < 90):
        console.log('grade B');
        break;
    case (marks >= 70 && marks < 80):
        console.log('grade C');
        break;
    case (marks >= 60 && marks < 70):
        console.log('grade D');
        break;
    case (marks >= 0 && marks < 60):
        console.log('grade F');
        break;
    default:
        console.log('Invalid marks');
}

let num8 = 9;
console.log((num8%2==0?'number is even':'number is odd'));

let year = 2024;
if((year%4==0 && year%100!==0)||(year%400==0)){
    console.log(`${year} is a leap year`);
}
else{
    console.log(`${year} is not a leap year`);
}