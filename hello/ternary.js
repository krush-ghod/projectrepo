const myName = "Davisone"
const guessedName = "Blessing"

function guessedGame(name){
    // start the switch statement
    switch (name) {
        case myName:
            console.log("you are right")
            break
        case guessedName:
            console.log("You are close")
            break
        default:
            console.log("Sorry you are nowhere close!")
            break
    }
}
guessedGame("Blessing")


const dreamHoliday={
    place : "Hawai",
    duration : "Two weeks",
    month : "December",
    day : 24,
    partner: "Granny"
}

const{place, duration, month, day, partner} = dreamHoliday

const message = `You want to have your holidays at ${place} for ${duration} with your ${partner} on the ${day} day of ${month}`
console.log(message)

function God(withWho, when){
    if (withWho == partner && when == month){
        console.log("Your dream would come to pass")
    } else{
        console.log("You gotta take care of your granny!")
    }
}


// when callin a fuction in the setTimeout function do not add the parenthesis, just call it
setTimeout(God, 10000, "Granny", "December")