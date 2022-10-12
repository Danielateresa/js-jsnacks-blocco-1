/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga */

const firstWord = prompt('scrivi una prima parola');
const secondWord = prompt('scrivi una seconda parola');

const firstWordsize = firstWord.length;
console.log(firstWordsize);
const secondWordsize = secondWord.length;
console.log(secondWordsize);
const h1El = document.querySelector('h1');

if (firstWordsize > secondWordsize) {
    console.log('la prima parola è più lunga ', firstWordsize);
    h1El.insertAdjacentHTML('beforeend', 'la prima parola è più lunga ', firstWordsize);

} else if (firstWordsize < secondWordsize) {
    console.log('la seconda parola è più lunga ', secondWordsize);
    h1El.insertAdjacentHTML('beforeend', 'la seconda parola è più lunga ', secondWordsize);

} else {
    console.log('le due parole hanno la stessa lunghezza ', firstWordsize, secondWordsize);
    h1El.insertAdjacentHTML('beforeend', 'le due parole hanno la stessa lunghezza ', firstWordsize, secondWordsize);
}