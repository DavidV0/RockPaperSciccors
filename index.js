let computerChoices = [{choice: "Rock", value: 0}, {choice: "Paper", value: 1}, {choice: "Scissors", value: 2}];
let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;
let div = document.getElementById("div");



function getComputerChoice(){
    let result = computerChoices[Math.floor(Math.random()* computerChoices.length)];
    computerSelection =  result.choice;
}

function playRound(playerSelection, computerSelection){
  if(playerSelection == computerSelection) {
    checkWinnerOfRound("it´s a tie");
  }else if(playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock"  ){
    checkWinnerOfRound( "You Lose!");
   } else{
   checkWinnerOfRound( "You won!");
  }
  
}

function getPlayerChoice(e){
   if(e == "Rock"){
     playerSelection = "Rock"
   }else if(e == "Paper"){
    playerSelection = "Paper";
   }else{
    playerSelection = "Scissors";
   }
}

function checkWinnerOfRound(str){
   let result = str
   if(result == "it´s a tie"){
    computerScore++;
    playerScore++;
    getPoints()
    checkWinner(playerScore, computerScore)
    console.log("tie")
   }else if(result ==  "You Lose!" ){
    computerScore++;
    getPoints()
    checkWinner(playerScore, computerScore)
    console.log("computer won the round")
   }else{
    playerScore++;
    getPoints()
    checkWinner(playerScore, computerScore)
    console.log("player won the round")
   } 
  }


function checkWinner(playerScore, computerScore){
  if(playerScore == 5 || computerScore == 5){
    if(computerScore < playerScore){
      const winner = document.createElement("p")
      winner.textContent = "Player won the game!!"
      div.appendChild(winner);
    }else{
      const comp = document.createElement("p")
      comp.textContent = "Computer won the game!!"
      div.appendChild(comp);
    }    
  }
}

const rockBtn = document.getElementById("rock");

const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
rockBtn.value = "Rock";
paperBtn.value = "Paper";
scissorsBtn.value = "Scissors";


rockBtn.addEventListener( "click", (rockBtn) => {
  {
   getComputerChoice();
   getPlayerChoice(rockBtn.value);
   playRound(playerSelection, computerSelection)
}});

paperBtn.addEventListener( "click", (paperBtn) => {
  {
    getComputerChoice();
    getPlayerChoice(paperBtn.value);
    playRound(playerSelection, computerSelection)
}});

scissorsBtn.addEventListener( "click", (scissorsBtn) => {
  {
   getComputerChoice();
   getPlayerChoice(scissorsBtn.value);
   playRound(playerSelection, computerSelection)
}});

let playerPoints = document.getElementById("playerPoints");
let computerPoints = document.getElementById("computerPoints");

function getPoints(){
  playerPoints.textContent = "Player points: " + playerScore;
  computerPoints.textContent = "Computer points: " + computerScore;
}
