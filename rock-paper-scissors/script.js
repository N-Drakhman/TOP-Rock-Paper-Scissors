// before fix

// Variables

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const result = document.querySelector(".result");

// Functions

rockBtn.addEventListener("click", function () {
  player.innerText = "Rock";
  random();
  clash();
});

paperBtn.addEventListener("click", function () {
  player.innerText = "Paper";
  random();
  clash();
});

scissorsBtn.addEventListener("click", function () {
  player.innerText = "Scissors";
  random();
  clash();
});

function random() {
  let rand = Math.floor(Math.random() * 3);

  if (rand == 0) {
    computer.innerText = "Rock";
  } else if (rand == 1) {
    computer.innerText = "Scissors";
  } else if (rand == 2) {
    computer.innerText = "Paper";
  }

  console.log(computer);

  return computer;
}

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
