const games = ["rock", "paper", "scissors"];

const form = document.querySelector("form");
form.addEventListener("submit", nameInpute);

function nameInpute(event){
    event.preventDefault();
    const name = document.querySelector("input");

}
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const result = document.querySelector("#result");
const playerScoreElement = document.querySelector("#playerScore");
const computerScoreElement = document.querySelector("#computerScore");

let playerScore = 0;
let computerScore = 0;

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));

function playRound(playerChoice) {
    
    const computerChoice = computerPlay();

    const winner = getWinner(playerChoice, computerChoice);
    if (winner === "You win!") {
        playerScore++;
    } else if (winner === "You lose!") {
        computerScore++;
    }

    result.innerText = `You chose ${playerChoice}. The computer chose ${computerChoice}. ${winner}`;
    playerScoreElement.innerText = `Player Score: ${playerScore}`;
    computerScoreElement.innerText = `Computer Score: ${computerScore}`;

    if (playerScore === 3) {
        setTimeout(() => {
            alert("Congratulations! You are the winner!");    
        }, 100);
        restart();
    } else if (computerScore === 3) {
        setTimeout(() => {
            alert("Sorry, you lost. Better luck next time!");
        }, 100);
        restart();
    }
}

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * games.length);
    return games[randomIndex];
}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";

    }
    
}

const restartButton = document.querySelector("#restart");
restartButton.addEventListener("click", restart);

function restart(){
        playerScore = 0;
        computerScore = 0;
        round = 1;
        result.innerText = "";
        playerScoreElement.innerText = "Player score: 0";
        computerScoreElement.innerText = "Computer score:  0";
        form.reset();
    }   



