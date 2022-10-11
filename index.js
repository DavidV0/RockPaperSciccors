let computerChoices = [{choice: "Rock", value: 0}, {choice: "Paper", value: 1}, {choice: "Scissors", value: 2}];
let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;



function getComputerChoice(){
    let result = computerChoices[Math.floor(Math.random()* computerChoices.length)];
    return result;
}

function playRound(playerSelection, computerSelection){
  if(playerSelection == computerSelection.choice) {
    return "it´s a tie";
  }else if(playerSelection == "Rock" && computerSelection.choice == "Paper" || playerSelection == "Paper" && computerSelection.choice == "Scissors" || playerSelection == "Scissors" && computerSelection.choice == "Rock"  ){
      return "You Lose!";
   } else{
    return "You won!"
  }
  
}

function getPlayerChoice(e){
   if(e == Rock){
     playerSelection = "Rock"
     console.log(playerSelection)
   }else if(e == Paper){
    playerSelection = "Paper";
    console.log(playerSelection)
   }else{
    playerSelection = "Scissors";
    console.log(playerSelection)
   }
}

function game(){

  for(let i = 0; i<5; i++){
    computerSelection = getComputerChoice();
    console.log(computerSelection);
   playerSelection =  getPlayerChoice();
   let result =  playRound(playerSelection, computerSelection);
   if(result == "it´s a tie"){
    computerScore++;
    playerScore++;
   }else if(result ==  "You Lose!" ){
    computerScore++;
   }else{
    playerScore++;
   } 
  }
  console.log(checkWinner(playerScore, computerScore));
}

function checkWinner(playerScore, computerScore){
  if(computerScore < playerScore) return "Player won!";
  return "Player lose!"
}

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

rockBtn.attributes
console.log(rockBtn);
console.log(paperBtn);
console.log(scissorsBtn);

rockBtn.addEventListener("click", function(e){
  getPlayerChoice(e);
});

paperBtn.addEventListener("click", function(e){
  getPlayerChoice(e);
});

scissorsBtn.addEventListener("click", function(e){
  getPlayerChoice(e);
});