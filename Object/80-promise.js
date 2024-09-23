// js Promise


// 1. How to create promise => pending, resolve, reject
const promise1 = new Promise((resolve, reject) => {
    let completedPromise = true;

    if (completedPromise) {
        resolve('Completed Promise 1')
    }
    else {
        reject('not completed promise 1')
    }

})

const promise2 = new Promise((resolve, reject) => {

})

//function resolve hoile then er modde jabe
promise1
    .then(res => {
        console.log(res);
    })

//function reject hoile catch er modde jabe
    .catch(res => {
        console.log(res);
    })


// 2. how to use promise 