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