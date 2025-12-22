let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")
let lengthSection = document.getElementById("length-section")
let volumeSection = document.getElementById("volume-section")
let massSection = document.getElementById("mass-section")

convertBtn.addEventListener("click", function() {
    let inputValue = parseFloat(inputEl.value)
    if (isNaN(inputValue)) {
        alert("Please enter a valid number")
        return
    }
    // Length Conversion
    let metersTofeet  = (inputValue * 3.28084).toFixed(3)
    let feetTometers  = (inputValue / 3.28084).toFixed(3)
    lengthSection.textContent = `${inputValue} meters = ${metersTofeet} feet | ${inputValue} feet = ${feetTometers} meters`

    // Volume Conversion
    let litersToGallons = (inputValue * 0.264172).toFixed(3)
    let gallonsToLiters = (inputValue / 0.264172).toFixed(3)
    volumeSection.textContent = `${inputValue} liters = ${litersToGallons} gallons | ${inputValue} gallons = ${gallonsToLiters} liters`

    // Mass Conversion
    let kilosToPounds = (inputValue * 2.20462).toFixed(3)
    let poundsToKilos = (inputValue / 2.20462).toFixed(3)
    massSection.textContent = `${inputValue} kilos = ${kilosToPounds} pounds | ${inputValue} pounds = ${poundsToKilos} kilos`


})