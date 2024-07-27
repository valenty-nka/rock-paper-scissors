//get computer to randomly pick rock paper or scissors 
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    const choice = choices[random];
    return choice;
};

//prompt user for a choice
function getHumanChoice(){
    let choice = prompt("Rock, Paper, Scissors?");
    return choice;
}

//create a computer score variable and initiate it 0
let computerScore = 0;
//create a human score variable and initiate it to 0
let humanScore = 0;

function determineWinner(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        return "tie";
    } else if (
        (humanChoice === "scissors" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors")
    ){
            return "computer";
    } else {
        return "human";
    }
}

function playRound(humanChoice, computerChoice) {
    const winner = determineWinner(humanChoice, computerChoice);
    if (winner === "human"){
        console.log(`You win. ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }else if(winner === "computer"){
        console.log(`You lose. ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }else {
        console.log("It's a tie!");
    }
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
}



function playGame(){
    //create function to play 5 rounds 
    
    for (let roundNumber = 1; roundNumber <=5; roundNumber++) {
        console.log(`Round: ${roundNumber}`);
        // get computer choice and assign it to a function
        let computerSelection = getComputerChoice();
        //get human choice and assign it to a function created earlier
        let humanSelection = getHumanChoice();
        if (humanSelection == null){
            console.log("Sorry to see you go! Do you want to try again?");
            return;
        }

         //make human choice case insensitive
        humanSelection = humanSelection.toLocaleLowerCase();
        if (["rock", "paper", "scissors"].includes(humanSelection)){
            playRound(humanSelection, computerSelection);
        }else {
            console.log("Invalid entry. Please choose rock, paper or scissors");
            roundNumber--;
        }
    
    }

     //alert the winner after 5 rounds
    if (computerScore > humanScore){
        console.log(`You lost the game! You got ${humanScore}, computer got ${computerScore}`);
    }else if (humanScore > computerScore) {
        console.log(`You won the game! You got ${humanScore}, computer got ${computerScore}`);
    }else {
        console.log(`It's a tie!You got ${humanScore}, computer got ${computerScore}`);
    }

}

playGame();


