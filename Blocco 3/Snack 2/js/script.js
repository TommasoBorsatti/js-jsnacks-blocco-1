

/*Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
2 step:
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
3 step:
Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

function randomizer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}




var squadra1 = {
  nome: "morbidozzi virtus",
  falliSubiti: 0,
  puntiFatti: 0
};

var squadra2 = {
  nome: "polisportiva ciccini",
  falliSubiti: 0,
  puntiFatti: 0
};

var squadra3 = {
  nome: "boboni ultras",
  falliSubiti: 0,
  puntiFatti: 0
};

var squadra4 = {
  nome: "sporting lardi",
  falliSubiti: 0,
  puntiFatti: 0
};


var squadre = [squadra1, squadra2, squadra3, squadra4];


var listaFinale = [];

for (var i = 0; i < squadre.length; i++) {
  squadre[i].falliSubiti = randomizer(0,20);
  squadre[i].puntiFatti = randomizer(0,15);
  listaFinale.push({
    nome: squadre[i].nome,
    falliSubiti: squadre[i].falliSubiti
  });

}

console.log(listaFinale);
