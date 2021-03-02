
/*
Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
un numero, se è dispari inseriscilo nell’array.*/

alert("Inserisci 6 numeri in successione; io prenderò solo quelli dispari!");

/*
1. Definisco l'Array vuoto lista . Lo stampo in console per ragioni di test.
   Definisco la variabile di controllo in posizione false.
*/

var lista = [];
console.log(lista);

/*
2. Inizializzo un ciclo for definito per 6 iterazioni. A ogni iterazione, eseguo un prompt per l'inserimento del numero.
SE il numero ha un modulo % diverso da 0, significa che è dispari e vado ad AGGIUNGERLO all'array lista con il comando PUSH.
*/

for (i = 0; i < 6; i++){
  var numero = parseInt(prompt("Scrivi numero scelto!"));
  console.log(numero;

  if (numero % 2 == 1) {
    lista.push(numero);
  }
}

/*
4. Quando il ciclo è finito in base alle scelte dell'utente, vengono stampati solo i numeri dispari.
*/

document.getElementById("risultato").innerHTML = "I numeri dispari sono " + lista ;
