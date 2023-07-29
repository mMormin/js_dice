/* Création de la div du dealer */
const dealerDiv = document.createElement("div");

/* Définition de la classe et de l'ID du dealer */
dealerDiv.classList.add("board");
dealerDiv.id = "dealer";

/* Append de la div dans le DOM aprés la div player */
document.getElementById("player").after(dealerDiv);

/* Demande à l'utilisateur de combien de Dés souhaite-t-il lancer */
let parsedResponse = parseInt(prompt("Combien de Dé(s) souhaites tu lancer ?"));

/* Génération du nombre de Dé(s) choisi par l'utilisateur */
for (let i = 1; i <= parsedResponse; i++) {
  newDice(player, dealer);
}

/* Function générant un chiffre aléatoire entre 1 et 6 */
function randomInt(min = 1, max = 6) {
  return Math.round(Math.random() * (max - min) + min);
}

/* Function générant 1 Dé pour le player et/ou le dealer */
function newDice(player, dealer) {
  /* Création de la div avec comprennant les faces du Dé */
  const playerOneDice = document.createElement("div");
  const playerTwoDice = document.createElement("div");

  /* Association de classe */
  playerOneDice.classList.add("dice");
  playerTwoDice.classList.add("dice");

  /* Append de la div dans le DOM */
  player = document.getElementById("player").appendChild(playerOneDice);
  dealer = document.getElementById("dealer").appendChild(playerTwoDice);

  /* Création d'un tableau comprenant les Dés des joueurs */
  const playersDices = document.getElementsByClassName("dice");
  const playersDicesArray = Array.from(playersDices);

  /* Création du style pour chaque face du Dé */
  const style = document.createElement("style");
  style.innerHTML =
    ".dice__face-1 {background-position-x: 0;} .dice__face-2 {background-position-x: -100px;} .dice__face-3 {background-position-x: -200px;} .dice__face-4 {background-position-x: -300px;} .dice__face-5 {background-position-x: -400px;} .dice__face-6 {background-position-x: -600px;}";
  document.head.appendChild(style);

  /* Boucle pour affecter un Dé à chaque joueur */
  playersDicesArray.forEach(function (playerDice) {
    /* Génération du nombre du Dé */
    let faceNumber = randomInt();
    /* Association de chaque Dés à son style en fonction du résultat optenu */
    if (faceNumber === 1) {
      playerDice.classList.add("dice__face-1");
    } else if (faceNumber === 2) {
      playerDice.classList.add("dice__face-2");
    } else if (faceNumber === 3) {
      playerDice.classList.add("dice__face-3");
    } else if (faceNumber === 4) {
      playerDice.classList.add("dice__face-4");
    } else if (faceNumber === 5) {
      playerDice.classList.add("dice__face-5");
    } else if (faceNumber === 6) {
      playerDice.classList.add("dice__face-6");
    }
  });
}
