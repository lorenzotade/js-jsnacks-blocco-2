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