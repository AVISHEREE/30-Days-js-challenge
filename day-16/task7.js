function binarySearch(arr,i,n = 0){
    if(i === arr[n]) return `index of element arr[${n}]`;
   return binarySearch(arr,i,n+1)
}

console.log(binarySearch([1,2,3,4],2));