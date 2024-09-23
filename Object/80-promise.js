// js Promise ( its a async element)


// 1. How to create promise => pending, resolve, reject
const promise1 = new Promise((resolve, reject) => {
    let completedPromise = false;

    if (completedPromise) {
        resolve('Completed Promise 1')
    }
    else {
        reject('not completed promise 1')
    }

})

const promise2 = new Promise((resolve, reject) => {
    resolve('completed promise 2')
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


promise2 
    .then(res => {
        console.log(res);
    })

    // how to run all promise at a time

    Promise.all([promise1, promise2])
    .then(res => {
        console.log(res);
    })