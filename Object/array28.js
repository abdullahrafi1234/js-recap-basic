console.log('array method')

//splice method

var names = ['arif', 'rafi', 'kolpona', 'abir', 'manush']

//adding elements using splice

// names.splice(2, 1, 'jubair', 'rahim') 

// // 2 er mane hoilo 2 index theke add hbe name gula and 1 er mane hoilo sesh dik theke 1 ta element remove hbe
// console.log(names)


// //removing elements using splice
// names.splice(0, 2)   // 0 index theke suro kore 2 ta element remove hobe
// console.log(names)

// var newArray = names.slice(0, 1)
// console.log(newArray)
// console.log(names)

//sort method

var sortedNames = names.sort()
console.log(sortedNames)

var numbers = [12, 34, 43, 20, 10, 39]

//number sorting er jonno function niye korte hoy karon sort shodo string e kaj kore

// numbers.sort(function(a,b) {
//     return a-b
// })

//reverse sorting
numbers.sort(function(a,b) {
    return b-a
})

console.log(numbers)

