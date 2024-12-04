
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

// Chiedo all'utente di scegliere tra pari e dispari

const userChoice = prompt("Scegli tra pari o dispari");

// Chiedo all'utente di scegliere un numero compreso tra 1 e 5

const userNum = Number(prompt("Inserisci un numero da 1 a 5"));

// Richiano la funzione per assegnare il numero random compreso tra 1 e 5 per la CPU

const cpuNum = randomNum(1, 5);

// Eseguo la somma del numero dell'utente e del numero della CPU

let sum = cpuNum + userNum;
console.log(sum)

// Utilizzo la funzione , se è pari (true) assegno "pari" a sumResult, altrimenti assegno "dispari" a sumResult.
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

