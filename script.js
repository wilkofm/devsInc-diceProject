document.getElementById("rollButton").addEventListener("click", function () {
  const diceType = document.getElementById("diceType").value;
  let max = 6;
  if (diceType === "D10") {
    max = 10;
  }
  const randomNumber = Math.floor(Math.random() * max) + 1;
  document.getElementById(
    "result"
  ).textContent = `You rolled ${randomNumber}!`;
});
