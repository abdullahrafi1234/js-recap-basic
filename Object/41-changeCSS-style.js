// function addStyle() {
//     var myVar = document.getElementById('peraId')

//     myVar.style.color = 'red';
//     myVar.style.fontSize = '40px'
// }

var myVar = document.getElementById('peraId')
var myVar2 = document.getElementById('peraId2')

//how to add css style on js code
function addStyle() {
    myVar.classList.add('para-style')
    myVar2.classList.add('para-style')
}


function removeStyle() {
    myVar.classList.remove('para-style')
}
