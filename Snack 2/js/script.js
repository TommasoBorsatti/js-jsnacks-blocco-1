
/*
L’utente inserisce due parole in successione, con due
prompt. Il software stampa prima la parola più corta, poi la
parola più lunga.
*/

alert("WOW! Questo programma ti indica quale tra due parole scritte in successione è la parola più lunga")

/*
1. Chiediamo di inserire la prima parola con prompt e definiamo la prima  variabile parola.
Andiamo a prendere la prima lunghezza con il comando Length, e definiamola in quanto variabile.
*/

primaParola = prompt("Inserisci la prima parola!");
primaLunghezza = primaParola.length


/*
2. Chiediamo di inserire la secondo parola con prompt e definiamo la seconda variabile parola.
Andiamo a prendere la seconda lunghezza con il comando Length, e definiamola in quanto variabile.
*/

secondaParola = prompt("Molto bene: ora inserisci la seconda parola!");
secondaLunghezza = secondaParola.length

/*
3. Confrontiamo la prima variabile con la seconda. SE la prima è maggiore la stampiamo.
SE invece è minore stampiamo l'altra. Se i numeri sono uguali compare un messaggio.
*/


if (primaLunghezza > secondaLunghezza) {
  document.getElementById('risultato').innerHTML = ("La parola più lunga è la prima, ossia " + primaParola);
}

else if (primaLunghezza < secondaLunghezza) {
  document.getElementById('risultato').innerHTML = ("La parola più lunga è la seconda, ossia " + secondaParola);
}

else {
  document.getElementById('risultato').innerHTML = ("Hai scelto due parole della stessa lunghezza: sei un genio!")
}
