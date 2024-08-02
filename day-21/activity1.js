function twoSum(array,target){
    let n = array.length
    for(let i = 0;i < n; i++){
        for(let j = i+1;j < n;j++){
            let a = array[i]
            let b = array[j]
            if(a+b===target){
                return `a is at index ${i} and b is at index ${i+1}`
            }
        }
    }
}

console.log(twoSum([1,2,3,4],7));