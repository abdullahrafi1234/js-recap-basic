// 1. Find / get
//create
//add
//remove



//creating html elements ---

var heading = document.createElement('h1')
var text = document.createTextNode('This is Added Heading')
heading.appendChild(text)

//added a element+
var myDiv = document.getElementById('myDiv')
myDiv.appendChild(heading) //append child diye add kora hoy


//remove element

var heading2 = document.getElementsByTagName('h2')[0]
myDiv.removeChild(heading2)