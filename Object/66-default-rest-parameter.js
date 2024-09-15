//default and rest parameter

"use strict"

function message(text = 'Hello this is default parameter') {
    console.log(text)
}

message()
message('I love rainy day')


function sum(x, y, ...z){
    console.log(`${x},${y}, z = ${z}`)
}

sum(5, 15)
sum(10, 20, 40, 30, 90)