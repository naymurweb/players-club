// input value
function inputValue(inputId) {
  let input = document.getElementById(inputId);
  let inputValue = parseFloat(input.value);
  //   input field error
  if (isNaN(inputValue) || inputValue < 0) {
    input.style.border = "2px solid red";
  } else {
    return inputValue;
  }
}


// calculate button
document.getElementById("calculate").addEventListener("click", function () {
  let playerValue = inputValue("par-player");

  let players = document.getElementById("main-order");
  let playersValue = players.children.length;

  let totalPlayersAmount = playerValue * playersValue;

  let totalAmount = document.getElementById("total-amount");
  totalAmount.innerText = totalPlayersAmount;
});

// calculate total button
document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    let players = document.getElementById("total-amount");
    let playersAmountTotal = parseFloat(players.innerText);
    let managerAmount = inputValue("manager-input");
    let coachAmount = inputValue("coach-input");

    let totalAmount = playersAmountTotal + managerAmount + coachAmount;

    // set total amount
    let total = document.getElementById("total");
    total.innerText = totalAmount;
  });
