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

let temperature = 22.5; //variabile con valore number
temperature = temperature + 5; //variabile con valore number con concatenazione
console.log(temperature);//la console ci dara il valore della variabile

/*
esercizio 5: Rispondete in un commento a più righe: Che differenza c'è tra il numero 3.14 e 100 sono diversi? Perchè? Che tipo di dato è uno e che tipo di dato è l'altro?

RISPOSTA: la prima differenza che uno e un numero intero l'atro decimale o float, il perche e visiva la seconda e per il peso un numero intero rispetto ad un numero decimale.

*/

/*
esercizio 6: Per scrivere dentro la nostra console utilizziamo la sua funzione .log() ma se scrivessimo console.info('Il mio messaggio') che differenza c'è? Perche?
 Esistono altri metodi da usare con console. ?
*/

console.info('Il mio messaggio');

/* tutte e due usano messaggi statici di output alla console ma info in firefoxmostra una piccola icona di i dopo gli oggetto di console.log ci sono altri 19 metodi per usare console oltre questo

 */

/*
esercizio 7: Scrivete un piccolo blocco di codice che utilizza un blocco if per vedere come var e let si comportano diversamente rispetto allo scope. Scrivete in un commento dopo i 2 console.log che cosa sta succedendo ... Avete capito ora che cos'è il Hoisting?

*/

if (true) {
    var variabileVar = "Sono definita con var";
    let variabileLet = "Sono definita con let";
}
console.log(variabileVar);
console.log(variabileLet);

/*succede che il var viene viene visualizzata sulla console mentre let no anzi ci esce errore e dice che let non e definita, cercano un po ho capito che tra le parentesi si chiama scope locale e in esso
il let non pue essere chimata al di fuori(scope globale) quindi se metto il console.log(variableLet)
dentro lo scope locale della variabile lo prende mentre il var non ha problemi puo essere richiamato fuori dal proprio scope locale. mentre l'hoisting ce solo per il var e sarebbe l'inalzzamento della variabile quindi se faccio un console.log sopra e sotto il var me lo visualizza ma il valore no.
*/