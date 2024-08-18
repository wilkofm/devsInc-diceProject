document.getElementById("rollButton").addEventListener("click", function () {
  try {
    const diceType = document.getElementById("diceType").value;
    let max = 6;
    if (diceType === "D10") {
      max = 10;
    }
    const randomNumber = Math.floor(Math.random() * max) + 1;
    document.getElementById(
      "result"
    ).textContent = `You rolled ${randomNumber}!`;

    if (randomNumber > 10) {
      throw new Error("This is incorrect");
    }

    if (randomNumber < 1) {
      throw new Error("This is wrong");
    }
  } catch (e) {
    document.getElementById("result").textContent = `Error: ${e.message}`;
  }
});
