const myListBox = document.querySelector("#rps_selection");
const myButton = document.querySelector("#send");
const playerMsg = document.querySelector(".playerMsg");
const humanScoreBoard = document.querySelector(".humanScoreBoard");
const computerScoreBoard = document.querySelector(".computerScoreBoard");
let rounds = 1;
let computerScore = 0;
let humanScore = 0;

myButton.addEventListener("click", playRound)


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

function playRound() {
    const humanChoice = getHumanChoice()
    const computerChoice = getComputerChoice()
    console.log(`Human: ${humanChoice}`)
    console.log(`Computer: ${computerChoice}`)

    if (humanChoice == computerChoice){
        playerMsg.textContent = "It's a draw";
    } else if (humanChoice == 'Rock' && computerChoice == 'Paper'){
        playerMsg.textContent = "Well Done Computer, paper beats rock"
        computerScore++;
    }  else if (humanChoice == 'Rock' && computerChoice == 'Scissors'){
        playerMsg.textContent = "Well Done Human, rock beats scissors"
        humanScore++;
    }  else if (humanChoice == 'Paper' && computerChoice == 'Rock'){
        playerMsg.textContent = "Well Done Human, paper beats rock"
        humanScore++;
    }  else if (humanChoice == 'Paper' && computerChoice == 'Scissors'){
        playerMsg.textContent = "Well Done Computer, scissors beats paper"
        computerScore++;
    }   else if (humanChoice == 'Scissors' && computerChoice == 'Rock'){
        playerMsg.textContent = "Well Done Computer, rock beats scissors"
        computerScore++;
    }  else if (humanChoice == 'Scissors' && computerChoice == 'Paper'){
        playerMsg.textContent = "Well Done Human, scissors beats paper"
        humanScore++;
    } else {
        playerMsg.textContent = "No idea what went wrong"
    }

    humanScoreBoard.textContent = humanScore;
    computerScoreBoard.textContent = computerScore;
}
