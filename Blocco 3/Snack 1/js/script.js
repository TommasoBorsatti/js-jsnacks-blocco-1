

//Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore


var bici1 = {
  marca: "morbidozzi",
  modello: "special",
  peso: 5000
};

var bici2 = {
  marca: "ciccini",
  modello: "deluxe",
  peso: 600
};

var bici3 = {
  marca: "boboni",
  modello: "extralusso",
  peso: 1500
};


var biciclette = [bici1, bici2, bici3];

console.log(biciclette);

var biciLeggera = biciclette[0];

for (var i = 1; i < biciclette.length; i++) {


  if (biciclette[i].peso < biciLeggera.peso) {
    biciLeggera = biciclette[i]
  }
}

console.log("la bici più leggera è la " + biciLeggera.marca);
