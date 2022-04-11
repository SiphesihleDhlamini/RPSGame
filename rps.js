//this js file is inclusive of a function called game that will build the logic

//main game function declaration
const game = () => {
  //declare block scope variables
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

  //function that specifies buttons that will allows user to play
  const playGame = () => {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorBtn = document.querySelector(".scissor");

    //parameters(options) we have as a player
    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    //parameters(options) the computer has
    const computerOptions = ["rock", "paper", "scissor"];

    //Function to start playing the game
    playerOptions.forEach(option => {
      Option.addEventListener('click', function(){
        const movesLeft = document.querySelector("movesleft");
        moves++;
        movesLeft.innerText = `Moves Left: ${10-moves}`;

        const choiceNumber = Math.floor(Math.random()*3);
        const computerChoice = computerOptions[choiceNumber];

        //Function to check winner
        winner(this.innerText, computerChoice)

        //Calling gameover function after 10 moves
        if(moves ==10){
          gameOver(playerOptions,movesLeft)
        }
      })
    })

  }

  //Function to decide the winner
    const winner = (player, computer) => {
      const result = document.querySelector(".result");
      const playerScoreBoard = document.querySelector(".p-count");
      const computerScoreBoard = document.querySelector(".c-count");
      player = player.toLowerCase();

      if(player === computer){
        result.textContent = "Tie";
      }
      else if(player == "rock"){
        if(computer == "paper"){
          result.textContent = "Computer Won";
          computerScore++;
          computerScoreBoard.textContent = playerScore;
        }else{
          result.textContent = "Player Won";
          playerScore++;
          playerScoreBoard.textContent = playerScore;
        }
      }
    }




}
  