const numbers =[10, 20, 40]
const squareNumber = []

// numbers.forEach(myFunction)

// function myFunction(x){
//     console.log(x)
// }


// another way 
numbers.forEach(function(x, index, array){   //index er modde index number and array te full array ta ashbe

    // console.log(x);
    // squareNumber.push(x*x)
    // console.log(array);
    array[index] = x+5;
    
})
console.log(numbers);