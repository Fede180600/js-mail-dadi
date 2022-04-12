//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.Stabilire il vincitore, in base a chi fa il punteggio più alto.

//Genero un numero random per l'utente 
const userNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber);
//Genero un numero random per il computer
const computerNumber = Math.floor(Math.random() * 6) + 1;
console.log(computerNumber);
//Confronto i due numeri: se userNumber > computerNumber --> Winner: user; altrimenti winner: computer.
let result = "Che sfortuna hai perso!"

if (userNumber > computerNumber) {
    result = "Hai vinto complimenti!!"
} 

console.log(result);