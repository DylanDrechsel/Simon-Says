const buttons = document.getElementsByClassName('simon-button')
const playerArray = [];
const computerArray = [];
let audioFiles = [];

// adding audio files to the audioFiles array
audioFiles[0] = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
audioFiles[1] = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
audioFiles[2] = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
audioFiles[3] = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');


// for loop that adds eventListeners to the buttons that pushes the value into the playerArray
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        playerArray.push(i)
        audioFiles[i].play()
    })
}

//
function generateComputerChoice () {
    choice = Math.floor(Math.random() * 4)
    computerArray.push(choice)
}

generateComputerChoice()

function checkArrays (computerArray, playerArray) {
    for (let i = 0; i < computerArray.length; i++) {
        console.log(computerArray[i])
        console.log(playerArray[i])
    }
}