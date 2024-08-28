var numOfWin = 0
var numOfLost = 0

for (var x = 1; x <= 5; x++) {
    var guessNumber = parseInt(prompt('Enter a number from 1 to 5'))

    var random = Math.floor(Math.random() * 4 + 1)

    if (guessNumber == random) {
        console.log("You have won")
        numOfWin = numOfWin + 1
    }
    else {
        numOfLost = numOfLost + 1;
        console.log('You have lost, Your number was ' + guessNumber)
    }
}

document.write('Number of Win = ' + numOfWin + '<br/>')
document.write('Number of Lost = ' + numOfLost)