// const rockButton = document.getElementById("rock-button");
// rockButton.addEventListener('click', function playRound() {
// });

function getComputerChoice() {
    let choice = [Math.floor(Math.random() * 3)];
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    };
};

function getHumanChoice() {
    let humanChoice = prompt("choose rock, paper, or scissors");
    return humanChoice.toLowerCase();
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    playRound();
    function playRound(humanChoice, computerChoice) {

        if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You Win!");
            humanScore++;
        } else if (humanChoice == computerChoice) {
            console.log("It's a tie!");
        } else {
            console.log("You lose!");
            computerScore++;
        };
        return computerScore
    }
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (computerScore > humanScore) {
        console.log("You lost the game")
    } else {
        console.log("You win the game!")
    }
}

playGame();