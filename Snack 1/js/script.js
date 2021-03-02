
/*
L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
*/

alert("WOW! Questo programma ti indica quale tra due numeri scritti in successione è il numero maggiore!")

/*
1. Chiediamo di inserire il primo numero con prompt e definiamo la prima variabile
*/

primoNumero = prompt("Inserisci il primo numero!");

/*
2. Chiediamo di inserire il secondo numero con prompt e definiamo la seconda variabile
*/

secondoNumero = prompt("Molto bene: ora inserisci il secondo numero!");

/*
3. Confrontiamo la prima variabile con la seconda. SE la prima è maggiore la stampiamo.
SE invece è minore stampiamo l'altra. Se i numeri sono uguali compare un messaggio.
*/

if (primoNumero > secondoNumero) {
  document.getElementById('risultato').innerHTML = ("il numero maggiore è il primo, ossia " + primoNumero);
}

else if (primoNumero < secondoNumero) {
  document.getElementById('risultato').innerHTML = ("il numero maggiore è il secondo, ossia " + secondoNumero);
}

else {
  document.getElementById('risultato').innerHTML = ("Hai scelto due numeri uguali: cosa ti costava leggere meglio?")
}
