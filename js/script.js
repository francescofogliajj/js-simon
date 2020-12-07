$(document).ready(
  function() {

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

    var numeriUtente = [];

    var numeriRicordati = [];

    function timer() {

      while (numeriUtente.length < 5) {
        var numeroInserito = parseInt(prompt("Inserisci un numero che ha visto precedentemente"));

        while (numeroInserito < 1 || numeroInserito > 100 || isNaN(numeroInserito)) {
          numeroInserito = parseInt(prompt("Puoi inserire solo NUMERI tra 1 e 100"));
        }

        if (numeriUtente.includes(numeroInserito) == false) {
          numeriUtente.push(numeroInserito);
        } else {
          alert("Numero già inserito!");
        }

      }

      console.log(numeriUtente);

      for (var i = 0; i < numeriUtente.length; i++) {
        var numeroInseritoCorrente = numeriUtente[i];

        if (numeriComputer.includes(numeroInseritoCorrente) == true) {
          numeriRicordati.push(numeroInseritoCorrente);
        }

      }

    // Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
      console.log(numeriRicordati);
      alert("Hai ricordato " + numeriRicordati.length + " numeri che sono " + numeriRicordati);
    }

  }
);

// Funzione---------------------------------------------------------------------
function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
