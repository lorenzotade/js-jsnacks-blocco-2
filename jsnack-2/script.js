// chiedo all'utente di inserire un numero e lo salvo in una variabile
var numUtente = parseInt(prompt("Inserisci un numero:"))

// controllo se il numero è pari: se è così lo stampo a video, mentre se è dispari stampo il successivo
if (numUtente % 2 == 0) {
  console.log("Il tuo numero è pari, eccolo: " + numUtente);
} else {
  console.log("Il tuo numero è dispari, non ci piace. Eccoti il successivo: " + (numUtente+1));
}