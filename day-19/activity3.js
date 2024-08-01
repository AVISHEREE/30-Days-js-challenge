let phoneNumber = "(123) 456-7890";
let phonePattern = /\((\d{3})\) (\d{3})-(\d{4})/;

let matches = phoneNumber.match(phonePattern);

if (matches) {
    let areaCode = matches[1];
    let centralOfficeCode = matches[2];
    let lineNumber = matches[3];

    console.log("Area Code:", areaCode);
    console.log("Central Office Code:", centralOfficeCode);
    console.log("Line Number:", lineNumber);
} else {
    console.log("No matches found");
}

let email = "akash@gmail.com";
let emailRegx = /(\w+)\@(\w+\.com)/;
let matches2 = email.match(emailRegx)
if(matches2){
    let doamin = matches2[2]
    console.log(matches2[1]);
    console.log(doamin);
}else{
    console.log('please check your email address');
}