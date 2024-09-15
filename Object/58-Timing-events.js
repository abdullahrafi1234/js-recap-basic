// JS BOM 
// Js Timing events methods
// setTimeOut() ----->  ekta nirdishto time por kaj ta suro hbe
// setInterval() -----> ekta nirdishto time por por kaj ta repeat hbe


// setTimeout(()=> {
//     console.log('hi');
// }, 2000)


setTimeout(display, 2000)

function display() {
    console.log('display function')
}

const saveButton = document.querySelector('.saveButton')
const message = document.querySelector('.message')

// saveButton.addEventListener('click', saveUser)

// function saveUser(){
//     message.textContent = 'User registration successful'
//     setTimeout(()=> {
//         message.textContent = ''
//     }, 2000)
// }

saveButton.addEventListener('click', displayCount)

