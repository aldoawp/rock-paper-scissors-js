/*
    Rock paper scissors algorithm

    - Player choose between rock/paper/scissors
    - At the same time, the Computer also choosing.
    - After that, the system will compare the two. Who's win, the Player or the Computer.
    - The winning requirements are:
        - Rock beat scissors
        - Scissors beat paper
        - Paper beat rock
        - If the result are the same, then it's tied.
    - If one of the player win, then it will add score on their part
    - If the result is tied, no score is added.
    - The first player to reach the score of 5 will win the , it will be shown as "... is the winner!", 
      then the loser will be shown "... you lose, deal with it!"
*/

// A function to return random number
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Randomize the Computer selection
function getComputerChoice() {
    const theChamp = ["rock", "paper", "scissors"];
    let rndNum = getRndInteger(3, 0);
    return theChamp[rndNum];
}


computerSelection = getComputerChoice();
playerSelection = prompt("Pick your champ (Rock/Paper/Scissors): ").toLowerCase();

if (playerSelection == computerSelection) {
    console.log("it's a tied!")
} else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("Player is the winner!")
} else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("Player is the winner!")
} else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log("Player is the winner!")
} else {
    console.log("Computer is the winner!")
}

console.log(`You: ${playerSelection} Computer: ${computerSelection}`);
