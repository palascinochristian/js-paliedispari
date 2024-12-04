
// Creo una funzione che generi un numero random 

function randomNum(min, max) {
    const cpuNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return cpuNum;
}

// Creo una funzione che verifichi se un numero è pari (true) o dispari (false)

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

// Chiedo all'utente di scegliere tra pari e dispari ( + verifica)

let userChoice = prompt("Scegli tra pari o dispari").toLowerCase();
// Se l'utente inserisce qualcosa che sia diverso sia da pari o dispari lo costringo
// con un ciclo a inserire il valore corretto
while (userChoice !== "pari" && userChoice !== "dispari") {
    userChoice = prompt("Scelta non valida. Scegli tra pari o dispari").toLowerCase();
}

// Chiedo all'utente di scegliere un numero compreso tra 1 e 5 (+ verifica)

let userNum = Number(prompt("Inserisci un numero da 1 a 5"));
// Se l'utente inserisce un numero non compreso tra 1 e 5 , o non inserisce qualcosa che non sia un numero
//costringo con un ciclo a inserire il valore corretto
while (isNaN(userNum) || userNum < 1 || userNum > 5) {
    userNum = Number(prompt("Numero non valido. Inserisci un numero da 1 a 5"));
}

// Richiano la funzione per assegnare il numero random compreso tra 1 e 5 per la CPU

const cpuNum = randomNum(1, 5);

// Eseguo la somma del numero dell'utente e del numero della CPU

let sum = cpuNum + userNum;
console.log(sum)

// Utilizzo la funzione dentro un IF , se è pari (true) assegno "pari" a sumResult, altrimenti assegno "dispari" a sumResult.
let sumResult;
if (isEven(sum)) {
    sumResult = "pari"
} else {
    sumResult = "dispari"
}

// Se la scelta dell'utente coincide con il valore di SumResult allora vince, altrimenti perde.

if (sumResult === userChoice) {
    alert(`La somma dei numeri è ${sum}. È ${sumResult}; quindi hai vinto!`)
} else {
    alert(`La somma dei numeri è ${sum}. È ${sumResult}; quindi hai perso!`)
}

