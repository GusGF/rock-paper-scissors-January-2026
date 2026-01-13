const myListBox = document.querySelector("#rps_selection");
const myButton = document.querySelector("#send");
const myPara = document.querySelector(".myPara");
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
        myPara.textContent = "It's a draw";
    } else if (humanChoice == 'Rock' && computerChoice == 'Paper'){
        
    }

}
