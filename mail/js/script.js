//Creo la mia array di emails
const myEmails = ["fede180600@libero.it", "pinco.pallo@gmail.it", "panco.pinco@yahoo.it", "mio.cugggino@gmail.it"];
console.log(myEmails);
//Chiedo all'utente la sua email 
const userEmail = prompt("Inserisci la tua email");
console.log('Email utente', userEmail);
//Confronto la email dell'utente con quelle disponibili nella mia array (ciclo)
let emailFound = false;
for (let i = 0; i < userEmail.length; i++) {
    const thisEmail = myEmails[i];
    //Se l'email dell'utente corrisponde con una della mia array allora può eseguire l'accesso 
    if (thisEmail === userEmail) {
        emailFound = true;
    }
    console.log(userEmail, 'Può accedere?', emailFound);
}
console.log(emailFound);
//Se non corrisponde stampare un messaggio sull'esito del controllo