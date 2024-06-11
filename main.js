const [rock, paper, scissors, maxChoices] = [0, 1, 2, 3];
const handSign = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
const textResults = document.getElementById("textResults");
const humanScoreDisplay = document.getElementById("humanScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
function getComputerChoice() {
    return choice = Math.floor(Math.random() * 3);
}

//console.log(getComputerChoice());

// function getHumanChoice() {
//     let humanInput;

//     let humanChoice = null;

//     while (true) {
//         humanInput = prompt("Rock paper or scissors?").toLowerCase();

//         if (humanInput === "rock") {
//             humanChoice = rock;
//             break;
//         } else if (humanInput === "paper") {
//             humanChoice = paper;
//             break;
//         } else if (humanInput === "scissors" || humanInput === "scissor") {
//             humanChoice = scissors;
//             break;
//         } else {
//             alert(`${humanInput} is an invalid choice. Please input "rock", "paper" or "scissors".`);
//         }
//     }
//     return humanChoice;
// }

function playRound(playerSelection) {
    //console.log(playerSelection);

    //let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(`human's choice = ${handSign[playerSelection]}`);
    console.log(`computer's choice = ${handSign[computerChoice]}`);
    if (playerSelection === computerChoice) {

        textResults.textContent = `Tied! You both chose ${handSign[playerSelection]}`;
    } else if ((((playerSelection - 1) + maxChoices) % maxChoices) % maxChoices === computerChoice) {
        
        textResults.textContent = `You won! Your choice \"${handSign[playerSelection]}\" beats the computer's choice \"${handSign[computerChoice]}\".`;
        humanScore++;
        humanScoreDisplay.textContent = `${humanScore}`;

    } else if ((((playerSelection + 1) + maxChoices) % maxChoices) % maxChoices === computerChoice) {

        textResults.textContent = `You lost! Your choice \"${handSign[playerSelection]}\" loses to the computer's choice \"${handSign[computerChoice]}\".`;
        computerScore++;
        computerScoreDisplay.textContent = `${computerScore}`;
    } else {
        alert("error");
    }
    if (humanScore === 5 || computerScore === 5) {
        const winner = (humanScore === 5) ? "You" : "The computer";
        textResults.textContent = `${winner} has won!`;
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
}

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

rockBtn.addEventListener("click", () => {
    playRound(0);
});
paperBtn.addEventListener("click",() => {
    playRound(1);
});
scissorsBtn.addEventListener("click",() => {
    playRound(2);
});
    

