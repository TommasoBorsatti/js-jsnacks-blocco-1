

// SStampa le potenze di 2 fino a 1000.

var risultato = 0;

for (i = 0; risultato < 1000; i++){
  risultato = Math.pow(2, i);
  console.log(risultato);
  document.getElementById("lista").innerHTML += "<li>" + risultato + "</li>";

}
