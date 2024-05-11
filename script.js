console.log("hello");

function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);

    if(random === 2){
        return "rock";
    }else if(random == 1){
        return "paper";
    }else{
        return "scissor";
    }
}
function getHumanChoice() {
    let choice = prompt("Rock paper or Scissor?").toLocaleLowerCase();
    if(choice === "rock" || choice === "paper" || choice === "scissor"){
        return choice;
    }
    return "Invalid choice";
    
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice , computerChoice){
    if((humanChoice === "rock" && computerChoice === "scissor")||(humanChoice === "scissor" && computerChoice === "paper")||(humanChoice === "paper" && computerChoice === "rock")){
        humanScore++;
        console.log("Human Won");
    }else if((computerChoice === "rock" && humanChoice === "scissor")||(computerChoice === "scissor" && humanChoice === "paper")||(computerChoice === "paper" && humanChoice === "rock")){
        computerScore++;
        console.log("Computer Won");
    }else{
        console.log("Draw!")
    }
}

function playGame(){
    for(let i = 1; i <= 5;i++){
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        console.log("H:" +humanSelection + "  C:" + computerSelection);
        playRound(humanSelection, computerSelection);
    }

    if(humanScore > computerScore){
        console.log("Human won the game");
    }else{
        console.log("Computer won the game");
    }
}
playGame();
