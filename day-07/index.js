let book1={
    "tittle":"Twisted Love",
    "author":"ava haung",
    "year":"17/08/2015",
}
console.log(book1);
console.log(book1.author,book1.tittle);

book1.getInfo = function(){
    return ` Book ${this.tittle} by ${this.author}`
}
console.log(book1.getInfo());
book1.updatYear = function(year){
    this.year = year
    return this.year
}

console.log(book1.updatYear("18/08/2015"));
console.log(book1);

let library = {
    name:'BookoHolics',
    books:[
    {
        "tittle":"The secret",
        "author":"Rhonda Byrne",
        "year":"21/03/2012",
    },
    {
        "tittle":"Twisted Love",
        "author":"ava haung",
        "year":"17/08/2015",
    },
    {
        "tittle":"I Fell In Love with Hopes",
        "author":"Koi toh",
        "year":"19/09/2017",
    }
    ],
     getInfoLib : function (){
        return  this.books.forEach((e)=>{
          console.log(e.tittle);
        })
      
    }
   
};
console.log(library);
library.books.forEach((e)=>{
    console.log(`Book name : ${e.tittle} || author: ${e.author}`);
});


library.getInfoLib();

for(let key in library.books){
    console.log(library.books[key]);
    console.log(key);
}
console.log(Object.keys(library.books));
console.log(Object.values(library.books));
console.log(library.books[1]);