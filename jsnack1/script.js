/*L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.*/

const userNumber1 = prompt('inserisci il primo numero');
const userNumber2 = prompt('inserisci il secondo numero');

if (userNumber1 > userNumber2) {
    console.log(userNumber1);
} else {
    console.log(userNumber2);
}