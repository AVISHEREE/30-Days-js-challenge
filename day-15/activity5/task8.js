function superMemoizes(fn){
    const cache = {};
     function value(x){
        if(cache[x] !== undefined){
            console.log("Returning from cache...");
            return cache[x];
        }
        console.log('calculatin Result');
        const res = fn(x);
        cache[x]=res;
        return res;
    }
    return value
}

function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }
    return n * factorial(n-1);
}

let memozedFactorial = superMemoizes(factorial);

console.log(memozedFactorial(3));
console.log(memozedFactorial(3));
console.log(memozedFactorial(6));
console.log(memozedFactorial(6));