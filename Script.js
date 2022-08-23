function getComputerChoice(){
    const rps = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = Math.floor(Math.random() * rps.length);
    console.log(rps[randomChoice]);
};

getComputerChoice();