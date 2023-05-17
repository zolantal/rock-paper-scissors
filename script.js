function getComputerChoice() {
  let numberChoice = Math.floor(Math.random() * 3);
    
  if (numberChoice === 0) {
    return "Rock";
  } else if (numberChoice === 1) {
    return "Paper";  
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalizeFirstLetter(playerSelection);

  let winner;

  if (playerSelection === computerSelection) {
    winner = null;
  } else if (playerSelection === "Rock") {
    computerSelection === "Paper" ? winner = "computer" : winner = "player"; 
  } else if (playerSelection === "Paper") {
    computerSelection === "Scissors" ? winner = "computer" : winner = "player";
  } else if (playerSelection === "Scissors") {
    computerSelection === "Rock" ? winner = "computer" : winner = "player";
  }

  if (winner === null) {
    return ["tie", `It's a tie! Both played ${playerSelection}.`]
  } else if (winner === "computer") {
    return ["loss", `You lose! ${computerSelection} beats ${playerSelection}.`]
  } else if (winner === "player") {
    return ["win", `You win! ${playerSelection} beats ${computerSelection}.`]
  }
}

function capitalizeFirstLetter(string) {
  let length = string.length;
  
  if (length === 0) {
    return string;
  } else if (length === 1) {
    return string.toUpperCase();
  } else {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }
}

