var choices = ["rock", "paper", "scissors"];
var playerSelection = "";
var ComputerSelection = "";
var Score = 0;

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


for (let i = 0; i < 5; i++){
var playerSelection = (prompt("rock, paper, or scissors?").toLowerCase());

function getComputerChoice() {
    random = Math.floor(Math.random()*3);
    ComputerSelection = choices[random];
}

getComputerChoice();

console.log(ComputerSelection);
console.log(playerSelection);

function RPS() {
    if ((playerSelection == "rock" && ComputerSelection == "paper") || 
    (playerSelection == "paper" && ComputerSelection == "scissors") ||
    (playerSelection == "scissors" && ComputerSelection == "rock"))
        {console.log("You lose!");}
    else if(( playerSelection == "rock" && ComputerSelection == "scissors") ||
    (playerSelection == "paper" && ComputerSelection == "rock") ||
    (playerSelection == "scissors" && ComputerSelection == "paper")) {
        console.log("You win!");
        Score += 1;}
    else {
        console.log("It's a tie!");}
}
RPS();
console.log(Score);
}