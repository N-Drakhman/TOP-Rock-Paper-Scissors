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
  //   console.log(result)
  console.log(computer.innerText == player.innerText);
  return result;
}
