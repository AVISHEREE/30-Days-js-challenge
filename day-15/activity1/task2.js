function counter(){
    let count = 0;
    function incrm(){
        count++;
        return count;
    }
   return incrm();
}
console.log(counter());
