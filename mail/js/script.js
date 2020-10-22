// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
//__________________________________________________________

//creo variabile convalida, sulla quale operare al momento del click dato che è un bottone di invio del testo presente nell'input di testo
var convalida = document.getElementById('convalida');

//creo un array di 6 email
var listaMail = ["uno@gmail.com", "due@gmail.com", "tre@gmail.com", "quattro@gmail.com", "cinque@gmail.com", "sei@gmail.com"];

//creo una variabile che rappresenta l'esito del mio controllo email nella lista
var esitoConvalida = document.getElementById('esitoConvalida');

// inizio il controllo
convalida.addEventListener( "click", function () {

  // mostro il value dell'elemento che ho inserito
  var emailInserita = document.getElementById('emailInserita').value;
  // imposto una variabile di base che afferma che non ho trovato riscontro con la lista
  var emailTrovata = false;
  // affermo che se invece la variabile di prima è presente nella lista, allora è vera
  for (var i = 0; i < listaMail.length; i++) {
    if (emailInserita == listaMail[i]) {
      emailTrovata = true;
    }
  }
  // se è vera esporto nel div "esitoConvalida" testohtml
  if (emailTrovata == true) {
    esitoConvalida.innerHTML = "Welcome!";
  }
  // se non è vera, esporterò nel div un altro testo
  else {
    esitoConvalida.innerHTML = "Get Out!";
  }

});
