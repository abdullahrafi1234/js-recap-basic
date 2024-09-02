// 1. Find / get
//

//creating html elements ---

let heading = document.createElement('h1')
let text = document.createTextNode('This is Added Heading')
heading.appendChild(text)

var myDiv = document.getElementById('myDiv')
myDiv.appendChild(heading)