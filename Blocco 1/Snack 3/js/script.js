
/*
Il software deve chiedere per 10 volte all’utente di inserire
un numero. Il programma stampa la somma di tutti i numeri
inseriti.*/

alert("WOW! Questo programma riesce persino a sommare 10 numeri che scrivi uno di fila all'altro: prova un po'! ")

/*
1. Inizializzo un ciclo FOR con una variabile contatore i. La condizione di fine ciclo si innesta alla decima iterazione ( i < 10).
Inizializzo una variabile risultato che parte a valore 0
ogni volta che un numero viene inserito la variabile dato viene sommata a risultato; risultato += dato permette a risultato di non resettarsi
ma di sommare ogni nuovo dato a sé stesso.
Alla fine delle iterazioni risultato corrisponde al valore della somma.
*/

risultato = 0;

for (i = 0; i < 10; i++){
  var dato =  parseInt(prompt("Amico, scrivi il numero"));
  console.log(dato);
  // risultato = risultato + dato;
  risultato += dato
}

//2. il risultato finale è stampato in html
document.getElementById('risultato').innerHTML = ("Il risultato dei numeri sommati è:" + risultato);
