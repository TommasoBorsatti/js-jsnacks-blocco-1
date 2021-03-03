

// Stampa le potenze di 2 fino a 1000.

alert("indica un numero : io stamperò tutti i cubi da 0 fino al numero indicato");

var n = parseInt(prompt("Scegli in numero"));


for (i = 0; i <= n; i++){
  risultato = Math.pow(i, 3);
  console.log(risultato);
  document.getElementById("lista").innerHTML += "<li>" + risultato + "</li>";
}
