for (var x = 1; x <= 5; x++) {
    var guessNumber = parseInt(prompt('Enter a number from 1 to 5'))

    var random = Math.floor(Math.random() * 4 + 1)

    if (guessNumber == random) {
        console.log("You have won")
    }
    else (console.log('You have lost, Your number was ' + guessNumber))
}