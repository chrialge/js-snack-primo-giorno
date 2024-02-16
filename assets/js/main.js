console.log("ciao"); //string

/* 
esercizio 1: Dichiara una variabile chiamata number e assegnale il valore 100. Stampa il valore della variabile in console. 
*/

const number = 100; //variabile con valore number
console.log(number);//la console ci dara il valore della variabile

/*
esercizio 2: Dichiara una costante chiamata PI e assegnale il valore di 3.14. Stampa il valore della costante in console.
*/

let numberPi = 3.14;//variabile con valore number
console.log(numberPi);//la console ci dara il valore della variabile

/* 
esercizio 2b: Prova ad assegnare alla costante chiamata PI il valore di 3.1416. Sai dire cosa succede?
*/

numberPi = 3.1416;//variabile con valore number
console.log(numberPi);//la console ci dara il valore della variabile

// risposta: non va oltre le due cifre doppo la virgola.
// soluzione: usare come valore una stringa.
// soluzione per mostralo

numberPi = 31416e-4;//variabile con valore number
console.log(numberPi);//la console ci dara il valore della variabile



/*
esercizio 2c:   + Dichiara una variabile chiamata radius e assegnale il valore 8.
                + Moltiplica radius x 2 e x PI e assegna il valore a una variabile di nome circle.
                + Stampa il valore della variabile circle in console.
 */

const radius = 8;//variabile con valore number
const circle = (radius * 2) * numberPi;//variabile con valore number con operazione
console.log(circle);//la console ci dara il valore della variabile

/*
esercizio 3:    + Dichiara una variabile chiamata name e
                + assegnale il valore "Carlo".
                + Successivamente, modifica il valore della variabile in "Marco".
                + Stampa il nuovo valore in console.

*/

let userName = "Carlo";//variabile con valore string
console.log(userName);//la console ci dara il valore della variabile

userName = "Marco";//variabile con valore string
console.log(userName);//la console ci dara il valore della variabile

/*
esercizio 4: Dichiara una variabile chiamata temperature e assegnale il valore 22.5. Successivamente, aumenta il suo valore di 5 e stampa il nuovo valore in console.
*/

let temperature = 22.5;
temperature = temperature + 5;
console.log(temperature);