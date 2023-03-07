const btn = document.querySelectorAll(".btn.human");
const btnMachine = document.querySelectorAll(".btn.machine");
const values = ["rock", "paper", "scissor"];
let lastRound = document.querySelector(".result .last-round");
let yourScore = document.querySelector(".result .ur-score");
let machineScore = document.querySelector(".result .machine-score");
let playerScore = 0;
let computerScore = 0;
let round = 0;
const modal = document.querySelector("#modal");
let announceText = document.querySelector(".announce");
let announceNote = document.querySelector(".announce-note");
let replayBtn = document.querySelector(".play");

//rules of the game

function playRound(playerSelection, computerSelection) {
  let rule1 = playerSelection === "scissor" && computerSelection === "paper";
  let rule2 = playerSelection === "paper" && computerSelection === "scissor";

  let rule3 = playerSelection === "paper" && computerSelection === "rock";
  let rule4 = playerSelection === "rock" && computerSelection === "paper";

  let rule5 = playerSelection === "rock" && computerSelection === "scissor";
  let rule6 = playerSelection === "scissor" && computerSelection === "rock";

  if (playerSelection === computerSelection) {
    return `It's a tie!`;
  } else if (rule1 === true) {
    playerScore++;
    return `You won! Scissor beats Paper.`;
  } else if (rule2 === true) {
    computerScore++;
    return `You Lose! Scissor beats Paper.`;
  } else if (rule3 === true) {
    playerScore++;
    return `You won! Paper beats Rock.`;
  } else if (rule4 === true) {
    computerScore++;
    return `You Lose! Paper beats Rock.`;
  } else if (rule5 === true) {
    playerScore++;
    return `You won! Rock beats Scissor.`;
  } else if (rule6 === true) {
    computerScore++;
    return `You Lose! Rock beats Scissor.`;
  }
}

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissor";
  }
}

function btnColor(playerSelection, computerSelection) {
  for (let i = 0; i < btn.length; i++) {
    if (btn[i].classList.contains("red-border-btn")) {
      btn[i].classList.remove("red-border-btn");
    }
    if (values[i] === playerSelection) {
      btn[i].classList.add("red-border-btn");
    }
  }

  for (let i = 0; i < btnMachine.length; i++) {
    if (btnMachine[i].classList.contains("red-border-btn")) {
      btnMachine[i].classList.remove("red-border-btn");
    }
    if (values[i] === computerSelection) {
      btnMachine[i].classList.add("red-border-btn");
    }
  }
}

btn.forEach((button, index) => {
  const val = values[index];
  button.addEventListener("click", () => {
    playerSelection = val;
    playOneRound();
  });
});

function updateScore(playerScore, computerScore) {
  let partsY = yourScore.textContent.split(":");
  let partsM = machineScore.textContent.split(":");

  partsY[1] = playerScore;
  partsM[1] = computerScore;

  if (round === 0) {
    yourScore.textContent = `${partsY[0]}:`;
    machineScore.textContent = `${partsM[0]}:`;
  } else {
    yourScore.textContent = partsY.join(":");
    machineScore.textContent = partsM.join(":");
  }
}

function playOneRound() {
  round++;
  const computerSelection = getComputerChoice();

  lastRound.textContent = playRound(playerSelection, computerSelection);
  updateScore(playerScore, computerScore);
  btnColor(playerSelection, computerSelection);

  if (round === 5) {
    setTimeout(announceWinner, 1000);
  }
}

function announceWinner() {
  modal.showModal();

  if (playerScore > computerScore) {
    announceText.textContent = "You won!";
    announceNote.textContent = "That was easy for you.";
  } else if (playerScore < computerScore) {
    announceText.textContent = "You lost this time!";
    announceNote.textContent = "Try again to be the Champ you are.";
  } else {
    announceText.textContent = "It's a tie!";
    announceNote.textContent = "Try again to beat the machine.";
  }
}

replayBtn.addEventListener("click", resetGame);

function resetGame() {
  modal.close();
  round = 0;
  announceNote.textContent = "";
  announceText.textContent = "";
  lastRound.textContent =
    "Machine’s buttons are broken. Press human’s buttons to play.";
  playerScore = 0;
  computerScore = 0;
  updateScore(0, 0);
  btnColor();
}

//style
