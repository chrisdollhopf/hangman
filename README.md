# Task - Hangman

This task is to individually implement a popular rudimentary game in JavaScript - "hang man". As support, there will be a code and a structure based on which you can use when you solve the task.

Hang Man, is a game where the word is random. The player then guesses which letters the word contains, for each wrong answer a part of the "hang man" picture is drawn. If the player guesses wrong enough times and the old man has been "hanged", the player has lost. If, on the other hand, the player succeeds in guessing all the letters, the player wins.

## Hard to get started?

The most important thing is to grasp all the things that need to happen to be able to play the game.

Before you look at the suggestions below, try to play hang man old a bit - either by yourself or with a friend and then try to list all the activities that need to happen.

Then start looking in `index.html` and` script.js` to get a grip on what things need to be linked. That is, which elements we should be able to listen to specific events for.

In `scripts.js` there are suggestions for different variables and suggestions on what functions are needed to be able to solve the task. Everything in `script.js` is only suggestions and does not have to be used. But if you feel insecure, it's a good idea to try to maintain most of it.

If you still do not know how to get started, try again pretending that everything is already working when you open ʻindex.html`in your browser. If it helps, you can start using`console.log` in function calls or the like to see that things work.

Should it still feel completely impossible, you can look at the suggestions below, but note that these will not give you a complete solution to the task, but now it is up to you to apply the _basics_ of JavaScript to solve the task.

### Suggestions for steps to try:

X - Define some words for the player to guess in the `wordList` array.
X - Use `document.querySelector ()` to retrieve the "Start Game" button in the DOM, store it in the `startGameBtnEl` variable.
X - Create an event listener for the button (`.addEventListener ('click', callbackFn)`).
X - Create a callback function `startGame ()` for the event listener, this function should start the game. It does this by calling on other functions:

X 1. Create a function, call it `generateRandomWord()`

     - Inside this function return a random word from the array of words (`wordList`):

     ```js
     wordList[Math.floor(Math.random() * wordList.length)];
     ```

X 2. Create a function, name it `createLetterBoxes()`.

X - Within this function:
X   - Use `document.querySelector()` to retrieve `#letterBoxes > ul`, store it in the        variable `letterBoxEls`.
    - Based on the length in `selectedWord`(loop/iterate):
      - create a new `<li>`- the element contains an `<input>`
    - Use `.appendChild()` to add the created element inside `letterBoxEls`

---

What you need to do now is to get the following functionality on your own:

- Listen to clicks on all letter buttons
- Write a callback that handles when the player presses all the letter keys

  - In that callback, a few things need to happen:

    1. Kolla värdet på bokstavsknappen som spelaren tryckte på och jämför det med alla bokstäverna i `selectedWord`. _Observera att bokstäver ska kunna förekomma flera gånger_.
    2. _Nedan beskrivs förslag på beslutskedjan_:
       - Om bokstaven finns och användaren inte har gissat alla bokstäverna rätt:
         1. Deaktivera bokstavsknappen som spelaren tryckte på
         2. Leta upp i vilken position (index) i ordet som bokstaven förekommer
         3. Sätt attributet `value` på elementet i indexet som motsvarar positionen från steg 2 inuti i arrayen `letterBoxEls[positionOfGuessedLetter].value = ...`

    - Om bokstaven finns och användaren har gissat _alla_ bokstäverna rätt:
      - Visa meddleande i `msgHolderEl` om att användaren har vunnit och låt dem börja om spelet (här får man _inte_ använda `location.reload()` utan det ska gå att programmatiskt starta om spelet igen)

    b) Om bokstaven inte finns och användaren inte har gissat 6 gånger: 1. Inkrementera `guesses` 2. Sätt `hangmanImg` till att vara en sträng som består av:
    `images/h{guesses}.png` 3. Använd `document.querySelector` för att hitta `<img>`-taggen och sätt dess `src` egenskap att vara lika med `hangmanImg`.

    - Om bokstaven _inte_ finns och användaren har gissat 6 gånger:
      - Sätt `msgHolderEl` visa meddelande om att användaren har förlorat och låt dem börja om spelet (här får man _inte_ använda `location.reload()` utan det ska gå att programmatiskt starta om spelet igen)

---

## För dig som strävar efter högre betyg

1. Börja om från scratch med egen styling och HTML samt JS.
2. I så stor utsträckning som möjligt visa på att du förstår begreppen med globala/lokala variabler, scopes, closures, events, iteration, konditionsblock, inbyggda metoder m.m. etc.
3. _Bonus_: implementera stöd för tangenbordsgissning, eller kanske rentav gissa med mikrofonen eller någon annan tokig lösning!
