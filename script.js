let playerScore = 0;
let computerScore = 0;
function getComputerChoice() {
    let choice = [Math.floor(Math.random() * 3)];
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    };
};

// function getHumanChoice() {
//     let humanChoice = prompt("choose rock, paper, or scissors");
//     return humanChoice.toLowerCase();
// }


// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         playRound(getHumanChoice());
//     }
//     if (computerScore > playerScore) {
//         console.log("You lost the game")
//     } else if (computerScore === playerScore) {
//         console.log("It's a tie!")
//     } else {
//         console.log("You win the game!")
//     };
// }

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    let result = ''
    if (playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "paper" && computerChoice == "rock" || playerChoice == "scissors" && computerChoice == "paper") {
        result = "You Win!";
        playerScore++;
    } else if (playerChoice == computerChoice) {
        result = "It's a tie!";
    } else {
        result = "You lose!";
        computerScore++;
    };
    document.getElementById('result').textContent = result;
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
}

document.getElementById('rock-button').addEventListener('click', function () {
    playRound('rock');
});
document.getElementById('paper-button').addEventListener('click', function () {
    playRound('paper');
});
document.getElementById('scissors-button').addEventListener('click', function () {
    playRound('scissors');
});