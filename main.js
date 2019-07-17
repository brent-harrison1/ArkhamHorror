//below function for roll the dice button for dice simulator

function rollDice() {
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

//below function is for the reset button to refresh page

function refreshPage() {
  window.location.reload();
}
