////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
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

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var player;
    if (move == 'rock' || move == 'paper' || move == 'scissors') { // if(move) did not check for correct input
    	player = move;
    }
    else {
    	player = getInput();
    }
    return player;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var computer;
    if (move == 'rock' || move == 'paper' || move == 'scissors') {
    	computer = move;
    }
    else {
    	computer = randomPlay();
    }
    return computer;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /*
    switch(playerMove) {
    	case 'rock':
    		if (computerMove == 'rock') {
    			winner = 'tie';
    			break;
    		}
    		else if (computerMove == 'paper') {
    			winner = 'computer';
    			break;
    		}
    		else {
    			winner = 'player';
    			break;
    		}
    	case 'paper':
    		if (computerMove == 'rock') {
    			winner = 'player';
    			break;
    		}
    		else if (computerMove == 'paper') {
    			winner = 'tie';
    			break;
    		}
    		else {
    			winner = 'computer';
    			break;
    		}
    	case 'scissors':
    		if (computerMove == 'rock') {
    			winner = 'computer';
    			break;
    		}
    		else if (computerMove == 'paper') {
    			winner = 'player';
    			break;
    		}
    		else {
    			winner = 'tie';
    			break;
    		}
    }
    */

    //code without breaks
    switch(playerMove) {
    	case 'rock':
    		if (computerMove == 'rock') {
    			return 'tie';
    		}
    		else if (computerMove == 'paper') {
    			return 'computer';
    		}
    		else {
    			return 'player';
    		}
    	case 'paper':
    		if (computerMove == 'rock') {
    			return 'player';
    		}
    		else if (computerMove == 'paper') {
    			return 'tie';
    		}
    		else {
    			return 'computer';
    		}
    	case 'scissors':
    		if (computerMove == 'rock') {
    			return 'computer';
    		}
    		else if (computerMove == 'paper') {
    			return 'player';
    		}
    		else {
    			return 'tie';
    		}
    }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    var playerMove; //track player move
    var computerMove; //track computer move
    var winner; //track round winner

    while (playerWins < 5 && computerWins < 5) { //while loop to iterate through game until someone wins
    	playerMove = getPlayerMove(null);
    	computerMove = getComputerMove(null);
    	winner = getWinner(playerMove, computerMove);
    	if (winner == 'player') {
    		playerWins++;
    		console.log("You win the round.");
    	}
    	else if (winner == 'computer') {
    		computerWins++;
    		console.log("The computer wins the round.");
    	}
    	else {
    		console.log("It's a tie.");
    	}
    	console.log("The score is now: " + playerWins + '-' + computerWins);
    }

    //victory/defeat message
    if (playerWins == 5) {
    	console.log("You beat the computer " + playerWins + " to " + computerWins + "!");
    }
    else {
    	console.log("The computer won.");
    }

    return [playerWins, computerWins];
}
