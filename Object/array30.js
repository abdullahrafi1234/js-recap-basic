function highestRunScorer(batsman) {
    console.log(batsman)
    var runScorer = batsman[0][0];
    var runScore = batsman[0][1];

    for (x = 1; x < batsman.length; x++) {
        // for (y = 0; y < batsman.length; y++) {

        // }
        if (runScore < batsman[x][1]) {
            runScore = batsman[x][1];
            runScorer = batsman[x][0]


        }
    }
    return runScorer;
}


var scorer = [['Ashraful', 95], ['Shakib', 19], ['Mushfiq', 35], ['Rafi', 18]]

var highestScore = highestRunScorer(scorer)
console.log(highestScore)