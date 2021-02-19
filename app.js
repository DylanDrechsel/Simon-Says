const buttons = document.getElementsByClassName('simon-button')
const playerArray = [];
const computerArray = [];
let audioFiles = [];

// for loop that adds eventListeners to the buttons that pushes the value into the playerArray
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        playerArray.push(i)
    })
}