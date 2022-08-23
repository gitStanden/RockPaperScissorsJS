function getComputerChoice(){
    const rps = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = Math.floor(Math.random() * rps.length);
    console.log(rps[randomChoice]);
};

function playerSelection(){
    const selection = prompt("Please enter \'Rock\', \'Paper\' or \'Scissors\': ").toLowerCase();
    console.log(selection);
};

playerSelection();