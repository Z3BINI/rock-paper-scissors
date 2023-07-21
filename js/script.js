const possibleChoices = ['Rock', 'Paper', 'Scissors']; //Both the player's and computer's only possible options.

let getComputerChoice = () => possibleChoices[Math.floor(Math.random() * 3)]; //Returns a random int from 0-2 as an index for the options.

function playRound(cpuChoice, playerChoice) { //Takes computer and player input 

    switch (cpuChoice) { //Computer choice is put at test with player's

        case (playerChoice):
            return 'Tie!';
            break;

        case ('Rock'):
            if (playerChoice == 'Paper') {
                return 'Player wins!';
            } else {
                return 'Computer wins!';
            }
            break;

        case ('Paper'):
            if (playerChoice == 'Scissors') {
                return 'Player wins!';
            } else {
                return 'Computer wins!';
            }
            break;

        case ('Scissors'):
            if (playerChoice == 'Rock') {
                return 'Player wins!';
            } else {
                return 'Computer wins!';
            }
            break;

        default:
            return 'Something went wrong!';
            break;

    }

}


console.error(playRound(getComputerChoice(), 'Paper')); 
