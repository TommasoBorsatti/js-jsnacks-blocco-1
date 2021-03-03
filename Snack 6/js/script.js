

// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.

alert("Attenzione! Adesso ti indicherò di scrivere un numero!");

n = parseInt(prompt("Scrivi qui il numero: io ti indicherò il cubo di tutti in numeri che vanno da 0 al numero indicato"));
var numero;

for (i = 1; i <= n; i++){
  console.log(i*i*i);
  numero = (i*i*i);
  document.getElementById("lista").innerHTML += "<li>" + numero + "</li>"
}
