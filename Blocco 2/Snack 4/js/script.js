
/*
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari.
*/

alert("Questo programma è in grado di esaminare i numeri di una lista predefinita e determinare se sono in posizione dispari. In secondo luogo li somma tra loro.")

var numeri = [1, 2, 3, 4, 5, 8, 25, 42, 53, 81, 100];
var numeriDispari =  [];
var sommaDispari = 0;

for (var i = 0; i < numeri.length; i++){

  if ((i + 1) % 2 == 1) {
    numeriDispari.push(numeri[i]);
    sommaDispari += numeri[i];
  }

}

console.log(numeri);
console.log(numeriDispari);
console.log(sommaDispari);

document.getElementById('lista').innerHTML = "I numeri definiti sono: " + numeri;
document.getElementById('lista-2').innerHTML = "Tra loro, i numeri in posizione dispari sono: " + numeriDispari + " e la loro somma è: " +  sommaDispari;
