console.log("Hello JS World!!git")

function getComputerChoice() {
    const rndNum = Math.floor(Math.random() * 3) + 1
    if (rndNum == 1)
        return 'Rock'
    else if (rndNum == 2)
        return 'Paper'
    else
        return 'Scissors'
}

console.log(getComputerChoice())