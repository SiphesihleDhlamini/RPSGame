
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function playRound(playerSelection, computerSelection) { 
    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
    }
    if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
        playerScore++
        roundWinner = 'thePlayer'
    }
    if (
        (computerSelection === 'ROCK' && playerSelection === 'SSCISSORS') || 
        (computerSelection === 'ROCK' && playerSelection === 'PAPER') || 
        (computerSelection === 'ROCK' && playerSelection === 'ROCK')
    ) {
        computerScore++
        roundWinner = 'theComputer'
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection)
}

function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'ROCK'
      case 1:
        return 'PAPER'
      case 2:
        return 'SCISSORS'
    }
  }
  
function isGameOver() { 
    return playerScore === 5 || computerScore === 5
}