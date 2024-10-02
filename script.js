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

console.log(getComputerChoice());
console.log(getHumanChoice());