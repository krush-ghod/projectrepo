// lets start by writting a fuction that would say hello to the users specifically myself

const greetingMe = (name) => {
    name === "Davisone" ? console.log(`Hello Mr ${name}, great to have here,`) : console.log(`hello ${name}`)
}

greetingMe("Davisone")

const getSpeedlim = (drSpeed, acSpeed) => {
    let diff = drSpeed - acSpeed
    drSpeed > acSpeed ? console.log(`Sorry I dont know what it is but you are going ${drSpeed}KM which is ${diff}KM above the speed limit ${acSpeed}KM`)
        : drSpeed < acSpeed ? console.log(`Thats greate you are driving safely...`) : console.log(`You are driving accurately!`)

}

getSpeedlim(55, 40)


const distanceTraveledMiles = [267, 345, 234, 190, 299]

const distanceTraveledKM = distanceTraveledMiles.map(distance => Math.round(distance * 1.6))

console.log(distanceTraveledKM)