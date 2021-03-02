
/*
Il software deve chiedere per 10 volte all’utente di inserire
un numero. Il programma stampa la somma di tutti i numeri
inseriti.*/

alert("WOW! Questo programma riesce persino a sommare 10 numeri che scrivi uno di fila all'altro: prova un po'! ")

/*
1. Inizializzo un ciclo FOR con una variabile contatore i. La condizione di fine ciclo si innesta alla decima iterazione ( i < 10)
*/

risultato=0;

for (i = 0; i < 10; i++){
  var dato =  parseInt(prompt("Amico, scrivi il numero"));
  console.log(dato);
  // risultato = risultato + dato;
  risultato += dato
}

/*
2. Chiediamo di inserire la secondo parola con prompt e definiamo la seconda variabile parola.
Andiamo a prendere la seconda lunghezza con il comando Length, e definiamola in quanto variabile.
*/


/*
3. Confrontiamo la prima variabile con la seconda. SE la prima è maggiore la stampiamo.
SE invece è minore stampiamo l'altra. Se i numeri sono uguali compare un messaggio.
*/

document.getElementById('risultato').innerHTML = ("Il risultato dei numeri sommati è:" + risultato);
