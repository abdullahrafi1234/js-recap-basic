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



// ---- Others Task -----

var age = 60;  //age boshabo ekhane
var isStudent = false;   //student kina dekhar jachai korar jonno
var price = 800;   //ticket er dam

if (age < 10) {
    console.log('Free')
}

else if (isStudent == true) {
    console.log(price / 2)  //50%
}

else if (age >= 60) {
    var calculation = price * (15 / 100)
    var total = price - calculation
    console.log(total)   //easy vabe likhar jonno oikik niom e korlam
}

else (console.log('Price: ' + price))