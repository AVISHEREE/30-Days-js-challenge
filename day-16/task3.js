const array = [1,2,3];

function sum_arr(arr,i){
    // Base Case
    if(i >= arr.length){
        return 0;
    }
    // Recursive Call
    return arr[i] + sum_arr(arr,i+1);
}
console.log(sum_arr(array,0));
