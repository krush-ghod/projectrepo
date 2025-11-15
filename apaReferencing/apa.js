const authorName = document.getElementById("author-name")
const publishedDate = document.getElementById("published-date")
const paperTitle = document.getElementById("paper-title")
const source = document.getElementById("source")
const note = document.getElementById("add-note")

let savedNotes = JSON.parse(localStorage.getItem("references"))
if (savedNotes == null){
    savedNotes = []
} else {
    savedNotes = savedNotes
}

let savedNotesToCopy = JSON.parse(localStorage.getItem("text"))
if (savedNotesToCopy == null){
    savedNotesToCopy = []
} else {
    savedNotesToCopy = savedNotesToCopy
}

// getting btn trigger will be using event-listeners
const saveInfo = document.getElementById("saveInfo")
const copyURL = document.getElementById("copyURL")
const copyInfo = document.getElementById("copyInfo")
const clearStorage = document.getElementById("clearStorage")

// automatically, displaying the saved notes
autoDisplay()


// testing the btns

saveInfo.addEventListener("click", function(){
    let details = `${authorName.value} (${publishedDate.value}) ${paperTitle.value} [<a href="${source.value}" target="_blank">${source.value}</a>] | ${note.value}`
    let rawData = `${authorName.value} (${publishedDate.value}) ${paperTitle.value} [${source.value}] | ${note.value}`
    savedNotes.push(details)
    savedNotesToCopy.push(rawData)
    localStorage.setItem("copy", JSON.stringify(savedNotesToCopy))
    localStorage.setItem("references",JSON.stringify(savedNotes))
    let displayReference = document.getElementById("savedReferences")
    let refItem = `<li> ${details} </li>`
    displayReference.innerHTML += refItem
    resetValues()
})


function autoDisplay(){
    let displayReference = document.getElementById("savedReferences")
    let savedNotes = JSON.parse(localStorage.getItem("references"))
    if (savedNotes == null){
        savedNotes = []
    } else {
        for (let i = 0; i < savedNotes.length; i++){
            let listedNotes = ""
            listedNotes+=`<li> ${savedNotes[i]} </li>`
        }
        displayReference.innerHTML = listedNotes
    }
}




function resetValues(){
    authorName.value = ""
    publishedDate.value = ""
    paperTitle.value = ""
    source.value = ""
    note.value = ""
}

clearStorage.addEventListener("dblclick", function(){
    localStorage.clear()
    savedNotes = []
    let displayReference = document.getElementById("savedReferences")
    displayReference.innerHTML = ""
})

copyURL.addEventListener("click",function(){
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        source.value = tabs[0].url
        return source.value
    })
})

copyInfo.addEventListener("click", function(){
    const textToCopy = JSON.stringify(savedNotesToCopy)
    navigator.clipboard.writeText(textToCopy).then(() =>{
        // drop the copied to clipboard message
        alert("Infomation copied to Clipboard")
    })
    .catch(err =>{
        alert("An error occured during copy initiation, please try again.")
    })
})