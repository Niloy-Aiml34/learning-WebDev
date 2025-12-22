

let countEL = document.getElementById("count_el")
let prevEnt = document.getElementById("prev_Ent")
console.log(prevEnt)
let count = 0

function increment(){
    count += 1
    countEL.innerText = count
    console.log(countEL)
}


function save(){
    let countstr = count + " - "
    prevEnt.innerText += countstr
}