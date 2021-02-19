// grabs all the buttons for simon says
const buttons = document.getElementsByClassName('simon-button')

// arrays to hold the player and computer choices
const playerArray = [];
const computerArray = [];

// hold audio files inside of the array
let audioFiles = [];

// variables for playComputerArray function
let num = 0
let counter = 0

// adding audio files to the audioFiles array
audioFiles[0] = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
audioFiles[1] = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
audioFiles[2] = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
audioFiles[3] = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');


// for loop that adds eventListeners to the buttons that pushes the value into the playerArray
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        playerArray.unshift(i)
        audioFiles[i].play()
    })
}

// generates the computers choice and calls the playComputerArracy function 
function generateComputerChoice() {
    choice = Math.floor(Math.random() * 4)
    computerArray.unshift(choice)
    length = computerArray.length
    // console.log(length)
    playComputerArray(length)
}

// using recursion to playComputerArray
function playComputerArray(length) {
    // console.log(length)
    if (length > 0) {
        length = length - 1

        // using recursion to avoid javasctipts asynchronousity
        setTimeout(() => {
            num = generateLocation(counter, length)
            counter = +1
            // console.log(num)
            audioFiles[num].play();
            playComputerArray(length);
        }, 1000);
    } else {
        console.log('end of loop')
    }

}

// pulls the value from the array index for the playComputerArray function
function generateLocation(length, counter) {
    console.log(counter)
    // console.log(computerArray[counter])
    return computerArray[counter]
}

function checkArrays(length, playerArray) {
    for (let i = 0; i < length; i++) {
        console.log(computerArray[i]);
        console.log(playerArray[i]);
    }
}