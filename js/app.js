/* Strings */
const playerNumberString = "Souhaites-tu jouer solo ou en versus ?";
const diceNumberString = "Combien de Dé(s) souhaites tu lancer ?";

/* Function de séléction du type de partie (solo ou versus) */
function gameMode() {
  /* Demande à l'utilisateur si il souhaite jouer seul ou contre le Dealer */
  let userResponse = prompt(playerNumberString);

  /* Sélection du mode solo ou versus */
  if (userResponse === "solo") {
    /* Demande à l'utilisateur combien de Dé(s) souhaite t'il lancer */
    let userDiceNumberResponse = parseInt(prompt(diceNumberString));

    /* Génération du nombre de Dé(s) choisi par l'utilisateur */
    for (let i = 1; i <= userDiceNumberResponse; i++) {
      /* Génération de Dé(s) pour le joueur */
      newDice(1);
    }
  } else if (userResponse === "versus") {
    /* Demande à l'utilisateur cb de dés */
    let userDiceNumberResponse = parseInt(prompt(diceNumberString));

    /* Création de la div du dealer */
    const dealerDiv = document.createElement("div");

    /* Définition de la classe et de l'ID du dealer */
    dealerDiv.classList.add("board");
    dealerDiv.id = "dealer";

    /* Append de la div dans le DOM aprés la div player */
    document.getElementById("player").after(dealerDiv);

    /* Génération du nombre de Dé(s) choisi par l'utilisateur */
    for (let i = 1; i <= userDiceNumberResponse; i++) {
      /* Génération de Dé(s) pour le joueur et le dealer */
      newDice(2);
    }
  } else if (isNaN(userResponse)) {
    return;
  } else {
    alert(
      `Je n'ai pas compris ta réponse. Ecrit "solo" si tu souhaites jouer seul ou "versus" si tu souhaites jouer contre le dealer !`
    );
    playersNumber();
  }
}

/* Function générant un chiffre aléatoire entre 1 et 6 */
function randomInt(min = 1, max = 6) {
  return Math.round(Math.random() * (max - min) + min);
}

/* Function générant 1 Dé pour le player et/ou le dealer en fonction du mode chosi */
function newDice(mode) {
  if (mode === 1) {
    /* Création de la div comprenant les faces du Dé */
    const playerDice = document.createElement("div");

    /* Association de la classe */
    playerDice.classList.add("dice");

    /* Append de la div dans le DOM */
    player = document.getElementById("player").appendChild(playerDice);
  } else if (mode === 2) {
    /* Création des divs comprenant les faces des Dés */
    const playerDice = document.createElement("div");
    const dealerDice = document.createElement("div");

    /* Association des classes */
    playerDice.classList.add("dice");
    dealerDice.classList.add("dice");

    /* Append des divs dans le DOM */
    player = document.getElementById("player").appendChild(playerDice);
    dealer = document.getElementById("dealer").appendChild(dealerDice);
  } else {
    mode === 1;
  }

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

gameMode();