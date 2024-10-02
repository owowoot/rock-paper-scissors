function getComputerChoice() {
    let choice = [Math.floor(Math.random(0, 3))];
    if (choice == 0) {
        choice = "rock";
    } else if (choice == 1) {
        choice = "paper";
    } else {
        choice = "scissors";
    };
    return choice
};

function getHumanChoice() {
    let humanChoice = prompt("choose rock, paper, or scissors");
    return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper") {
        alert("You Win!");
        humanScore++;
    } else if (humanChoice == computerChoice) {
        alert("It's a tie!");
    } else {
        alert("You lose!");
        computerScore++;
    }
}

playRound(getHumanChoice, getComputerChoice);