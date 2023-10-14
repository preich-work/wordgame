const guessedLettersElement = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const inputLetter = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

let word = "magnolia";
let guessedLetters = [];
let guessesLeft = 8;

const getWord = async function (){
   const res = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
   const words = await res.text();
   const wordArray = words.split("\n");
   const randomIndex = Math.floor(Math.random() * wordArray.length);
   word = wordArray[randomIndex].trim();
   wordBeingGuessed(word);
   };
   
getWord();

// Display our symbols as placeholders for the chosen word's letters
const wordBeingGuessed = function (word) {
 const wordBeingGuessedLetters = [];
for (const letter of word){
wordBeingGuessedLetters.push("●");
 }
 wordInProgress.innerText = wordBeingGuessedLetters.join("");
};


guessButton.addEventListener ("click", function (e){
 e.preventDefault();
const guess = inputLetter.value;


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


updateLetters();
updateGuessesRemaining(guess);
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
 
wordInProgress.innerText = revealWord.join("");
checkIfWin();
};

const updateGuessesRemaining = function (guess) {
   const upperWord = word.toUpperCase();
   if (!upperWord.includes(guess)) {
    message.innerText = `The word does not contain ${guess}.  Please try again`;
   guessesLeft -= 1;}
   else {
   message.innerText = `Yes, the word has ${guess}!`;}
   
   if (guessesLeft === 0) 
   {message.innerHTML = `Game Over! The word is <span class="highlight">${word}</span>.`;}
   else if (guessesLeft === 1)
   {remainingSpan.innerText = `${guessesLeft} guess`;}
else {remainingSpan.innerText = `${guessesLeft} guesses`;}}
;


const checkIfWin = function (){
  if (word.toUpperCase() === wordInProgress.innerText)
  {message.classList.add("win");
  message.innerHTML = `<p class = "highlight">You guessed correct the word! Congrats!</p>`;
  
  startOver();
}};

  const startOver = function (){
   guessButton.classList.add("hide");
   remainingGuesses.classList.add("hide");
   guessedLettersElement.classList.add("hide");
   playAgain.classList.remove("hide");
  };

  playAgain.addEventListener  ("click", function () {
   message.classList.remove("win");
   guessedLetters = [];
   guessesLeft = 8;
   remainingSpan.innerText = `${guessesLeft} guesses`;
  guessedLettersElement.innerHTML = "";
   message.innerText = "";

getWord();

guessButton.classList.remove("hide");
playAgain.classList.add("hide");
remainingGuesses.classList.remove("hide");
guessedLettersElement.classList.remove("hide");
  });



  
  