let arr = [];
function loopfunction(n) {
  for (let i = 1; i <= 4; i++) {
    arr.push(function () {
      console.log(n);
    });
    return arr;
  }
}
const funcArr = loopfunction(5);
funcArr.forEach((element) => element());
