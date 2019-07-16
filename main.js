//Need to create variables, functions (diceRoll()), and loops
//necessary to make dice-simulator.html take in all user input,
//and output correlating images of dice as results (also to state
//how many successes and failures (green and red respectively) based
//on the results and cursed/blessed conditions)

//document.querySelector('input[name="status"]:checked').value;
//NEED TO USE ABOVE QUERY SELECTOR WITH A CONDITIONAL SO THAT CURSED
//AND BLESSED SITUATIONS WILL HAVE DIFFERENT FUNCTIONS FOR OUTPUT
//THAN REGULAR ROLLS.

function rollDice() {
  let numDice = document.getElementById("diceNum").value;

  for (var i = 0; i < numDice; i++) {
    let diceRoll = Math.floor(Math.random() * 6) + 1;

    let img = document.createElement("img");
    img.src = "images/d" + diceRoll + ".gif";

    let src = document.getElementById("dice-img-results");
    src.appendChild(img);
  }
}
