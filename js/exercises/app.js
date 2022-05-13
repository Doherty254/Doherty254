function generateComputerChoice() {
   const randomNumber =Math.floor(Math.random() * 3) + 1 
    console.log(randomNumber)
}

function getResult() {
    if (randomNumber === 1) {
    computerChoice = 'rock'
    }if (randomNumber === 2) {
    computerChoice = 'paper'
    }
    if (randomNumber === 3) {
    computerChoice = 'scissors'
    }
    if (computerChoice === userChoice) {
        result = 'its a draw'
    } 
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'you lose!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you win!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock' ) {
        result = 'you lose'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock' ) {
        result = 'you win'
    }
    if (computerChoice === 'scissors' && userChoice === 'rpaper' ) {
        result = 'you lose'
    }
}

console.log('======================================');


const randomNumber =Math.floor(Math.random() * 3) + 1 
    console.log(randomNumber)
constgetResult = () => {
    switch (usererChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            console.log = ('You Win!')
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            console.log = ('You Lose!')
            break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            console.log = ('Its a Draw!')
            break

    }
}


