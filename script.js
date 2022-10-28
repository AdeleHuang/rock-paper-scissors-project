function game() {
  function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
      return "It's a tie.";
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
      return "You Lose! Paper beats Rock";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
      return "You Win! Rock beats Scissors";
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
      return "You Win! Paper beats Rock";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
      return "You Lose! Scissors beats Paper";
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
      return "You Lose! Rock beats Scissors";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
      return "You Win! Scissors beats Paper";
    }
  }
  const resultList = ["Rock", "Paper", "Scissors"];
  function randomChoice() {
    return Math.floor(Math.random() * resultList.length);
  }

  function getComputerChoice() {
    return resultList[randomChoice()];
  }
  const computerSelection = getComputerChoice();

  const playerInput = prompt("Please enter your selection");
  const firstLetter = playerInput[0].toUpperCase();
  const restOfLetter = playerInput.slice(1);
  const playerSelection = firstLetter + restOfLetter.toLowerCase();
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
    if (playRound(playerSelection, computerSelection)[4] == "L") {
      const a = 0 + 1;
    }
    if (playRound(playerSelection, computerSelection)[4] == "W") {
      const b = 0 + 1;
    }
  }
  if (a > b) {
    return "You Lose after these five rounds";
  }
  if (a < b) {
    return "You Win after these five rounds";
  }
}
