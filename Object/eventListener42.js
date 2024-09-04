//Basic event listener 

document.getElementById('button').addEventListener('click', myFunction)

function myFunction() {
    alert('Clicked')
}

//another way with anonymous function

document.getElementById('button2').addEventListener('click', function () { alert('Clicked by me') })


//mouseover and mouseout
var myVar = document.getElementById('my-style')
myVar.addEventListener('mouseover', function () {
    myVar.classList.add('my-styles')
}) 
myVar.addEventListener('mouseover', function () {
    myVar.classList.add('my-styles')
}) 

