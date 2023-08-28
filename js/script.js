const guessedLettersElement = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const inputLetter = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

// Display our symbols as placeholders for the chosen word's letters
const wordBeingGuessed = function (word) {
 const wordBeingGuessedLetters = [];
for (const letter of word){
//console.log(letter);
wordBeingGuessedLetters.push("●");
 }
 wordInProgress.innerText = wordBeingGuessedLetters.join("");
};
wordBeingGuessed(word);

guessButton.addEventListener ("click", function (e){
 e.preventDefault();
const guess = inputLetter.value;
//console.log(guess);

 message.innerText = "";
const goodGuess = validate(guess);

if (goodGuess) {
makeGuess(guess);
}
inputLetter.value = "";

});

const validate = function (input){
const acceptedLetter = /[a-zA-Z]/;
 if (input.length === 0)
{ message.innerText = "Please enter a letter";}
else if (input.length >1) 
{ message.innerText = "Please enter only 1 letter";}
else if (!input.match(acceptedLetter))
{message.innerText = "Please enter a letter from A to Z";}
else {return input;}
};

const makeGuess = function (guess) {
guess = guess.toUpperCase();
if (guessedLetters.includes(guess))
{message.innerText ="You already guessed that letter. Please choose a different letter";}
else {guessedLetters.push (guess);
//console.log(guessedLetters);
updateLetters();
updateWordInProgress(guessedLetters);
}};

const updateLetters = function () {
   guessedLettersElement.innerHTML = "";
for (const letter of guessedLetters)
{const li = document.createElement("li");
 li.innerText = letter;
 guessedLettersElement.append(li);
} 
};

const updateWordInProgress = function (guessedLetters)
{ const wordUpper = word.toUpperCase();
const wordArray = wordUpper.split("");
const revealWord = [];
for (const letter of wordArray) {
if (guessedLetters.includes(letter))
 { revealWord.push(letter.toUpperCase());
 } else {
revealWord.push("●");
}
 }
 //console.log(revealWord);
wordInProgress.innerText = revealWord.join("");
checkIfWin();
};

const checkIfWin = function (){
  if (word.toUpperCase() === wordInProgress.innerText)
  {message.classList.add("win");
  message.innerHTML = `<p class = "highlight">You guessed correct the word! Congrats!</p>`;
  }
  };