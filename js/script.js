// Global variables:

// Array: Contains the words to be used in the game:

const wordList = ["html", "css", "javascript", "php"];

// String: One of the chosen words generated by the randomiser using the above array:

function generateRandomWord() {
  let selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
  return selectedWord;
};

function createLetterBoxes() {
  let letterBoxEls = document.querySelector('#letterBoxes > ul');
  return letterBoxEls;
}



let guesses = 0;     // Number: håller antalet gissningar som gjorts
let hangmanImg;      // Sträng: sökväg till bild som kommer visas (och ändras) fel svar. t.ex. `/images/h1.png`

let msgHolderEl;     // DOM-nod: Ger meddelande när spelet är över

// DOM-node: The button which starts the game:

let startGameBtnEl = document.querySelector('#startGameBtn').addEventListener('click', function() {
  console.log('stop pressing the start button');
});

let letterButtonEls; // Array av DOM-noder: Knapparna för bokstäverna
let letterBoxEls = document.querySelector('letterBoxes > ul');   // Array av DOM-noder: Rutorna där bokstäverna ska stå

// Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner
// Funktion som slumpar fram ett ord
// Funktion som tar fram bokstävernas rutor, antal rutor beror på vilket ord slumptas fram
// Funktion som körs när du trycker på bokstäverna och gissar bokstav
// Funktion som ropas vid vinst eller förlust, gör olika saker beroende tillståndet
// Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är på