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
    alert(`It's a tie! Both played ${playerSelection}.`);
    return "tie";
  } else if (winner === "computer") {
    alert(`You lose! ${computerSelection} beats ${playerSelection}.`);
    return "loss";
  } else if (winner === "player") {
    alert(`You win! ${playerSelection} beats ${computerSelection}.`);
    return "win";
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

function game() {
  let playerScore;
  let computerScore;
  
  for (let index = 0; index < 5; i++) {
    let playerSelection =
      prompt("What do you want to play this round (rock, paper or scissors)?");

    let result = playRound(playerSelection, getComputerChoice());

    if (result === "win") {
      playerScore++;
    } else if (result === "loss") {
      computerScore++;
    }
  }

  alert("Game Over!");

  if (playerScore > computerScore) {
    alert("Congratulations! You won the game.");
  } else if (computerScore < playerScore) {
    alert("You lost the game! Better luck next time!");
  } else {
    alert("It's a tie overall!");
  }
}

while (true) {
  game();

  let newGame = confirm("Start new game?");

  if (newGame) {
    game();
  } else {
    break;
  }
}
