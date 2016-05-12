 ////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'");
    return prompt("Please choose either Rock, Paper, or Scissors");
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
    // The rules of sthe game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
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
    console.log("Let's play Rock, Paper, Scissors... In the Matrix");
    alert("Let's play Rock, Paper, Scissors... In the Matrix.\n \n Press enter to continue");
    alert("You are Neo, engaging in an epic rock, paper, scissors battle with Agent Smith to decide the fate of the The Matrix, The Machine World, and Humanity. \n\nThe first player to 5 wins. \n\n The fate of reality lies in your hands. Are You Ready?" )
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
        while (playerWins < 5 && computerWins <5){
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
            if (winner === "tie") {
                console.log ("An intense quarell ends in a stalemate. Neo and Agent Smith both picked  "+playerMove+"!");
                alert("An intense quarell ends in a stalemate. Neo and Agent Smith both picked "+playerMove+"!");   
                    playerWins+=0, computerWins+=0;
    }
            
            else if (winner === "player") {
                console.log ("An epic victory for humanity! Neo's "+playerMove+" ravaged Agent Smith's "+computerMove+"!");
                alert ("An epic victory for humanity! Neo's "+playerMove+" ravaged Agent Smith's "+computerMove+"!");    
                    playerWins ++;
            }                
            
            else if (winner=== "computer"){
                console.log ("Score 1 for the singularity... The Machine's "+computerMove+" just completley obliterated Neo's "+playerMove+"!");
                alert ("Score 1 for the singularity... The Machine's "+computerMove+" just completley obliterated Neo's "+playerMove+"!");    
                    computerWins ++;
            }

                console.log("The score is currently "+playerWins+" to Neo V. "+computerWins+" for Agent Smith");
                alert ("The score is currently "+playerWins+" to Neo V. "+computerWins+" for Agent Smith. Please press enter to continue")
    }
            if (playerWins===5) {
            console.log ("After 5 hard fought victories, Neo successfully rebooted the Matrix... All is right with the world.");
            alert ("After 5 hard fought victories, Neo successfully rebooted the Matrix... All is right with the world.");
        }
            else if(computerWins ===5)  {
            console.log ("I killed you, Mr. Anderson. I watched you die... with a certain satisfaction, I might add.");
            alert ("I killed you, Mr. Anderson. I watched you die... with a certain satisfaction, I might add.");
        }
        return [playerWins, computerWins];
};

playToFive();


