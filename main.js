//below function for roll the dice button for dice simulator

function rollDice() {
  //below adds class to end results section to alter styling for images
  var changeResultCss = document.getElementById("end-results");
  if(changeResultCss) {
    changeResultCss.className += "end-results-after";
  }

  let numDice = document.getElementById("diceNum").value;
  let successMin = 5;
  let blessedOption = document.getElementById("blessed");
  let cursedOption = document.getElementById("cursed");
  let totalSuccesses = 0;

  if (blessedOption.checked) {
    successMin = 4;
  } else if (cursedOption.checked) {
    successMin = 6;
  }

  for (var i = 0; i < numDice; i++) {
    let diceRoll = Math.floor(Math.random() * 6) + 1;

    let img = document.createElement("img");
    img.src = "images/d" + diceRoll + ".gif";

    if (diceRoll >= successMin) {
      img.className += "successRoll";
      totalSuccesses += 1;
    } else {
      img.className += "failedRoll";
    }

    let src = document.getElementById("dice-img-results");
    src.appendChild(img);
  }

  document.getElementById("num-success").innerHTML =
    totalSuccesses + " successes!!!";

  document.getElementById("rollDiceBtn").onclick = function() {
    this.disabled = true;
  };
}

function refreshPage () {
  window.location.reload();
}

//Below is for the random quote section on main page

function randomQuote() {
  let quote1 = '"In his house at R\'lyeh dead Cthulhu waits dreaming.” ― H.P. Lovecraft, The Call of Cthulhu';
  let quote2 = '“We live on a placid island of ignorance in the midst of black seas of infinity, and it was not meant that we should voyage far.” ― H. P. Lovecraft, The Call of Cthulhu';
  let quote3 = '“I have looked upon all the universe has to hold of horror, and even the skies of spring and flowers of summer must ever afterward be poison to me.” ― H.P. Lovecraft, The Call of Cthulhu';
  let quote4 = '“The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown” ― H.P. Lovecraft, Supernatural Horror in Literature';
  let quote5 = '“I have seen the dark universe yawning where the black planets roll without aim, Where they roll in their horror unheeded, Without knowledge, or lustre, or name.” ― H. P. Lovecraft, Nemesis';
  let randQuote;
  let randNum = Math.floor(Math.random() * 5) + 1;

  if (randNum === 1) {
    randQuote = quote1;
  } else if (randNum === 2) {
    randQuote = quote2;
  } else if (randNum === 3) {
    randQuote = quote3;
  } else if (randNum === 4) {
    randQuote = quote4;
  } else {
    randQuote = quote5;
  }

  document.getElementById("rand-quote-p").innerHTML = randQuote;
}