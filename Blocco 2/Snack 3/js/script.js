
/*
Generatore di “nomi cognomi” casuali: prendendo una lista
di nomi e una lista di cognomi, Gatsby vuole generare una
falsa lista di 3 invitati.
*/


var cognomi = ["Inzaghi", "Morbidozzi", "Lardi", "Peloncini", "Mammalucchi"];
var nomi = ["Tommaso", "Bobby", "Mimmo", "Tony", "Rigoberto"];
var invitati = []
var nomeCasuale = 0;
var j=0;
var r=0;

for (var i = 0; i < 3; i++){

  j = Math.floor(Math.random() * nomi.length);
  r = Math.floor(Math.random() * cognomi.length);
  nomeCasuale = nomi[j] + " " + cognomi[r];

  invitati.push(nomeCasuale);

  console.log(nomeCasuale);
  document.getElementById('lista').innerHTML += "<li>" + nomeCasuale + "</li>";
}

console.log(invitati);
