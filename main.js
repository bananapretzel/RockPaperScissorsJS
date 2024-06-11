const [rock, paper, scissors, maxChoices] = [0, 1, 2, 3];
const handSign = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choice = Math.floor(Math.random() * 3);
}

//console.log(getComputerChoice());

function getHumanChoice() {
    let humanInput;

    let humanChoice = null;

    while (true) {
        humanInput = prompt("Rock paper or scissors?").toLowerCase();

        if (humanInput === "rock") {
            humanChoice = rock;
            break;
        } else if (humanInput === "paper") {
            humanChoice = paper;
            break;
        } else if (humanInput === "scissors" || humanInput === "scissor") {
            humanChoice = scissors;
            break;
        } else {
            alert(`${humanInput} is an invalid choice. Please input "rock", "paper" or "scissors".`);
        }
    }
    return humanChoice;
}

function playRound(playerSelection) {
    console.log(playerSelection);

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(`human's choice = ${humanChoice}`);
    console.log(`computer's choice = ${computerChoice}`);
    if (humanChoice === computerChoice) {
        alert(`Tied! You both chose ${handSign[humanChoice]}`);
    } else if ((((humanChoice - 1) + maxChoices) % maxChoices) % maxChoices === computerChoice) {
        humanScore++;
        alert(`You won! Your choice \"${handSign[humanChoice]}\" beats the computer's choice \"${handSign[computerChoice]}\". The current score is: you: ${humanScore}, the computer: ${computerScore}`);

    } else if ((((humanChoice + 1) + maxChoices) % maxChoices) % maxChoices === computerChoice) {
        computerScore++;
        alert(`You lost! Your choice \"${handSign[humanChoice]}\" loses to the computer's choice \"${handSign[computerChoice]}\". The current score is: you: ${humanScore}, the computer: ${computerScore}`);
        computerScore++;
    } else {
        alert("error");
    }
}

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

rockBtn.addEventListener("click", () => {
    playRound(handSign[0]);
});
paperBtn.addEventListener("click",() => {
    playRound(handSign[1]);
});
scissorsBtn.addEventListener("click",() => {
    playRound(handSign[2]);
});
    
playRound();

