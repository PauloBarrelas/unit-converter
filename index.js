/*
1 meter = 3.28084 feet
1 liter = 0.264172 gallon
1 kilogram = 2.20462 pound
*/

const textInput = document.getElementById('input-units');
const convertBtn = document.getElementById('convert-btn')
const lengthText = document.getElementById('length-p');
const volumeText = document.getElementById('volume-p')
const massText = document.getElementById('mass-p')


textInput.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
resizeInput.call(textInput); // immediately call the function

function resizeInput() {
    this.style.width = this.value.length + 'ch';
}

convertBtn.addEventListener('click', function () {
    lengthText.textContent = `${textInput.value} meters = ${(textInput.value * 3.28084).toFixed(3)} feet | ${textInput.value} feet = ${(textInput.value / 3.28084).toFixed(3)} meters`

    volumeText.textContent = `${textInput.value} liters = ${(textInput.value * 0.264172).toFixed(3)} gallons | ${textInput.value} gallons = ${(textInput.value / 0.264172).toFixed(3)} liters`

    massText.textContent = `${textInput.value} kilos = ${(textInput.value * 2.20462).toFixed(3)} pounds | ${textInput.value} pounds = ${(textInput.value / 2.20462).toFixed(3)} kilos`


})