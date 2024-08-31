// after fix

// Variables

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const result = document.querySelector(".result");

let humanStat = document.querySelector(".player-stat");
let computerStat = document.querySelector(".computer-stat");
const cleanBtn = document.querySelector(".clean");

let humanScore = 0;
let computerScore = 0;
// Functions

rockBtn.addEventListener("click", function () {
  player.innerText = "Rock";
  getComputerChoice();
  clash();
   numbers();
});

paperBtn.addEventListener("click", function () {
  player.innerText = "Paper";
  getComputerChoice();
  clash();
   numbers();
});

scissorsBtn.addEventListener("click", function () {
  player.innerText = "Scissors";
  getComputerChoice();
  clash();
   numbers();
});

function getComputerChoice() {
  let rand = Math.floor(Math.random() * 3);

  if (rand == 0) {
    computer.innerText = "Rock";
  } else if (rand == 1) {
    computer.innerText = "Scissors";
  } else if (rand == 2) {
    computer.innerText = "Paper";
  }

  return computer;
}

function clash() {
  if (computer.innerText == player.innerText) {
    result.innerText = "draw";
  } else if (computer.innerText == "Scissors" && player.innerText == "Rock") {
    result.innerText = "you win";
  } else if (computer.innerText == "Rock" && player.innerText == "Scissors") {
    result.innerText = "you loose";
  } else if (computer.innerText == "Rock" && player.innerText == "Paper") {
    result.innerText = "you win";
  } else if (computer.innerText == "Paper" && player.innerText == "Rock") {
    result.innerText = "you loose";
  } else if (computer.innerText == "Paper" && player.innerText == "Scissors") {
    result.innerText = "you win";
  } else if (computer.innerText == "Scissors" && player.innerText == "Paper") {
    result.innerText = "you loose";
  }

  console.log(`computerScore ${computerScore}`);
  console.log(`humanScore ${humanScore}`);
  return result;
}

function numbers() {
  if (result.innerText == "you loose") {
    return (computerScore+1);
  } else if (result.innerText == "you win") {
    return (humanScore+1);
  }
}

computerStat.innerText = `computerScore ${computerScore}`;
humanStat.innerText = `humanScore ${humanScore}`;

cleanBtn.addEventListener("click", function () {
  humanScore = 0;
  computerScore = 0;
});
