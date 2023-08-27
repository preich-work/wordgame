//unordered list where player's guessed letters will appear
const guessedLetters = document.querySelector(".guessed-letters");

//The button with the text “Guess!” in it.
const guessButton = document.querySelector(".guess");

//The text input where the player will guess a letter.
const inputLetter = document.querySelector(".letter");

//The empty paragraph where the word in progress will appear.
const wordInProgess = document.querySelector("word-in-progrss");


//The paragraph where the remaining guesses will display.
const numOfGuessesLeft = document.querySelector(".remaining");

//The span inside the paragraph where the remaining guesses will display.
const spanRemainingGuesses = document.querySelector(".remaining span");

//The empty paragraph where messages will appear when the player guesses a letter.
const message = document.querySelector(".message");

//The hidden button that will appear prompting the player to play again.
const playAgain = document.querySelector(".play-again");

//Magnolia is your starting word to test out the game until you fetch words from a hosted file in a later step.
const word = "magnolia";

//Create and name a function to update the paragraph’s innerText for the “words-in-progress” element with circle symbols 
const wordBeingGuessed = function (word){
    const wordBeingGuessedLetters = [];
    for (const letter of word) {
        console.log(letter);
        wordBeingGuessedLetters.push("●");
    }
    wordInProgess.innerText = wordBeingGuessedLetters.join("");
};

wordBeingGuessed(word);

guessButton.addEventListener("click", function(e){
    e.preventDefault();
    const chosenLetter = inputLetter.value;
    console.log(chosenLetter);
    inputLetter.value = "";
});