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
