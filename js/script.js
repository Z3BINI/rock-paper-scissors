const possibleChoices = ['Rock', 'Paper', 'Scissors']; 

const btns = document.querySelectorAll('button');

const playerChoiceHTML = document.querySelector('p.pChoice');
const computerChoiceHTML = document.querySelector('p.cChoice');

const playerPointsHTML = document.querySelector('p.pPoints');
const computerPointsHTML = document.querySelector('p.cPoints');
const roundResultHTML = document.querySelector('p.result');

let playerScore = 0;
let computerScore = 0;

let getComputerChoice = () => possibleChoices[Math.floor(Math.random() * 3)]; 

function resetGame() {
    playerChoiceHTML.textContent = '';
    computerChoiceHTML.textContent = '';
    playerPointsHTML.textContent = '';
    computerPointsHTML.textContent = '';
    roundResultHTML.textContent = '';
}

function gameOver (winner) {
    window.alert(`Game Over! ${winner} wins!`);
}

function game() { 
    
    btns.forEach( btn => btn.addEventListener('click', e => {
        playRound(getComputerChoice(), e.target.innerText);
    }));
  

    function playRound(computerChoice, playerChoice) { 

        computerChoiceHTML.textContent = computerChoice;
        playerChoiceHTML.textContent = playerChoice;
    
        switch (computerChoice) { 
    
            case (playerChoice):
                roundResultHTML.textContent = 'Tie!';
                break;
    
            case ('Rock'):
                if (playerChoice == 'Paper') {
                    playerScore++;
                    roundResultHTML.textContent = 'Player wins! Paper beats Rock!';
                    playerPointsHTML.textContent = 'The player score is: ' + playerScore;
                } else {
                    computerScore++;
                    roundResultHTML.textContent = 'Computer wins! Rock beats Scissors!';
                    computerPointsHTML.textContent = 'The computer score is: ' + computerScore;
                }
                break;
    
            case ('Paper'):
                if (playerChoice == 'Scissors') {
                    playerScore++;
                    roundResultHTML.textContent = 'Player wins! Scissors beats Paper!';
                    playerPointsHTML.textContent = 'The player score is: ' + playerScore;
                } else {
                    computerScore++;
                    roundResultHTML.textContent = 'Computer wins! Paper beats Rock!';
                    computerPointsHTML.textContent = 'The computer score is: ' + computerScore;
                }
                break;
    
            case ('Scissors'):
                if (playerChoice == 'Rock') {
                    playerScore++;
                    roundResultHTML.textContent = 'Player wins! Rock beats Scissors!';
                    playerPointsHTML.textContent = 'The player score is: ' + playerScore;
                } else {
                    computerScore++;
                    roundResultHTML.textContent = 'Computer wins! Scissors beats Paper!';
                    computerPointsHTML.textContent = 'The computer score is: ' + computerScore;
                }
                break;
    
            default:
                roundResultHTML.textContent = 'Something went wrong!';
                break;
    
        }

        if (playerScore === 5) {
            playerScore = 0;
            computerScore = 0;
            resetGame();
            return gameOver('Player');
        } 

        if (computerScore === 5) {
            playerScore = 0;
            computerScore = 0;
            resetGame();
            return gameOver('Computer');
        }
    
    }

}

game();