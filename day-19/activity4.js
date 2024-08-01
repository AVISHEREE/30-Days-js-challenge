let text = 'akash vyas';
let matchWordBegin = /^\w+ / 
let matchWordEnd = / \w+$/ 
let matches1 = text.match(matchWordBegin);
let matches2 = text.match(matchWordEnd);
console.log(matches1);
console.log(matches1[0]);
console.log(matches2);
console.log(matches2[0]);