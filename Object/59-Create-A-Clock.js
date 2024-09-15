const saveButton = document.querySelector('.saveButton')
const message = document.querySelector('.message')

saveButton.addEventListener('click', startClock)

function startClock() {
    let date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();

    minutes = formatTime(minutes)
    second = formatTime(second)

    let time = 'Time: ' + hours + ':' + minutes + ':' + second

    message.textContent = time;

    setInterval(startClock, 1000)
}

function formatTime(value) {
    if (value < 10) {
        value = '0' + value
    }
    return value
}


// Java Script Best Practice

// 1. use camelCase for naming
// 2. variable declaration on top and initialize
// 3. avoid unnecessary variable
// 4. switch , case, default
// 5. object and array with const
// 6. == vs ===
// 7. access dom less