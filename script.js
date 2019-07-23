let guessNumber;
let wrongGuessCount;


function resetGame() {
    guessNumber = parseInt(Math.random() * 50);
    wrongGuessCount = 0;

}
resetGame();
function myGuess() {

    let number = parseInt(document.querySelector("input").value);

    if (guessNumber > number) {
        alert("You are small!")
        wrongGuessCount++;
    }
    else if (guessNumber < number) {
        alert("You are big!");
        wrongGuessCount++;

    }
    else {
        alert("Congratulations! Wrong guesse:" + wrongGuessCount);
        resetGame();

    }

}

