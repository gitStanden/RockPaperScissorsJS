function getComputerChoice(){
    const rps = ['ROCK', 'PAPER', 'SCISSORS'];
    const randomChoice = Math.floor(Math.random() * rps.length);
    return rps[randomChoice];
};

function playerRock(computerSelection){
    if(computerSelection == 'ROCK'){
        console.log('Computer chose ROCK\nRock vs Rock - TIE!');
    } else if (computerSelection == 'PAPER'){
        console.log('Computer chose PAPER\nPaper beats Rock - YOU LOSE!');
    } else if (computerSelection == 'SCISSORS'){
        console.log('Computer chose SCISSORS\nRock beats Scissors - YOU WIN!');
    };
};

function playerPaper(computerSelection){
    if(computerSelection == 'ROCK'){
        console.log('Computer chose ROCK\n Paper beats Rock - YOU WIN!');
    } else if (computerSelection == 'PAPER'){
        console.log('Computer chose PAPER\nPaper vs Paper - TIE!');
    } else if (computerSelection == 'SCISSORS'){
        console.log('Computer chose SCISSORS\nScissors beats Paper - YOU LOSE!');
    };
};

function playerScissors(computerSelection){
    if(computerSelection == 'ROCK'){
        console.log('Computer chose ROCK\nRock beats Scissors - YOU LOSE!');
    } else if (computerSelection == 'PAPER'){
        console.log('Computer chose PAPER\nScissors beats Paper - YOU WIN!');
    } else if (computerSelection == 'SCISSORS'){
        console.log('Computer chose SCISSORS\nScissors vs Scissors - TIE!');
    };
};

function playRound(playerSelection,computerSelection){
    if(playerSelection == 'ROCK'){
        playerRock(computerSelection);
    }else if(playerSelection == 'PAPER'){
        playerPaper(computerSelection);
    }else if(playerSelection == 'SCISSORS'){
        playerScissors(computerSelection);
    };
};

function game(){
    for (let i = 0; i < 5; i++) {
        let round = i + 1;
        let playerSelection = prompt("Round " + round + "\nPlease enter \'ROCK\', \'PAPER\' or \'SCISSORS\': ").toUpperCase();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    };
};

game();