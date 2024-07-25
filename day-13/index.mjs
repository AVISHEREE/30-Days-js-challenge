import { addTwoNum } from "./functsum.module.mjs";
import { person } from "./person.object.mjs";
import { addsum,multiply,division } from "./functions.exports.mjs";
import hello from "./functions.exports.mjs";
import _ from 'lodash';
import axios from "axios";

addTwoNum(1,2)
console.log(person.name);
console.log(person.age);
console.log(person.greet());
addsum();
multiply();
division();
hello();
let a = [4, 5, 7, 7, 7];
let index = _.sortedLastIndexOf(a, 7);  
console.log(index); 
let Url = "https://jsonplaceholder.typicode.com/posts/1";

async function data(){
  try {
      let request = await axios.get(Url);
     console.log(request.data);
  } catch (error) {
    console.log(`Error in fetching data : ${e}`);
  }

}       

data()