const rock = 0;
const paper = 1;
const scissors = 2;
const maxChoices = 3;
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
            alert(`${humanInput} is an invalid choice. Please input "rock", "paper" or "scissors".`)
        }
    }
    return humanChoice;
}
    
function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(`human's choice = ${humanChoice}`);
    console.log(`computer's choice = ${computerChoice}`);
    if (humanChoice === computerChoice) {
        alert(`Tied! You both chose ${handSign[humanChoice]}`);
    } else if ((humanChoice - 1) % maxChoices === computerChoice) {
        alert(`You won! Your choice \"${handSign[humanChoice]}\" beats the computer's choice \"${handSign[computerChoice]}\"`);
    } else if ((humanChoice + 1) % maxChoices === computerChoice) {
        alert(`You lost! Your choice \"${handSign[humanChoice]}\" loses to the computer's choice \"${handSign[computerChoice]}\"`);
    } else {
        alert("error");
    }
}
playRound();

