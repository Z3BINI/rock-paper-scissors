const possibleChoices = ['Rock', 'Paper', 'Scissors']; //Both the player's and computer's only possible options.

let getComputerChoice = () => possibleChoices[Math.floor(Math.random() * 3)]; //Returns a random int from 0-2 as an index for the possibleChoices array.

let getPlayerChoice = () => {
    let playerChoice = prompt('Rock, paper or Scissors?'); //Prompt player for choice

    playerChoice = playerChoice.at(0).toUpperCase() + playerChoice.slice(1).toLowerCase(); //Format players choice to be useful

    return playerChoice;
}

function game() { //Game function to allow rounds to first 5 points

    let playerScore = 0;
    let cpuScore = 0;

    function playRound(cpuChoice, playerChoice) { //Takes computer and player input 

        switch (cpuChoice) { //Computer choice is put at test with player's

            case (playerChoice):
                return 'Tie!';
                break;

            case ('Rock'):
                if (playerChoice == 'Paper') {
                    playerScore++;
                    return 'Player wins! Paper beats Rock!';
                } else {
                    cpuScore++;
                    return 'Computer wins! Rock beats Scissors!';
                }
                break;

            case ('Paper'):
                if (playerChoice == 'Scissors') {
                    playerScore++;
                    return 'Player wins! Scissors beats Paper!';
                } else {
                    cpuScore++;
                    return 'Computer wins! Paper beats Rock!';
                }
                break;

            case ('Scissors'):
                if (playerChoice == 'Rock') {
                    playerScore++;
                    return 'Player wins! Rock beats Scissors!';
                } else {
                    cpuScore++;
                    return 'Computer wins! Scissors beats Paper!';
                }
                break;

            default:
                return 'Something went wrong!';
                break;

        }

    }

    while (playerScore < 5 && cpuScore < 5) { //The logic that allows a 5 point game to be played
        console.log('The player score is: ' + playerScore);
        console.log('The computer score is: ' + cpuScore);
        console.warn(playRound(getComputerChoice(), getPlayerChoice()));
    }

    console.log('Final Score: Player-> ' + playerScore + ' | Computer-> ' + cpuScore); //Shows final score since while exits as soon as someone hits 5 points
}

game();

