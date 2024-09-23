// js Promise


// 1. How to create promise => pending, resolve, reject
const promise1 = new Promise((resolve, reject) => {
    let completedPromise = true;

    if(completedPromise){
        resolve('Completed Promise 1')
    }
    else{
        reject('not completed promise 1')
    }

})
console.log(promise1);
promise1.then(res => {  //function resolve hoile then er modde jabe
    console.log(res);
})


// 2. how to use promise 