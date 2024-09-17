console.log('hello')

function highestScore(scores) {
    let max = scores[0]

    for (var x = 1; x < scores.length; x++) {
        if (max < scores[x]) {
            max = scores[x]
        }
    }
    return max ;
}


let scores = [20, 34, 54, 20, 10]
var maxScore = highestScore(scores)
console.log(maxScore)


