// devo avere due numeri random tra 1 e 6 assegnati rispettivamente ad utente e pc,
// devo paragonare questi numeri e dichiarare chi ha avuto il numero più alto


//trovo i due numeri random e li associo a 2 variabili utente e pc
//utente
var giocatore = Math.floor(Math.random() * 6) + 1;

//pc
var banco = Math.floor(Math.random() * 6) + 1;

// mostro sul browser l'output di queste due variabili
document.getElementById('giocatore').innerHTML = "Giocatore: " + giocatore;
document.getElementById('banco').innerHTML = "Banco: " + banco;

//  chi tra pc e utente ha ricavato il numero random più alto
if(giocatore > banco){
  document.getElementById('esito').innerHTML = "Complimenti! Hai vinto!";
}
else if(banco > giocatore) {
  document.getElementById('esito').innerHTML = "Peccato, HAI PERSO!";
}
else {
  document.getElementById('esito').innerHTML = "Pareggio! Non vince nessuno!";
}
