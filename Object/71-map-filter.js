// map and filter array function

let numbers = [10, 20, 30, 40]

// numbers.map((number)=> {
//     console.log(number)
// })

numbers.map(number => {
    console.log(number)
})

// function canVote(age) {
//     return age > 18
// }

const result = numbers.filter(function(number){
    return number>18
})
console.log(result);


//another way for filter function

// const number1 = numbers.filter(number => number > 20)
// console.log(number1)