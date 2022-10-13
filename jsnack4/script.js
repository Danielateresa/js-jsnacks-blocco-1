/* In un array sono contenuti i nomi degli invitati alla festa
 del grande Gatsby, chiedi all’utente il suo nome e 
comunicagli se può partecipare o no alla festa. */


const guests = [
    'Francesco',
    'Daniela',
    'Luca',
    'Adriana'
]

const userName = prompt('Scrivi il tuo nome');

let canJoin;
let i = 0;
while (i < guests.length) {
    let singleGuest = guests[i];
    i++
    if (singleGuest == userName) {
        canJoin = true;
    }

}

if (canJoin) {
    console.log('puoi partecipare');
} else {
    console.log('non sei tra gl iinvitati');
}
