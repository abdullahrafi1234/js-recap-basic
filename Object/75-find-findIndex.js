// Array method
// 1. find() ---> condition wise 1st value ta dibe jeita match korbe
// 2. findIndex() ---> index number dibe condition wise


const numbers = [5, 20, 23, 40, 25]

const firstEven = numbers.find((x, index, array) => x % 2 === 0)
console.log(firstEven);
const firstEvenIndex = numbers.findIndex((x, index, array) => x % 2 === 0)
console.log(firstEvenIndex);