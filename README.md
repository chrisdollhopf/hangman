# Uppgift - Hangman

Den här uppgiften går ut på att individuellt implementera ett populärt rudimentärt spel i JavaScript - "hänga gubbe". Som stöd kommer det finnas kod och en struktur att utgå ifrån vilken du kan ta till hjälp när du ska lösa uppgiften.

Hänga gubbe, är ett spel där det ord slumpas fram. Spelaren gissar sedan vilka bokstäver som ordet innehåller, för varje fel svar ritas en del av "hänga gubbe"-bilden upp. Om spelaren gissar fel tillräckligt många gånger och gubben har blivit "hängd" så har spelaren förlorat. Lyckas däremot spelaren gissa alla bokstäver så vinner spelaren.

## Svårt att komma igång?
Det viktigaste är att greppa alla saker som behöver ske för att kunna spela spelet.

Innan du tittar på förslagen nedan, försök spela hänga gubbe lite - antingen själv eller med någon kamrat och så försöker ni lista alla aktiviteter som behöver ske.

Börja sedan titta i `index.html` och `script.js` för att få grepp om vilka saker som behöver kopplas ihop. Det vill säga, vilka element vilka vi ska kunna lyssna på specifika events för.

I `scripts.js` ligger där förslag på olika variabler och förslag på vilka funktioner som behövs för att kunna lösa uppgiften. Allt i `script.js` är endast förslag och är inte tvunget att användas. Men om du känner dig osäker är det en god idé att försöka bibehålla det mesta däri.

Om du fortfarande inte vet hur du ska börja så försök igen låtsas som att allt redan fungerar när du öppnar upp `index.html` i webbläsaren. Om det hjälper kan du börja använda `console.log` i funktionsanrop eller dylikt för att se att saker och ting fungerar.

Skulle det nu fortfarande kännas helt omöjligt kan du kika på förslagen nedan, notera dock att dessa inte kommer ge dig en fullständig lösning på uppgiften utan nu är det upp till dig att tillämpa _grunderna_ i JavaScript för att lösa uppgiften.

### Förslag på steg att prova

- Definiera lite ord som spelaren ska gissa på i arrayen `wordList`.
- Använd `document.querySelector()` för att hämta knappen "Starta Spelet" i DOM, lagra den i `startGameBtnEl` variabeln.
- Skapa en event-lyssnare för knappen (`.addEventListener('click', callbackFn)`).
- Skapa en callback-funktion `startGame()` för event-lyssnaren, denna funktion ska starta spelet. Det gör den genom att ropa på andra funktioner:
  1. Skapa en funktion, kalla den för `generateRandomWord()`
      - Inuti denna funktion returnera ett slumpat ord ur arrayen av ord (`wordList`):

      ```js
        wordList[Math.floor(Math.random()*wordList.length)];
      ```
  2. Skapa en funktion, kalla den för `createLetterBoxes()`
    - Inuti denna funktion:
      - Använd `document.querySelector()` för att hämta `#letterBoxes > ul`, lagra det i variablen `letterBoxEls`.
      - Baserat på längden i `selectedWord` (loopa/iterera):
        - skapa ett nytt `<li>`-element innehåller en `<input>`
      - Använd `.appendChild()` för att lägga till det skapade elementet inuti `letterBoxEls`
---

Det du måste göra nu är att på egen hand få rätt på följande funktionalitet:

- Lyssna på klick på alla bokstavsknappar
- Skriv en callback som hanterar när spelaren trycker på alla bokstavsknappar
  - I den callbacken behöver det ske lite saker:
    1. Kolla värdet på bokstavsknappen som spelaren tryckte på och jämför det med alla bokstäverna i `selectedWord`. _Observera att bokstäver ska kunna förekomma flera gånger_.
    2. _Nedan beskrivs förslag på beslutskedjan_:
        - Om bokstaven finns och användaren inte har gissat alla bokstäverna rätt:
          1. Deaktivera bokstavsknappen som spelaren tryckte på
          2. Leta upp i vilken position (index) i ordet som bokstaven förekommer
          3. Sätt attributet `value` på elementet i indexet som motsvarar positionen från steg 2 inuti i arrayen `letterBoxEls[positionOfGuessedLetter].value = ...`

      - Om bokstaven finns och användaren har gissat _alla_ bokstäverna rätt:
        - Visa meddleande i `msgHolderEl` om att användaren har vunnit och låt dem börja om spelet (här får man _inte_ använda `location.reload()` utan det ska gå att programmatiskt starta om spelet igen)

      b) Om bokstaven inte finns och användaren inte har gissat 6 gånger:
        1. Inkrementera `guesses`
        2. Sätt `hangmanImg` till att vara en sträng som består av:
          `images/h{guesses}.png`
        3. Använd `document.querySelector` för att hitta `<img>`-taggen och sätt dess `src` egenskap att vara lika med `hangmanImg`.

      - Om bokstaven _inte_ finns och användaren har gissat 6 gånger:
         - Sätt `msgHolderEl` visa meddelande om att användaren har förlorat och låt dem börja om spelet (här får man _inte_ använda `location.reload()` utan det ska gå att programmatiskt starta om spelet igen)

---

## För dig som strävar efter högre betyg

1. Börja om från scratch med egen styling och HTML samt JS.
2. I så stor utsträckning som möjligt visa på att du förstår begreppen med globala/lokala variabler, scopes, closures, events, iteration, konditionsblock, inbyggda metoder m.m. etc.
3. *Bonus*: implementera stöd för tangenbordsgissning, eller kanske rentav gissa med mikrofonen eller någon annan tokig lösning!