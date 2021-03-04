
/* l software deve chiedere per 5 volte all’utente di inserire un
numero. Il programma stampa la somma di tutti i numeri
inseriti. Esegui questo programma in due versioni, con il for
e con il while.
*/


//Primo Metodo - Ciclo FOR:

var numero = 0;
var somma = 0;

for (var i = 0; i < 5; i++){

  numero = parseInt(prompt("Inserisci qui un numero, grazie:"));

    while (isNaN(numero)) {
      numero = parseInt(prompt("Non hai scritto un numero! Per favore, scrivi solo numeri:"));
    }

    somma += numero;
    console.log(numero);

}

console.log(somma);
document.getElementById("risultato").innerHTML = "La somma dei primi 5 numeri scelti è " + somma;


//Secondo Metodo - Ciclo WHILE:

var j = 0;
var totale = 0;

while (j < 5) {
  numero = parseInt(prompt("Inserisci qui un numero, per favore:"));

  while (isNaN(numero)) {
    numero = parseInt(prompt("Non hai scritto un numero! Per favore, scrivi solo numeri:"));
  }

  totale += numero;
  console.log(numero);
  j++;

}

console.log(somma);
document.getElementById("totale").innerHTML = "La somma degli altri 5 numeri scelti è " + totale;
