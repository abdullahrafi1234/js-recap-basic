// Play Audio

for (i = 0; i < 3; i++) {
    document.querySelectorAll('.myButton')[i].addEventListener('click', function () {
        var text = this.innerHTML
        console.log(text)
        audioPlay(text)
    })
}


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

function animation(){

}
