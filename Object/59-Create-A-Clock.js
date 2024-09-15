const saveButton = document.querySelector('.saveButton')
const message = document.querySelector('.message')

saveButton.addEventListener('click', startClock)

function startClock(){
    let date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();
    let time ='Time: ' + hours + ':'+ minutes + ':' + second

    message.textContent = time;
}