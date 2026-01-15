const myListBox = document.querySelector("#rps_selection");
const myButton = document.querySelector("#send");
const playerMsg = document.querySelector(".playerMsg");
const roundMsg = document.querySelector(".roundMsg");
const humanScoreBoard = document.querySelector(".humanScoreBoard");
const computerScoreBoard = document.querySelector(".computerScoreBoard");

const gamesLimit = 3;
let games = gamesLimit;
let computerScore = 0;
let humanScore = 0;

myButton.addEventListener("click", playGame)


function getComputerChoice() {
    const rndNum = Math.floor(Math.random() * 3) + 1
    if (rndNum == 1)
        return 'Rock'
    else if (rndNum == 2)
        return 'Paper'
    else
        return 'Scissors'
    console.log(`Computer choice is: ${myListBox.value}`)
}

function getHumanChoice() {
    return myListBox.value
}

function whoWon(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        playerMsg.textContent = "It's a draw";
    } else if (humanChoice == 'Rock' && computerChoice == 'Paper') {
        playerMsg.textContent = "Well Done Computer, paper beats rock"
        computerScore++;
    } else if (humanChoice == 'Rock' && computerChoice == 'Scissors') {
        playerMsg.textContent = "Well Done Human, rock beats scissors"
        humanScore++;
    } else if (humanChoice == 'Paper' && computerChoice == 'Rock') {
        playerMsg.textContent = "Well Done Human, paper beats rock"
        humanScore++;
    } else if (humanChoice == 'Paper' && computerChoice == 'Scissors') {
        playerMsg.textContent = "Well Done Computer, scissors beats paper"
        computerScore++;
    } else if (humanChoice == 'Scissors' && computerChoice == 'Rock') {
        playerMsg.textContent = "Well Done Computer, rock beats scissors"
        computerScore++;
    } else if (humanChoice == 'Scissors' && computerChoice == 'Paper') {
        playerMsg.textContent = "Well Done Human, scissors beats paper"
        humanScore++;
    } else {
        playerMsg.textContent = "No idea what went wrong"
    }
}

// Get ready for a new round of games
function resetRoundScores() {
    games = gamesLimit;
    computerScore = 0;
    humanScore = 0;
}


function playGame() {
    // if new round games get rid of the prev outcome
    if (games == gamesLimit) 
        roundMsg.textContent = "";
    games--;
    const humanChoice = getHumanChoice()
    const computerChoice = getComputerChoice()
    console.log(`Human: ${humanChoice}`)
    console.log(`Computer: ${computerChoice}`)

    whoWon(humanChoice, computerChoice);
    humanScoreBoard.textContent = `Human: ${humanScore}`;
    computerScoreBoard.textContent = `Computer: ${computerScore}`;

    // Let players know who has won the round when 'n' number of games have been played
    if (games == 0) {
        if (humanScore == computerScore)
            roundMsg.textContent = "Game Over! It's a Draw";
        else if (humanScore > computerScore)
            roundMsg.textContent = "Human wins the set!"
        else
            roundMsg.textContent = "Computer wins the set!"
        // prepare to the next 
        resetRoundScores();
    }

}


