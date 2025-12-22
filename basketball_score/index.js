let home_Score = document.getElementById("score-home")
let guest_Score = document.getElementById("score-guest")
let home_score_count = 0
let guest_score_count = 0

function homeadd1(){
    home_score_count += 1
    home_Score.innerText = home_score_count
    updateColor()
}

function homeadd2(){
    home_score_count += 2
    home_Score.innerText = home_score_count
    updateColor()
}

function homeadd3(){
    home_score_count += 3
    home_Score.innerText = home_score_count
    updateColor()
}

function guestadd1(){
    guest_score_count += 1
    guest_Score.innerText = guest_score_count
    updateColor()
}

function guestadd2(){
    guest_score_count += 2
    guest_Score.innerText = guest_score_count
    updateColor()
}

function guestadd3(){
    guest_score_count += 3
    guest_Score.innerText = guest_score_count
    updateColor()
}

function updateColor() {
    if (home_score_count > guest_score_count) {
        home_Score.style.color = "limegreen";
        guest_Score.style.color = "red";
    } else if (guest_score_count > home_score_count) {
        guest_Score.style.color = "limegreen";
        home_Score.style.color = "red";
    } else {
        home_Score.style.color = "white";
        guest_Score.style.color = "white";
    }
}

function reset(){
    home_score_count = 0
    guest_score_count = 0
    home_Score.innerText = home_score_count
    guest_Score.innerText = guest_score_count
    updateColor()

}