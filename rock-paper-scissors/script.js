// Variables
const computerChoice = document.querySelector("#computer-choice");
const humanChoice = document.querySelector("#human-choice");

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

const humanScore = document.querySelector("#human-score");
const computerScore = document.querySelector("#computer-score");
const drawScore = document.querySelector("#draw");

const round = document.querySelector("#round");
const winner = document.querySelector("#round-winner");

// Functions
// 1
function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random == 0) {
    computerChoice.innerText = "rock";
  } else if (random == 1) {
    computerChoice.innerText = "paper";
  } else if (random == 2) {
    computerChoice.innerText = "scissors";
  }
  return computerChoice;
}

rockBtn.addEventListener("click", function () {
  getComputerChoice();
  player.innerText = "Rock";

  playRound(humanChoice.innerText, computerChoice.innerText);
});

paperBtn.addEventListener("click", function () {
  getComputerChoice();
  player.innerText = "Paper";

  playRound(humanChoice.innerText, computerChoice.innerText);
});

scissorsBtn.addEventListener("click", function () {
  getComputerChoice();
  player.innerText = "Scissors";

  playRound(humanChoice.innerText, computerChoice.innerText);
});

function playRound(human, computer) {
  console.log(`${humanChoice.innerText} vs. ${computerChoice.innerText}`);

  if (human == "scissors" && computer == "rock") {
    return computerScore.innerText++;
  } else if (human == "paper" && computer == "scissors") {
    return computerScore.innerText++;
  } else if (human == "rock" && computer == "paper") {
    return computerScore.innerText++;
  } else if (human == "rock" && computer == "scissors") {
    return humanScore.innerText++;
  } else if (human == "scissors" && computer == "paper") {
    return humanScore.innerText++;
  } else if (human == "paper" && computer == "rock") {
    return humanScore.innerText++;
  } else if (human === computer) {
    return drawScore.innerText++;
  }
}
