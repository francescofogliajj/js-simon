// Un alert espone 5 numeri casuali diversi.
var numeriComputer = [];

while (numeriComputer.length < 5) {
  var numeroCasuale = numeroRandom(1, 100);

  if (numeriComputer.includes(numeroCasuale) == false) {
    numeriComputer.push(numeroCasuale);
  }

}

console.log(numeriComputer);
alert("I numeri da ricordare sono " + numeriComputer);

// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
setTimeout(timer, 30000);

var numeriRicordati = [];

function timer() {

  for (var i = 1; i <= 5; i++) {

    var numeroUtente = parseInt(prompt("Inserisci un numero che ha visto precedentemente"));

     if (numeriComputer.includes(numeroUtente)) {
       numeriRicordati.push(numeroUtente);
    }

  }

// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
  console.log(numeriRicordati);
  alert("Hai ricordato " + numeriRicordati.length + " numeri che sono " + numeriRicordati);
}

// Funzioni---------------------------------------------------------------------
function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
