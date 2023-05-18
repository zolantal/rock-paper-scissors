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
    return "tie";
  } else if (winner === "computer") {
    return "loss";
  } else if (winner === "player") {
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

function resetGame() {
  playerScore = 0;
  computerScore = 0;

  updateScoreDisplay();
  mainDisplay.textContent = gameGoal;
  messageDisplay.textContent = "";
}

function updateScoreDisplay() {
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

function game(e) {
  if (playerScore >= 5 || computerScore >= 5) {
    return;
  }

  let playerSelection = e.target.id;
  let computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);

  if (result === "win") {
    messageDisplay.innerHTML = `You won this round!
      <br>Computer played ${computerSelection}
      <br>${playerSelection} beats ${computerSelection}.`
    playerScore++;
  } else if (result === "loss") {
    messageDisplay.innerHTML = `You lost this round!
      <br>Computer played ${computerSelection}
      <br>${computerSelection} beats ${playerSelection}.`
    computerScore++;
  } else if (result === "tie") {
    messageDisplay.innerHTML = `It's a tie!
      <br>Computer played ${computerSelection}
      <br>Both played ${playerSelection}.`
  }
  updateScoreDisplay();

  if (playerScore === 5 || computerScore === 5) {
    mainDisplay.innerHTML = "GAME OVER";

    if (playerScore > computerScore) {
      mainDisplay.innerHTML += "<br>You win!"
    } else if (computerScore > playerScore) {
      mainDisplay.innerHTML += "<br>You lose!"
    } else {
      mainDisplay.innerHTML += "<br>Tie!"
    }
  }
}

const newGameButton = document.querySelector("#new-game");
newGameButton.addEventListener("click", resetGame);

const mainDisplay = document.querySelector("#main-display");
const gameGoal = mainDisplay.textContent;
const messageDisplay = document.querySelector("#message-display");

let playerScore = 0;
let computerScore = 0;
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");

const playButtons = document.querySelectorAll(".play-button");
playButtons.forEach(button => button.addEventListener("click", game));

