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

function square(x){
    return x*x;
}


let memoizeSquare = superMemoizes(square);

console.log(memoizeSquare(5));
console.log(memoizeSquare(5));
console.log(memoizeSquare(10));
console.log(memoizeSquare(10));