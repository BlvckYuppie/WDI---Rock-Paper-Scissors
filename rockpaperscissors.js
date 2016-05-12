////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var getPlayerMove = function(move) {    

    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
};

var getComputerMove = function(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
};

var getWinner = function(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove=== computerMove) {
        winner = "tie";
}
    else if (playerMove=== "rock") {
        if (computerMove === "scissors") {
            winner = "player";
        }
        else{
            winner= "computer";
        }
}
    else if (playerMove === "paper") {
        if (computerMove === "rock") {
            winner = "player";
        }
        else{
            winner = "computer";
        }
}
    else if (playerMove === "scissors") {
        if (computerMove === "paper") {
            winner = "player";
        }
        else{
            winner="computer";
        }
    }
        return winner;
};

var playToFive= function() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
        while (playerWins < 5 && computerWins <5){
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
            if (winner === "tie") {
                console.log ("Zion isn't yet victoriious, but it has survived to fight another day. You and agent Smith both picked "+playerMove+"!");
                    playerWins+=0, computerWins+=0;
    }
            
            else if (winner === "player") {
                console.log ("Pow! One for humanity! Zion's "+playerMove+" ravaged Agent Smith's "+computerMove+"!");
                    playerWins +=1;
            }                
            
            else if (winner=== "computer"){
                console.log ("Score 1 for the singularity... The Machine's "+computerMove+" just completley obliterated Zions "+playerMove+"!");
                    computerWins +=1;
            }

                console.log("The score is currently "+playerWins+" to Neo V. "+computerWins+" for Agent Smith");
    }
            if (playerWins===5) {
            console.log ("After 5 hard fought victories, Neo successfully rebooted the Matrix... All is right with the world.");
        }
            else if(playerWins ===5)  {
            console.log ("I killed you, Mr. Anderson. I watched you die... with a certain satisfaction, I might add.");
        }
        return [playerWins, computerWins];
};

playToFive();


