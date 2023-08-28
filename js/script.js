const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const inputLetter = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

const word = "magnolia";

// Display our symbols as placeholders for the chosen word's letters
const wordBeingGuessed = function (word) {
    const wordBeingGuessedLetters = [];
    for (const letter of word){
        console.log(letter);
        wordBeingGuessedLetters.push("●");
    }
    wordInProgress.innerText = wordBeingGuessedLetters.join("");
};
wordBeingGuessed(word);

guessButton.addEventListener = ("click", function (e){
    e.preventDefault();
    const guess = inputLetter.value;
    console.log(guess);
    inputLetter.value = "";
});
