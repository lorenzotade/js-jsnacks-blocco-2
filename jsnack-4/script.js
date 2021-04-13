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