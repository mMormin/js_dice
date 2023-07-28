/* Création de la div du dealer */
const playerTwo = document.createElement("div");

/* Association de classe et de l'ID du dealer */
playerTwo.classList.add("board");
playerTwo.id = "dealer";

/* Append de la div dans le DOM aprés player */
document.getElementById("player").after(playerTwo);

////////////////////////////////////////////////////////////////////////////////////////////

/* Demande à l'utilisateur de combien de Dés souhaite-t-il */
let parsedResponse = parseInt(prompt("Combien de Dé(s) souhaites tu lancer ?"));

/* Génération d'un Dé en fonction de la réponse de l'utilisateur */
for (let i = 1; i <= parsedResponse; i++) {
  newDice();
}

/* Function un chiffre aléatoire entre 1 et 6 */
function randomInt(min = 1, max = 6) {
  return Math.round(Math.random() * (max - min) + min);
}

/* Function générant 1 Dé */
function newDice() {
  /* Création de la div avec comprennant les faces du Dé */
  const dice = document.createElement("div");

  /* Association de classe */
  dice.classList.add("dice");

  /* Append de la div dans le DOM */
  document.getElementById("player").appendChild(dice);
  document.getElementById("dealer").appendChild(dice);

  /* Création du style pour chaque face du Dés */
  const style = document.createElement("style");
  style.innerHTML =
    ".dice__face-1 {background-position-x: 0;} .dice__face-2 {background-position-x: -100px;} .dice__face-3 {background-position-x: -200px;} .dice__face-4 {background-position-x: -300px;} .dice__face-5 {background-position-x: -400px;} .dice__face-6 {background-position-x: -600px;}";
  document.head.appendChild(style);

  let faceNumber = randomInt();
  /* Association de chaque Dés à son style en fonction du résultat optenu */
  if (faceNumber === 1) {
    const faceOne = dice.classList.add("dice__face-1");
  } else if (faceNumber === 2) {
    const faceTwo = dice.classList.add("dice__face-2");
  } else if (faceNumber === 3) {
    const faceThree = dice.classList.add("dice__face-3");
  } else if (faceNumber === 4) {
    const faceFour = dice.classList.add("dice__face-4");
  } else if (faceNumber === 5) {
    const faceFive = dice.classList.add("dice__face-5");
  } else if (faceNumber === 6) {
    const faceSix = dice.classList.add("dice__face-6");
  }
}