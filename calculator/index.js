let num1 = 10
let num2 = 0

document.getElementById('num1-el').textContent = num1
document.getElementById('num2-el').textContent = num2
// resultEl = document.getElementById('result-el').innerText

function add(){
    let result =  num1 + num2
    document.getElementById("result-el").innerText = result
}

function substract(){
    let result =  num1 - num2
    document.getElementById("result-el").innerText = result
}

function divide(){
    if(num2==0){
        document.getElementById("result-el").innerText = "Cant divide by 0"
    }
    else{
        let result =  num1 / num2
        document.getElementById("result-el").innerText = result
    }
}

function multiply(){
    let result =  num1 * num2
    document.getElementById("result-el").innerText = result
}