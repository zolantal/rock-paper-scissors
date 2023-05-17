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
