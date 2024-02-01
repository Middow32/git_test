var rock = document.getElementById("rock");
rock.addEventListener("click", playerSelection);

var paper = document.getElementById("paper");
paper.addEventListener("click", playerSelection);

var scissors = document.getElementById("scissors");
scissors.addEventListener("click", playerSelection);

function playerSelection(event) {
    //console.log(event.target);
    var playerSelection = event.target;
    playerSelection = playerSelection.innerHTML;
    console.log("Player Selection: " + playerSelection);
    getComputerChoice(playerSelection);
}

function getComputerChoice(playerSelection) {

    // Random number 0-2
    var computerSelection = Math.floor(Math.random() * 3);

    // Assigns Rock, paper, or scissors to number
    switch (computerSelection) {
        case 0:
            computerSelection = "rock";
            break;
        case 1:
            computerSelection = "paper";
            break;
        case 2: 
            computerSelection = "scissors";
            break;
    }

    //console.log("Player Selection: " + playerSelection);
    console.log("Computer Selection: " + computerSelection);
    playRound(playerSelection,computerSelection);
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        console.log("Draw!");            
    }
    switch (playerSelection) {
        case ("rock"):
            if (computerSelection == "paper") {
                console.log("Paper covers rock! You Lose!");
            }
            else if (computerSelection == "scissors") {
                console.log("Rock crushes scissors! You win!");
            }
            break;
        case ("paper"):
            if (computerSelection == "rock") {
                console.log("Paper covers rock! You win!");
            }
            else if (computerSelection == "scissors") {
                console.log("Scissors cut paper! You lose!");
            }                
            break;
        case ("scissors"):
            if (computerSelection == "paper") {
                console.log("Scissors cut paper! You win!");
            }
            else if (computerSelection == "rock") {
                console.log("Rock crushes scissors! You lose!");
            }
            break;            
    };
}