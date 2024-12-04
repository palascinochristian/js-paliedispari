//Definisco una funzione che restituisca true se la parola inserita è palindroma , altrimenti false

function isPalindrome(word) {
    let wordReversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
        wordReversed = wordReversed + word[i]
    }
    if (wordReversed === word) {
        return true;
    }
    return false;
}

//Chiedo ad un'utente di inserire una parola
const word = prompt("Inserisci una parola")

//Se il risultato che mi restituisce la funzione è true allora dirò che è palindroma
if (isPalindrome(word)) {
    alert("La parola che hai inserito è palindroma!")
}
// Altrimenti dirò che non lo è
else {
    alert("La parola inserita non è palindroma!")
} 


