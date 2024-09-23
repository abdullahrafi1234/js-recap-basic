// js Promise


// 1. How to create promise => pending, resolve, reject
const promise1 = new Promise((resolve, reject) => {
    let completedPromise = false;

    if(completedPromise){
        resolve('Completed Promise 1')
    }
    else{
        reject('not completed promise 1')
    }

})
console.log(promise1);

 //function resolve hoile then er modde jabe
promise1.then(res => { 
    console.log(res);
})

promise1.catch(res => {
    console.log(res);
})


// 2. how to use promise 