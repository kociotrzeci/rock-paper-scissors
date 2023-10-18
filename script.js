function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3)+1;
    switch (randomNumber){
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors"
    }
}
function playRound (player, computer){
    player = player.toLowerCase();
    player = player.charAt(0).toUpperCase()+player.slice(1);
    if (player === computer) return("Tie! " + player +" on both sides"); 
    if (outcome(player, computer)) return "You won! "+player+" beats "+computer;
    else return "You loose! "+computer+" beats "+player;
}

function outcome(player, computer){
        switch (player){
            case "Rock":
                if(computer === "Paper") return 0; else return 1;
                break;
            case "Paper":
                if(computer === "Scissors") return 0; else return 1;
                break;
            case "Scissors":
                if(computer === "Rock") return 0; else return 1;
                break;
        }
}
/*
function game(){
    for(let i = 1; i<=5; i++)
    {
        let player = prompt();
        console.log(playRound(player,getComputerChoice()));
    }
}
*/
function play (){
    const computer = getComputerChoice();
    prompt.textContent = playRound(this.id,computer)
    if (this.id === computer){}
    else
    {
        if (outcome (this.id, computer)) scoreUser++;
        else scoreComputer++;
    }
    score.textContent = scoreUser + " : " + scoreComputer;
    if (scoreUser === 5 || scoreComputer === 5)
    {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        const winner = document.createElement('div');
        if (scoreUser === 5) winner.textContent ="YOU WIN!";
        else winner.textContent = "YOU LOOSE!";
        const buttonRestart = document.createElement("button");
        buttonRestart.textContent = "RESTART";
        container.appendChild(buttonRestart);
        container.appendChild(winner);
        buttonRestart.addEventListener('click',restart);
    }
}

function restart(){
    scoreUser = 0;
    scoreComputer = 0;
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.appendChild(buttonRock);
    container.appendChild(buttonPaper);
    container.appendChild(buttonScissors);
    prompt.textContent = "";
    score.textContent = scoreUser + " : " + scoreComputer;

}



let scoreUser = 0;
let scoreComputer = 0;
const div = document.querySelector('div');
const buttonRock = document.querySelector('#Rock');
const buttonPaper = document.querySelector("#Paper");
const buttonScissors = document.querySelector("#Scissors");
const container = document.querySelector("#container");
const prompt = document.querySelector('#prompt');
const score = document.querySelector('#score')



buttonRock.addEventListener("click",play);
buttonPaper.addEventListener("click",play);
buttonScissors.addEventListener("click",play);


