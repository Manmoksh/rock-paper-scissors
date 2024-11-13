let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
updateScore();

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";
  if (playerMove === "✊") {
    if (computerMove === "✊") {
      result = "Tie";
    } else if (computerMove === "✌️") {
      result = "You win";
    } else {
      result = "You lose";
    }
  } else if (playerMove === "🖐️") {
    if (computerMove === "🖐️") {
      result = "Tie";
    } else if (computerMove === "✌️") {
      result = "You lose";
    } else {
      result = "You win";
    }
  } else if (playerMove === "✌️") {
    if (computerMove === "✊") {
      result = "You lose";
    } else if (computerMove === "✌️") {
      result = "Tie";
    } else {
      result = "You win";
    }
  }
  if (result === "You win") score.wins += 1;
  else if (result === "You lose") score.losses += 1;
  else if (result === "Tie") score.ties += 1;
  updateScore();
  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(
    ".js-moves"
  ).innerHTML = `You <span class="icon">${playerMove}</span> v/s<span class="icon">${computerMove}</span> Computer`;
  localStorage.setItem("score", JSON.stringify(score));
}
function updateScore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
}
function pickComputerMove() {
  let computerMove = "";
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "✊";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "🖐️";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "✌️";
  }
  return computerMove;
}
function resetScore() {
  score.wins = score.losses = score.ties = 0;
  localStorage.removeItem("score");
  updateScore();
  document.querySelector(".js-result").innerHTML = "";
  document.querySelector(".js-moves").innerHTML = "";
}
