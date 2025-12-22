

function randomInt(min,max){
    return Math.floor(Math.random() * (max-min+1)) +1;
}

let messageEl = document.getElementById("message-el")
let cardsEL = document.getElementById("cards-el")
let sumEl= document.getElementById("sum-el")
let sum =0

function conditionCheck(sum){
    if(sum < 21){
        message = "Do you want to draw a new card ?";
    }
    else if(sum === 21){
        message = "You got a Blackjack!";
    }
    else{
        message = "You are out of your game";
    }
    messageEl.textContent = message
}

function startgame(){
    let first_card = randomInt(2,11)
    let second_card  = randomInt(2,11)
    sum = first_card + second_card

    cardsEL.textContent = first_card + " " + second_card
    sumEl.textContent = sum;

    conditionCheck(sum)
}


function drawNewCard(){
    let new_card = randomInt(2,11)
    sum += new_card
    cardsEL.textContent += " "+ new_card;
    sumEl.textContent = sum;
    conditionCheck(sum);
}