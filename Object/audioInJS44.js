// Play Audio

for (i = 0; i < 3; i++) {
    document.querySelectorAll('.myButton')[i].addEventListener('click', function () {
        var text = this.innerHTML
        console.log(text)

        switch (text) {
            case 'Button 1':
                var audio = new Audio('sounds/sound1.mp3')
                audio.play()
                break;
            case 'Button 2':
                var audio = new Audio('sounds/sound2.mp3')
                audio.play()
                break;
            case 'Button 3':
                var audio = new Audio('sounds/sound3.mp3')
                audio.play()
                break;
        }

    })
}

