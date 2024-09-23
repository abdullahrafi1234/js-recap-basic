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


// 2. how to use promise 