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

const number1 = numbers.filter(number => number > 18)
console.log(number1)