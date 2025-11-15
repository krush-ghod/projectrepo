// starting the java script for DOM
// get the home score figure...
let homeScore = document.getElementById("home-Score")
let homeCount = 0

let awayScore = document.getElementById("away-Score")
let awayCount = 0

let HomeaddF = 0
let AwayaddF = 0
let HomeaddT = 0
let AwayaddT = 0
let homeFouls = document.getElementById("h-fouls")
let awayFouls = document.getElementById("a-fouls")
let homeTimeouts = document.getElementById("h-timeouts")
let awayTimeouts = document.getElementById("a-timeouts")

// write the add functions
function addOnePoint() {
    homeCount += 1
    homeScore.textContent = homeCount
}

function addTwoPoints() {
    homeCount += 2
    homeScore.textContent = homeCount
}

function addThreePoints() {
    homeCount += 3
    homeScore.textContent = homeCount
}


function GuestaddOnePoint() {
    awayCount += 1
    awayScore.textContent = awayCount
}

function GuestaddTwoPoints() {
    awayCount += 2
    awayScore.textContent = awayCount
}
function GuestaddThreePoints() {
    awayCount += 3
    awayScore.textContent = awayCount
}


// functions for time outs and fouls
function GuestaddF(){
    AwayaddF += 1
    awayFouls.textContent = AwayaddF
}

function addF(){
    HomeaddF += 1
    homeFouls.textContent = HomeaddF
}

function addT(){
    HomeaddT += 1
    homeTimeouts.textContent = HomeaddT
}

function GuestaddT(){
    AwayaddT += 1
    awayTimeouts.textContent = AwayaddT
}
