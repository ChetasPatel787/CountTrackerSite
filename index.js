let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = " " + count + " -"
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function removeElem(){
    saveEl.textContent = saveEl.textContent.slice(0, -4)
}

function lapElem(){
    document.getElementById("lap-el").textContent += " " + count + " -"
}