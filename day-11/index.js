// let promise1 = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//            resolve('2 sec passed');
//         }, 2000);
//     })

// let promise2 = new Promise((resolve,reject)=>{
//        setTimeout(() => {
//         reject('this promise is rejected')
//        }, 2000);
//     })

// console.log('hello');
// promise1.then((message)=>{
//     console.log(message);
// })
// promise2.catch((e)=>{
//     console.log(e);
// });

// let promise3 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('data fetched from server')
//     }, 4000);
// })

// promise3.then( (m) =>{
//     console.log(m);
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('data processed')
//         }, 2000);
//     }).then((d)=>{
//         console.log(d);
//     })
// })

// async function hello(){
//  let  m = await promise3;
//    console.log(m);
// }
// hello();

// async function funct(){
//     try {
//        let d = await promise2;
//        console.log(`feted data :${d}`); 
//     } catch (e) {
//         console.log(`error in feting data :${e}`);
//     }
// }

const URL = "https://dogapi.dog/api/v2/facts";
const fetchedData = fetch(URL);
// fetchedData.then(response=>{
//     return response.json()
// })
// .then((d)=>{
//     console.log(d.data);
// })
// .catch((e)=>{
//     console.log(e);
// })

// async function funct(){
//     const response = await fetchedData;
//     const d = await response.json()
//     console.log(d.data);
// }

// funct();


console.time('promise.all')
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved')
    }, 3000)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved')
    }, 4000)
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 resolved')
    }, 2000)
})

Promise.all([promise1, promise2, promise3])
    .then(values => {
        values.forEach(values => {
            console.log(values)
        })
        console.timeEnd('promise.all')
    })

    Promise.race([promise1, promise2, promise3])
    .then(value => {
        console.log("First Promise resolved:-" ,value)
    })