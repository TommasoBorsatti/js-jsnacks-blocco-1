
/* Inserisci un numero, se è pari stampa il numero, se è dispari
stampa il numero successivo
*/



var numero = 0;

do {

  numero = parseInt(prompt("Inserisci qui un numero, grazie:"));

} while (isNaN(numero));

if (numero % 2 == 1) {

  console.log(numero);
  document.getElementById("risultato").innerHTML = "In base al numero scelto, io stampo il numero: " + numero;

}

else{
  console.log(numero + 1);
  document.getElementById("risultato").innerHTML = "In base al numero scelto, io stampo il numero: " + (numero + 1);
}
