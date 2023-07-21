const possibleChoices = ['Rock', 'Paper', 'Scissors']; //Both the player's and computer's only possible options.

let getComputerChoice = () => possibleChoices[Math.floor(Math.random() * 3)]; //Returns a random int from 0-2 as an index for the options.


console.log(getComputerChoice()); 