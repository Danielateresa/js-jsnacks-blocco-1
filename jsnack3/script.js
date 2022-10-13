/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

/* let sum = 0;
for (i = 0; i < 10; i++) {
    const userNumbers = Number(prompt('inserisci un numero'));
    sum += userNumbers;


}

console.log(sum); */


//ciclo while

let sum = 0;
let i = 0;
while (i < 10) {
    const userNumbers = Number(prompt('inserisci un numero'));
    i++
    sum += userNumbers;
    console.log(sum);

}



/* while (i < movies.length) {
    const movie = movies[i];

    console.log(movie);

    i++
} */

