const possibleChoices = ['Rock', 'Paper', 'Scissors']; 

const btns = document.querySelectorAll('button.game');

const rr = document.querySelector('button.rr');

const paper = document.querySelector('audio.paperSound');
const rock = document.querySelector('audio.rockSound');
const scissors = document.querySelector('audio.scissorsSound');

const playerChoiceHTML = document.querySelector('img.pChoice');
const computerChoiceHTML = document.querySelector('img.cChoice');

const playerPointsHTML = document.querySelector('span.pPoints');
const computerPointsHTML = document.querySelector('span.cPoints');

const gameResultHTML = document.querySelector('p.winner');
const roundResultHTML = document.querySelector('p.result');

let playerScore = 0;
let computerScore = 0;

let getComputerChoice = () => possibleChoices[Math.floor(Math.random() * 3)]; 

function resetGame() {
    playerChoiceHTML.src = './img/placeHolder.jpg';
    computerChoiceHTML.src = './img/placeHolder.jpg';

    playerPointsHTML.textContent = '0';
    computerPointsHTML.textContent = '0';
    roundResultHTML.textContent = '-';

    btns.forEach(btn => btn.disabled = false );
}

function gameOver (winner, winnerScore, loserScore) {
    gameResultHTML.textContent = `${winner} won! ${winnerScore} to ${loserScore}`;
    btns.forEach(btn => btn.disabled = true );
}

function game() { 
    
    btns.forEach( btn => btn.addEventListener('click', e => {
        playRound(getComputerChoice(), e.target.innerText);
    }));
  
    function playRound(computerChoice, playerChoice) { 
        
        rr.addEventListener('click', e => {
            playerScore = 0;
            computerScore = 0;
            return resetGame();
        });

        computerChoiceHTML.src = `./img/${computerChoice}.jpg`;
        playerChoiceHTML.src = `./img/${playerChoice}.jpg`;

        if (playerChoice === 'Paper'){
            paper.currentTime = 0;
            paper.play()
        } 
        if (playerChoice === 'Rock') {
            rock.currentTime = 0;
            rock.play()
        }
        if (playerChoice === 'Scissors'){
            scissors.currentTime = 0;
            scissors.play()
        } 
    
        switch (computerChoice) { 
    
            case (playerChoice):
                roundResultHTML.textContent = 'Tie!';
                break;
    
            case ('Rock'):
                if (playerChoice == 'Paper') {
                    playerScore++;
                    roundResultHTML.textContent = 'Player wins! Paper beats Rock!';
                    playerPointsHTML.textContent = playerScore;
                } else {
                    computerScore++;
                    roundResultHTML.textContent = 'Computer wins! Rock beats Scissors!';
                    computerPointsHTML.textContent = computerScore;
                }
                break;
    
            case ('Paper'):
                if (playerChoice == 'Scissors') {
                    playerScore++;
                    roundResultHTML.textContent = 'Player wins! Scissors beats Paper!';
                    playerPointsHTML.textContent = playerScore;
                } else {
                    computerScore++;
                    roundResultHTML.textContent = 'Computer wins! Paper beats Rock!';
                    computerPointsHTML.textContent = computerScore;
                }
                break;
    
            case ('Scissors'):
                if (playerChoice == 'Rock') {
                    playerScore++;
                    roundResultHTML.textContent = 'Player wins! Rock beats Scissors!';
                    playerPointsHTML.textContent = playerScore;
                } else {
                    computerScore++;
                    roundResultHTML.textContent = 'Computer wins! Scissors beats Paper!';
                    computerPointsHTML.textContent = computerScore;
                }
                break;
    
            default:
                roundResultHTML.textContent = 'Something went wrong!';
                break;
    
        }

        if (playerScore === 5) {
            gameOver('Player', 5, computerScore);
            playerScore = 0;
            computerScore = 0;
        } 

        if (computerScore === 5) {
            gameOver('Computer', 5, playerScore);
            playerScore = 0;
            computerScore = 0;
        }
    
    }

}
window.alert('Welcome!\nTo play keep selecting an option below\n(Rock, Paper or Scissors).');
window.alert('First one to 5 points wins!\nGood luck!');
game();