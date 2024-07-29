function fibonacci(n){
    // Base Case
    if(n <= 1){
        return n;
    }
    // Recursive Call
    return fibonacci(n-1) + fibonacci(n-2);
}

