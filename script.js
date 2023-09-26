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

function game(){
    for(let i = 1; i<=5; i++)
    {
        let player = prompt();
        console.log(playRound(player,getComputerChoice()));
    }
}

game();
