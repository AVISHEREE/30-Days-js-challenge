function binarySearch(arr,i,n = 0,count = 0){
    
    let x = arr.length;
    if(i === arr[n]) {
        count++;
    };
    if(n === x - 1) return count;
   return binarySearch(arr,i,n+1,count);
}

console.log(binarySearch([1,2,2,4],2));