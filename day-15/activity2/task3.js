function uniqueIDGeneratror(){
  let ID = [];
 return function idIncr(){
    ID.push((Math.random() * 10));
    return ID
  }
}
let a = uniqueIDGeneratror();
a();
a();
console.log(a());
// console.log();