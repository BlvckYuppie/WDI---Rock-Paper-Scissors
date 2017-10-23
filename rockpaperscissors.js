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

var getPlayerMove = function(move) {
  return move || getInput();
};

var getComputerMove = function(move) {
  return move || randomPlay();
};

var getWinner = function(playerMove,computerMove) {
  var winner;
  if ( playerMove === computerMove ) {
    winner = "tie";
  }
  else if ( playerMove === "rock") {
    if ( computerMove === "scissors") {
      winner = "player";
    }
    else {
      winner= "computer";
    }
  }
  else if (playerMove === "paper") {
    if (computerMove === "rock") {
      winner = "player";
    }
    else {
      winner = "computer";
    }
  }
  else if (playerMove === "scissors") {
    if (computerMove === "paper") {
      winner = "player";
    }
    else {
      winner="computer";
    }
  }
  return winner;
};

var playToFive= function() {
  alert("Let's play Rock, Paper, Scissors... In The Matrix.\n\nPress enter to continue");
  alert("This is your last chance. After this, there is no turning back. \nYou take the blue pill -- the story ends, you wake up in your bed and believe whatever you want to believe. \nYou take the red pill -- you stay in Wonderland and I show you how deep the rabbit hole goes.\n\n- Morpheus");
  alert("To take the Red Pill, Press Enter. \n\nTo take the Blue Pill, Terminate Your Browser");
  alert("You are Neo, engaging in an epic rock, paper, scissors battle with Agent Smith to decide the fate of the The Matrix, The Machine World, and Humanity. \n\nThe first player to 5 wins. \n\nThe fate of reality lies in your hands. Are You Ready?" );

  var playerWins = 0;
  var computerWins = 0;

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
    alert ("The score is currently "+playerWins+" for Neo V. "+computerWins+" for Agent Smith. Please press enter to continue");
  }

  if (playerWins===5) {
    console.log ("After 5 hard fought victories, Neo successfully rebooted the Matrix... All is right with the world.");
    alert ("After 5 hard fought victories, Neo defeated Agent Smith, successfully rebooting the Matrix... All is right with the world.");
    alert ("Everything that has a beginning, has an end Neo. \n\n-The Oracle");
  }
  else if(computerWins ===5)  {
    console.log ("I killed you, Mr. Anderson. I watched you die... with a certain satisfaction, I might add.");
    alert ("I killed you, Mr. Anderson. I watched you die... with a certain satisfaction, I might add.\n\n-Agent Smith");
  }
  return [playerWins, computerWins];
};

playToFive();
