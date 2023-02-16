//write a function that randomly returns rock, paper or scissor;
//get user input;
//check the users input against the game rules;
// return result;
//write a function that gets user input 5 times and plays it against randomly generated choice by computer;
//log the result and announce a winner;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 4);
  if (random === 1) {
    return "Rock";
  } else if (random === 2) {
    return "Paper";
  } else {
    return "Scissor";
  }
}
