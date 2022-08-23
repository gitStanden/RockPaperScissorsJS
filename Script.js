function getComputerChoice(){
    const rps = ['ROCK', 'PAPER', 'SCISSORS'];
    const randomChoice = Math.floor(Math.random() * rps.length);
    return rps[randomChoice];
};

function playRound(playerSelection,computerSelection){
    if(playerSelection == 'ROCK'){
        if(computerSelection == 'ROCK'){
            console.log('Computer chose ROCK\nRock vs Rock - TIE!');
        } else if (computerSelection == 'PAPER'){
            console.log('Computer chose PAPER\nPaper beats Rock - YOU LOSE!');
        } else if (computerSelection == 'SCISSORS'){
            console.log('Computer chose SCISSORS\nRock beats Scissors - YOU WIN!');
        };
    }else if(playerSelection == 'PAPER'){
        if(computerSelection == 'ROCK'){
            console.log('Computer chose ROCK\n Paper beats Rock - YOU WIN!');
        } else if (computerSelection == 'PAPER'){
            console.log('Computer chose PAPER\nPaper vs Paper - TIE!');
        } else if (computerSelection == 'SCISSORS'){
            console.log('Computer chose SCISSORS\nScissors beats Paper - YOU LOSE!');
        };
    }else if(playerSelection == 'SCISSORS'){
        if(computerSelection == 'ROCK'){
            console.log('Computer chose ROCK\nRock beats Scissors - YOU LOSE!');
        } else if (computerSelection == 'PAPER'){
            console.log('Computer chose PAPER\nScissors beats Paper - YOU WIN!');
        } else if (computerSelection == 'SCISSORS'){
            console.log('Computer chose SCISSORS\nScissors vs Scissors - TIE!');
        };
    };
};


let playerSelection = prompt("Please enter \'ROCK\', \'PAPER\' or \'SCISSORS\': ").toUpperCase();
let computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);