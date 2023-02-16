//write a function that randomly returns rock, paper or scissor;
//get user input;
//check the users input against the game rules;
// return result;
//write a function that gets user input 5 times and plays it against randomly generated choice by computer;
//log the result and announce a winner;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 4);
  if (random === 1) {
    return "rock";
  } else if (random === 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

function playRound(playerSelection, getComputerChoice) {
  let rule1 = playerSelection === "scissor" && getComputerChoice === "paper";
  let rule2 = playerSelection === "paper" && getComputerChoice === "scissor";

  let rule3 = playerSelection === "paper" && getComputerChoice === "rock";
  let rule4 = playerSelection === "rock" && getComputerChoice === "paper";

  let rule5 = playerSelection === "rock" && getComputerChoice === "scissor";
  let rule6 = playerSelection === "scissor" && getComputerChoice === "rock";

  if (playerSelection === getComputerChoice) {
    return `It's a tie! \nComputer has also selected ${getComputerChoice}.`;
  } else if (rule1 === true) {
    return `You won! Scissor beats Paper. \nComputer selected ${getComputerChoice}.`;
  } else if (rule2 === true) {
    return `You Lose! Scissor beats Paper. \nComputer selected ${getComputerChoice}.`;
  } else if (rule3 === true) {
    return `You won! Paper beats Rock. \nComputer selected ${getComputerChoice}.`;
  } else if (rule4 === true) {
    return `You Lose! Paper beats Rock. \nComputer selected ${getComputerChoice}.`;
  } else if (rule5 === true) {
    return `You won! Rock beats Scissor. \nComputer selected ${getComputerChoice}.`;
  } else if (rule6 === true) {
    return `You Lose! Rock beats Scissor. \nComputer selected ${getComputerChoice}.`;
  }
}
