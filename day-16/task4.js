function findMax(arr,n){
    if(n === 1){
        return arr[0];
    }

    return Math.max(arr[n - 1],findMax(arr,n-1));
}
function arrayMax(arr){
    return findMax(arr,arr.length);
}

console.log(arrayMax([1,7,3,4]));