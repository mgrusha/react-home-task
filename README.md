This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

# Dzień 1 - zadania domowe

### Zadanie 1 - `js/task01.js`

W pliku `js/task0a.js` znajduje się komponent `UpperCaseText` służący do zmiany liter na wielkie.

Jest on napisany w sposób funkcyjny. Przepisz go na działającą klasę ES6.

---

### Zadanie 2 - `js/task02.js`

Stwórz komponent `AnotherColor`, który przechowuje kolor do wyświetlenia jako **stan lokalny**. Niech kolor będzie domyślnie nastawiony na "yellow".

Komponent ma wyrenderować ten element `div` z tłem ustawionym na to ze stanu lokalnego.

Dodaj do swojego komponentu timer, który po 5 sekundach zmieni ten kolor na "blue". **Pamiętaj aby zrobić to w odpowiedniej metodzie cyklu życia, pamiętaj aby zwolnić zasoby.**

---

### Zadanie 3 - `js/task03.js`

Stwórz komponent o nazwie `TrafiicLights`. Przechowuje on w stanie lokalnym numer światła do wyświetlenia od 1 do 4. Domyślnie jest to 1. Do `props` przyjmuje wartości:

- `redTime` (długość, z jaką ma się wyświetlać pierwsze światło - czerwone - w sekundach);
- `yellowTime` (długość, z jaką ma się wyświetlać drugie i czwarte światło - czerwone/żółte oraz samo żółte - w sekundach);
- `greenTime` (długość, z jaką ma się wyświetlać trzecie światło - zielone - w sekundach).

Komponent powinien wyświetlać w elemencie `div` trzy kolejne `div`-y z wysokością i szerokością ustawioną na 100px i `border-radius` ustawionym na 50%. W zależności od tego, które światło powinno świecić, każdy z trzech wewnętrznych elementów `div` ma tło albo czarne (wyłączone) albo o odpowiednim kolorze (włączone, poniżej kolory).

Światła powinny działać w następujący sposób i w takiej kolejności:

![Zadanie 3 światła](img/task03.jpg "Zadanie 3 światła")

Dodaj odpowiednie timery / interval do swojego komponentu, który po liczbie sekund określonej w props zmieni odpowiednie światło zgodnie z kolejnością. **Pamiętaj aby zrobić to w odpowiedniej metodzie cyklu życia, pamiętaj aby zwolnić zasoby.**
