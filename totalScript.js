/********** JSNACK 1 **********/

/* METODO CON FOR */

// inizializzo una variabile somma
var sommaFor = 0;

// con un ciclo for che gira 5 volte chiedo all'utente di inserire un numero e ogni volta lo sommo al precedente
for (i = 0; i < 5; i++) {
  var numUtenteFor = parseInt(prompt("Inserisci un numero:"));
  sommaFor += numUtenteFor;
}

// stampo a video la somma
console.log("===== FOR =====");
console.log("La somma dei numeri inseriti è " + sommaFor);

/* METODO CON WHILE */

// inizializzo una variabile somma e un contatore
var sommaWhile = 0;
var counter = 0;

// con un ciclo while che gira fino a quando il contatore è inferiore a 5, chiedo all'utente di inserire un numero e ogni volta lo sommo al precedente. Poi aumento il contatore di 1
while (counter < 5) {
  var numUtenteWhile = parseInt(prompt("Inserisci un numero:"));
  sommaWhile += numUtenteWhile;
  counter++;
}

// stampo a video la somma
console.log("===== WHILE =====");
console.log("La somma dei numeri inseriti è " + sommaWhile);

/********** JSNACK 2 **********/

// chiedo all'utente di inserire un numero e lo salvo in una variabile
var numUtente = parseInt(prompt("Inserisci un numero:"))

// controllo se il numero è pari: se è così lo stampo a video, mentre se è dispari stampo il successivo
if (numUtente % 2 == 0) {
  console.log("Il tuo numero è pari, eccolo: " + numUtente);
} else {
  console.log("Il tuo numero è dispari, non ci piace. Eccoti il successivo: " + (numUtente+1));
}

/********** JSNACK 3 **********/

// creo due array e li popolo uno con nomi e l'altro con cognomi
var nomi = ["Silvio", "Romano", "Mario", "Giuliano", "Gianfranco", "Ignazio", "Gianni", "Roberto", "Giulio", "Walter", "Giorgio", "Pier Luigi", "Umberto", "Roberto", "Massimo", "Francesco", "Enrico", "Emma", "Daniela", "Guido", "Renato", "Mara", "Giorgia", "Giuseppe"];

var cognomi = ["Berlusconi", "Prodi", "Borghezio", "Ferrara", "Fini", "La Russa", "Letta", "Maroni", "Tremonti", "Weltroni", "Napolitano", "Bersani", "Bossi", "Calderoli", "D'Alema", "Rutelli", "Letta", "Bonino", "Santanché", "Bertolaso", "Brunetta", "Carfagna", "Meloni", "Cossiga"];

// creo un ciclo for che giri tre volte
for (var i = 0; i < 3; i++) {
  // per ogni giro genero due numeri random con valore compreso tra 0 e lunghezza degli array
  var indiceNomi = Math.floor(Math.random() * nomi.length);
  var indiceCognomi = Math.floor(Math.random() * cognomi.length);

  // per ogni giro stampo una coppia nome-cognome random
  console.log("Invitato n. " + (i+1) + ": " + nomi[indiceNomi] + " " + cognomi[indiceCognomi]);
}

/********** JSNACK 4 **********/

// creo un array di numeri interi
var numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var somma = 0;

// creo un ciclo for che percorra l'array
for (var i = 0; i < numeri.length; i++) {
  // se l'indice dell'array è dispari allora somma il numero
  if (i % 2) {
    somma += numeri[i];
  }
}

// stampo a video la somma
console.log("La somma dei numeri con indice dispari nell'array è: " + somma);