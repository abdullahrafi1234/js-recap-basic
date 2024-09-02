// 1. Find / get
//create
//add
//remove



//creating html elements ---

var heading = document.createElement('h1')
var text = document.createTextNode('This is Added Heading')
heading.appendChild(text)

var myDiv = document.getElementById('myDiv')
myDiv.appendChild(heading)