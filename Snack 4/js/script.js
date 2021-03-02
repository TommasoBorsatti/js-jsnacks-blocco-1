
/*
In un array sono contenuti i nomi degli invitati alla festa del
grande Inzaghi, chiedi all’utente il suo nome e comunicagli se
può partecipare o no alla festa.*/

alert("Vediamo se sei nel Team Inzaghi");

/*
1. Definisco l'Array lista con all'interno gli invitati. Lo stampo in console per ragioni di test.
   Definisco la variabile di controllo in posizione false.
*/

var controllo = false;
var lista = ["Salmo", "Mannoia", "Samuele", "Vasco"];
console.log(lista);

/*
2. Chiedo all'utente di scrivere il suo nome per vedere se è in lista.
*/

nome = prompt("Quale sarebbe il tuo nome, sentiamo?");

/*
3. Inizializzo un ciclo for definito lungo quanto la length dell'array. A ogni confronto, stampo in console il nome degli invitati in lista.
SE vi è almeno una corrispondenza tra il nome scritto nel prompt e uno degli indici degli array, la variabile di controllo diventa vera.
*/

for (i = 0; i < lista.length; i++){
  console.log(lista[i]);

  if (nome == lista[i]) {
    controllo = true;
  }
}

/*
4. Quando il ciclo è finito in base alla variabile di controllo, viene stampato un messaggio appropriato.
*/

if (controllo == true) {
  document.getElementById('risultato').innerHTML = ("Complimenti" + nome + ", sei un vero intenditore e per questo sei nel Team Inzaghi");

}

else {
  document.getElementById('risultato').innerHTML = ("Mi dispiace" + nome + ", non sei abbastanza figo per entrare nel Team Inzaghi. Apri la console per vedere chi può permetterselo.");
}
