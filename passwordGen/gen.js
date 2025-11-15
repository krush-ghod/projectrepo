let darkMode = document.getElementById("dwm")
const darkModeButton = document.getElementById("dwmb")
// form btns

let addS = false
let addN = false
 
function getBtns(){
    let addSymbols = document.getElementById("add-symbols")
    let addNumbers = document.getElementById("add-numbers")
    let passwordLenght = document.getElementById("pass-lenght").value
    // change the password lenght back into an int
    passwordLenght = parseInt(passwordLenght)

    // create a default lenght for the password to generate
    if (!passwordLenght){
        passwordLenght = 12
    } else {
        passwordLenght = passwordLenght
    }

    if (addNumbers.checked && addN == false){
        addN = true
    } else if(!addNumbers.checked && addN == true){
        addN = false
    }

    if (addSymbols.checked && addS == false){
        addS = true
    } else if(!addSymbols.checked && addS == true){
        addS = false
    }
    return [passwordLenght, addN, addS]
}


// displaying the passwords to the user
let passwordOne = document.getElementById("generated-pass1")
let passwordTwo = document.getElementById("generated-pass2")

// creating list of characters
let password = ""
let alpahbets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-1234567890"
let characters = [...alpahbets]

// developing the Number and symbols contraint
let Numb = "1234567890"
let Symb = "!@#$%^&*()_+-"

// creating the function that makes the system generate the password

// get random character
function getRandomCharacter(){
    let number = characters.length
    let randomIndex = Math.floor(Math.random() * number)
    let randomCharacter = characters[randomIndex]
    return randomCharacter
}

function generatePassword(){
    let [passwordLenght, addN, addS] = getBtns()
    for (let i = 0; i < passwordLenght; i++) {
        if (!addS && addN){
            let getCha = getRandomCharacter()
            let sanitized = Symb.includes(getCha)
            if (sanitized){
                password += ""
                passwordLenght += 1
            } else{
                password += getCha
            }
        } else if (!addN && addS){
            let getCha = getRandomCharacter()
            let sanitized = Numb.includes(getCha)
            if (sanitized){
                password += ""
                passwordLenght += 1
            } else {
                password += getCha            
            }
        } else if (!addN || !addS){
            let getCha = getRandomCharacter()
            if (Numb.includes(getCha) || Symb.includes(getCha)){
                password += ""
                passwordLenght += 1
            } else {
                password += getCha
            }
        } else {
            password += getRandomCharacter()
        }
    }
    return password
}

// creating a function that saves the password in th local storage

function savePassword(password, secondPass){
    password = JSON.parse(password)
    password.push(secondPass)
    password = JSON.stringify(password)
    localStorage.setItem("password", password)
}

let generate = document.getElementById("btn")

generate.addEventListener("click", function(){
    let passOne = generatePassword()
    password = ""
    let passTwo = generatePassword()
    password = ""
    passwordOne.textContent = passOne 
    passwordTwo.textContent = passTwo
    savePassword(passOne, passTwo)
})
