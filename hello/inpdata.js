import { students as student, teachers as teacher } from "./data.js"

console.log(teacher[5], student[8])


let dateSnapshot = new Date()

console.log(dateSnapshot.toUTCString())

// Error constructors uses the same format as the Date constructor
function checkError(something){
    if (something){
        console.log(something)
    } else {
        throw new Error("There's nothing in the function");
        
    }
}

try {
    checkError()
} catch (e) {
    console.error(e)
}