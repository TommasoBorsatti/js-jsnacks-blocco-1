
/*
Crea due array che hanno un numero di elememnti diversi.
Aggiungi elementi casuali all'array che ha meno elementi, fino a quando non ne avrà quanti l'altro.
*/

alert("Questo programma ti aiuta a fare la lista della spesa! Scrivi qui di seguito i nomi di alcuni prodotti da comprare: continuerò a chiederteli fino a quando non avrai scelto un numero di prodotti uguale a quello della lista che ho scritto io.");


var lista1 = [];
var lista2 = [ "Insalata", "Cavoli Rossi", "Zucca", "Formaggio", "Vino", "Finocchi"];
var prodotto = 0;

do {

  prodotto = prompt("Aggiungi altri elementi alla lista della spesa, scrivendoli qui:");
  lista1.push(prodotto);

} while (lista2.length > lista1.length);

console.log("Questi sono gli oggetti che hai scelto tu: " + lista1 + " la tua lista contiene esattamente: " + lista1.length + " prodotti!");
console.log(lista1);
console.log("Questi sono gli oggetti che ho scelto io: " + lista2 + " la mia lista contiene esattamente: " + lista1.length + " prodotti!");
console.log(lista2);

document.getElementById('lista-1').innerHTML = "Questi sono gli oggetti che hai scelto tu: " + lista1 + " la tua lista contiene esattamente: " + lista1.length + " prodotti!"
document.getElementById('lista-2').innerHTML = "Questi sono gli oggetti che ho scelto io: " + lista2 + " la mia lista contiene esattamente: " + lista1.length + " prodotti!"
