// Play Audio

for (i = 0; i < 3; i++) {
    document.querySelectorAll('.myButton')[i].addEventListener('click', function () {
        var text = this.innerHTML
        // console.log(text)
        audioPlay(text)
        playAnimation(text)
    })
}


//keypress listener
document.addEventListener('keypress', function(event){
    var text = event.key
    audioPlay(text)
    playAnimation(text)
})

var count = 0;
document.getElementById('area').addEventListener('keypress', function(event){
    count ++;
    var keypress = event.key
    document.querySelector('p').innerHTML = 'You have pressed '+ keypress
})






//same work with function
function audioPlay(text) {
    switch (text) {
        case 'a':
            var audio = new Audio('sounds/sound1.mp3')
            audio.play()
            break;
        case 'b':
            var audio = new Audio('sounds/sound2.mp3')
            audio.play()
            break;
        case 'c':
            var audio = new Audio('sounds/sound3.mp3')
            audio.play()
            break;
    }
}

function playAnimation(text){
    var selectButton = document.querySelector('.'+text)
    selectButton.classList.add('animation')

    //remove hoye jabe ei time er por
    setTimeout(function(){
        selectButton.classList.remove('animation')
    }, 500)
}
