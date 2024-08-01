let password = "kashG(1";
let matchesOneLetter = /[a-z][A-Z]/.test(password);
let matchesOneNumber = /[0-9]+/.test(password);
let matchesOneSpeCha = /[!@#\$%\^&\*\(\)_\+\-=\[\]\{\};:'",.<>\/?\\|`~]/.test(password);
let matches = matchesOneLetter && matchesOneNumber && matchesOneSpeCha;
console.log(matches);

let url = "chaiaurcode.com";
let urlValid = /[https\:\/\/]*(\w+).com/;
let checkUrlValid = url.match(urlValid);
if(checkUrlValid){
    console.log(checkUrlValid);
}
