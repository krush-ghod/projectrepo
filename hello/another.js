let hands = ["rock", "paper", "scissors"]

// create a function that plays this game

function getRandom(){
    for (let run = Math.floor(Math.random() * 3); run < 3; run){
        return hands[run]
    }
}


function gameLogic(result){
    let cpu = getRandom()
    if(result === cpu){
        console.log(cpu)
        console.log("Tie, try again")
    } else if (result ==="paper" && cpu === "scissors"){
        console.log(cpu)
        console.log("Sorry, you lost, because the scissors is stronger than you")
    } else if (result === "scissors" && cpu === "rock"){
        console.log(cpu)
        console.log("Sorry, you lost because the rock destroyed your scissors")
    } else if (result === "rock" && cpu === "paper"){
        console.log(cpu)
        console.log("Sorry, you gott covered by the paper")
    } else if (result != "rock" && result != "paper" && result != "scissors"){
        console.log("please use either rock or scissors or paper")
    } else {
        console.log(cpu)
        console.log("You won the game.")
    }
}

gameLogic("scissors")