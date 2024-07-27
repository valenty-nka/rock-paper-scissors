//get computer to randomly pick rock paper or scissors 
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    let choice = choices[random];
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
//declare a function with two parameters humanChoice and computerChoice
function playRound(humanChoice, computerChoice) {
    //compare human choice and computer choice - use if statements to compare 
    //log the result fo a round to the user
    //increment computer or human score by 1 point depending on who won the round
    if (humanChoice === "rock"){
        if (computerChoice === "paper"){
            console.log("You lose! Paper beats rock.");
            computerScore++;
        }else if (computerChoice === "scissors"){
            console.log("You win! Rock beats scissors");
            humanScore++;
        }else{
            console.log("It's a tie!");
        }
    } 
    if (humanChoice === "paper"){
        if (computerChoice === "scissors"){
            console.log("You lose! Scissors beat paper.");
            computerScore++;
        }else if(computerChoice === "rock"){
            console.log("You win! Paper beats rock.");
            humanScore++;
        }else{
            console.log("It's a tie!");
        }
    }
    if (humanChoice === "scissors"){
        if (computerChoice === "rock"){
            console.log("You lose! Rock beats scissors.");
            computerScore++;
        }else if(computerChoice === "paper"){
            console.log("You win! Scissors beat paper.");
            humanScore++;
        }else{
            console.log("It's a tie!");
        }
    }
    console.log(computerScore);
    console.log(humanScore);
}



function playGame(){
    //create function to play 5 rounds 
    roundNumber = 0;
    while (roundNumber < 5) {
        // get computer choice and assign it to a function
        let computerSelection = getComputerChoice();
        //get human choice and assign it to a function created earlier
        let humanSelection = getHumanChoice();
        if (humanSelection == null){
            console.log("Sorry to see you go! Do you want to try again?");
            return;
        }else {
         //make human choice case insensitive
        humanSelection = humanSelection.toLocaleLowerCase();
        if (humanSelection === "rock" || humanSelection === "paper" || humanSelection === "scissors"){
            playRound(humanSelection, computerSelection);
        roundNumber++;
        }else {
            console.log("Invalid entry");
            continue;
        }
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


