//  chi tra pc e utente ha ricavato il numero random più alto
button.addEventListener('click',
  function (){
    var giocatore = Math.floor(Math.random() * 6) + 1;
    console.log("Hai fatto: ", giocatore);
    var banco = Math.floor(Math.random() * 6) + 1;
    console.log("Tu hai fatto: ", banco);

    document.getElementById('giocatore').innerHTML = "Giocatore: " + giocatore;
    document.getElementById('banco').innerHTML = "Banco: " + banco;

    if (giocatore > banco) {
      document.getElementById('esito').innerHTML = "Complimenti, HAI VINTO!"
    } else if (banco > giocatore) {
      document.getElementById('esito').innerHTML = "Peccato, HAI PERSO!"
    } else {
      document.getElementById('esito').innerHTML = "Pareggio! Non vince nessuno!"
    }

})
