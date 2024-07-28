function funct1(){
    let char = 'a';
     function funct2(){
        return char;
    }
    return funct2()
}

console.log(funct1());