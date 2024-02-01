var rock = document.getElementById("rock");
rock.addEventListener("click", playerSelection);

var paper = document.getElementById("paper");
paper.addEventListener("click", playerSelection);

var scissors = document.getElementById("scissors");
scissors.addEventListener("click", playerSelection);

var roundTotal = 1;
var playerScore = 0;
var computerScore = 0;

function playerSelection(event) {
    //console.log(event.target);
    var playerSelection = event.target;    
    playerSelection = playerSelection.innerHTML;
    console.log("Player Selection: " + playerSelection);
    roundTotal += 1;

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

    document.getElementById("roundtotal").innerHTML = roundTotal + "/5";
    
    if (playerSelection == computerSelection) {
        document.getElementById("roundoutcome").innerHTML = "Draw!";          
    }
    switch (playerSelection) {
        case ("rock"):
            if (computerSelection == "paper") {
                document.getElementById("roundoutcome").innerHTML = "Paper covers rock! You Lose!";
                computerScore += 1;
            }
            else if (computerSelection == "scissors") {
                document.getElementById("roundoutcome").innerHTML ="Rock crushes scissors! You win!";
                playerScore += 1;
            }
            break;
        case ("paper"):
            if (computerSelection == "rock") {
                document.getElementById("roundoutcome").innerHTML ="Paper covers rock! You win!";
                playerScore += 1;
            }
            else if (computerSelection == "scissors") {
                document.getElementById("roundoutcome").innerHTML = "Scissors cut paper! You lose!";
                computerScore += 1;
            }                
            break;
        case ("scissors"):
            if (computerSelection == "paper") {
                document.getElementById("roundoutcome").innerHTML = "Scissors cut paper! You win!";
                playerScore += 1;
            }
            else if (computerSelection == "rock") {
                document.getElementById("roundoutcome").innerHTML = "Rock crushes scissors! You lose!";
                computerScore += 1;
            }
            break;            
    };

    document.getElementById("playerscore").innerHTML = playerScore;
    document.getElementById("computerscore").innerHTML = computerScore;
    document.getElementById("selections").innerHTML =
     "Player throws " + playerSelection + "<br> Computer throws " + computerSelection;

     if (roundTotal > 5) {
        document.getElementById("roundtotal").innerHTML = "Game Ended";
        document.getElementById("roundtotal").innerHTML = "1/5"
        restartGame();
    }

}

function restartGame() {
    var winner = "";
    if (playerScore > computerScore) {
        winner = "Player";
    }
    else if (computerScore > playerScore) {
        winner = "Computer";
    }
    else {
        winner = "No one";
    }
    document.getElementById("winner").innerHTML = "<b>Final Score</b> <br> Player Score: "
     + playerScore + " Computer Score: " + computerScore +
    ". " + winner + " wins.";
    
    roundTotal = 0;



    if (roundTotal = 1) {
        playerScore = 0;
        computerScore = 0;
    }
    document.getElementById("playerscore").innerHTML = 0;
    playerScore = 0;
    document.getElementById("computerscore").innerHTML = 0;
    computerScore = 0;
    
    document.getElementById("roundtotal").innerHTML = roundTotal + "/5";
    document.getElementById("selections").innerHTML = "";
    
}