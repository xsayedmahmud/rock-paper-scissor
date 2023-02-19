//write a function that randomly returns rock, paper or scissor;
//get user input;
//check the users input against the game rules;
// return result;
//write a function that gets user input 5 times and plays it against randomly generated choice by computer;
//log the result and announce a winner;

let playerScore = 0;
let computerScore = 0;

//rules of the game

function playRound(playerSelection, computerSelection) {
  let rule1 = playerSelection === "scissor" && computerSelection === "paper";
  let rule2 = playerSelection === "paper" && computerSelection === "scissor";

  let rule3 = playerSelection === "paper" && computerSelection === "rock";
  let rule4 = playerSelection === "rock" && computerSelection === "paper";

  let rule5 = playerSelection === "rock" && computerSelection === "scissor";
  let rule6 = playerSelection === "scissor" && computerSelection === "rock";

  if (playerSelection === computerSelection) {
    return `It's a tie! \nComputer has also selected ${computerSelection}.`;
  } else if (rule1 === true) {
    playerScore++;
    return `You won! Scissor beats Paper. \nComputer selected ${computerSelection}.`;
  } else if (rule2 === true) {
    computerScore++;
    return `You Lose! Scissor beats Paper. \nComputer selected ${computerSelection}.`;
  } else if (rule3 === true) {
    playerScore++;
    return `You won! Paper beats Rock. \nComputer selected ${computerSelection}.`;
  } else if (rule4 === true) {
    computerScore++;
    return `You Lose! Paper beats Rock. \nComputer selected ${computerSelection}.`;
  } else if (rule5 === true) {
    playerScore++;
    return `You won! Rock beats Scissor. \nComputer selected ${computerSelection}.`;
  } else if (rule6 === true) {
    computerScore++;
    return `You Lose! Rock beats Scissor. \nComputer selected ${computerSelection}.`;
  }
}

//game function

function game() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }

  console.log("Your Score: " + playerScore);
  console.log("Computer Score: " + computerScore);

  if (playerScore > computerScore) {
    console.log("You won! That was easy for you.");
  } else if (playerScore < computerScore) {
    console.log("You lost this time! Try again to be a champion.");
  } else {
    console.log("It's a tie. Try again to beat the computer.");
  }
}

//helper functions

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissor";
  }
}

function getPlayerChoice() {
  let playerChoice = prompt("Choose your weapon to beat the computer!", "");
  playerChoice = playerChoice.toLowerCase();
  return playerChoice;
}
