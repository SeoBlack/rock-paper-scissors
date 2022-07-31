let buttons   = document.querySelectorAll(".btn");
let playerChoice;
let computerChoice;
let weapons = ['Rock','Paper','Scissor'];
let computerScore = 0;
let playerScore = 0;

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}
function playGround(playerChoice,computerChoice){
    let feedText;
    if (playerChoice == computerChoice){
        feedText = "draw game";
    }
    else if(playerChoice == "Rock" && computerChoice == "Paper"){
        feedText = `Computer wins,   ${computerChoice}   beats  ${playerChoice}` ;
        computerScore += 1;

    }
    else if(playerChoice == "Rock" && computerChoice == "Scissor"){
        feedText = `Player wins,   ${playerChoice}   beats   ${computerChoice}`;
        playerScore += 1;

    }
    else if(playerChoice == "Paper" && computerChoice == "Scissor"){
        feedText = `Computer wins,    ${computerChoice} beats  ${playerChoice}` ;
        computerScore += 1;

    }
    else if(playerChoice == "Paper" && computerChoice == "Rock"){
        feedText = `Player wins,   ${playerChoice}   beats   ${computerChoice}`;
        playerScore += 1;

    }
    else if(playerChoice == "Scissor" && computerChoice == "Paper"){
        feedText = `Player wins,   ${playerChoice}   beats  ${computerChoice}`;
        playerScore += 1; 

    }
    else if(playerChoice == "Scissor" && computerChoice == "Rock"){
        feedText = `Computer wins,    ${computerChoice}   beats  ${playerChoice}` ;
        computerScore += 1;

    }
    document.querySelector(".feed").textContent = feedText;
    document.querySelector(".result_humen").textContent = playerScore;
    document.querySelector(".result_computer").textContent = computerScore;




}
function endGame(computerScore,playerScore){
    if (computerScore >= 5){
        alert("Computer Won\n refresh the page to start again");
        window.location.reload();
    }
    else if(playerScore >= 5){
        alert("Player Won\n refresh the page to start again");
        window.location.reload();
        
    }
}

buttons.forEach( button => {
    button.addEventListener('click',function(){
        computerChoice = weapons[getComputerChoice()];
        playerChoice =  button.getAttribute("id")
        playGround(playerChoice,computerChoice);
        endGame(computerScore,playerScore);
        console.log(computerChoice);
    })
})

