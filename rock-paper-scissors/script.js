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

// 2
btnRock.addEventListener("click", function () {
  getComputerChoice();
  humanChoice.innerText = "rock";

  playRound(humanChoice.innerText, computerChoice.innerText);
  playGame();
});

btnPaper.addEventListener("click", function () {
  getComputerChoice();
  humanChoice.innerText = "paper";

  playRound(humanChoice.innerText, computerChoice.innerText);
  playGame();
});
btnScissors.addEventListener("click", function () {
  getComputerChoice();
  humanChoice.innerText = "scissors";

  playRound(humanChoice.innerText, computerChoice.innerText);

  playGame();
});

// 3 

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

// 4

function playGame() {
    round.innerText++;
  if (round.innerText == 5) {

btnRock.disabled = true;
btnPaper.disabled = true;
btnScissors.disabled = true;

    if (humanScore.innerText > computerScore.innerText){
        winner.innerText = `Game ended, you win`
    } else if (humanScore.innerText < computerScore.innerText){
        winner.innerText = `Game ended, you loose`;
    } else {
        winner.innerText = `Game ended, tie`;
    }

    setTimeout(()=> {
        humanScore.innerText = 0
        computerScore.innerText = 0
        drawScore.innerText = 0
        round.innerText = 0
        winner.innerText = "New Game!"
        btnRock.disabled = false;
        btnPaper.disabled = false;
        btnScissors.disabled = false;
    }, 2000)
  }
}