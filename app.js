// grabs all the buttons for simon says
const buttons = document.getElementsByClassName('simon-button')
const checkArraysButton = document.getElementById('checkArray')

// arrays to hold the player and computer choices
let playerArray = [];
const computerArray = [];

// hold audio files inside of the array
let audioFiles = [];

// variables for playComputerArray function
let num = 0
let counter = 0

// adding audio files to the audioFiles array
audioFiles[0] = new Audio('audio/Middle C-[AudioTrimmer.com].mp3');
audioFiles[1] = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
audioFiles[2] = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
audioFiles[3] = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');


// for loop that adds eventListeners to the buttons that pushes the value into the playerArray
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        playerArray.push(i)
        audioFiles[i].play()

        // adds funtionality to buttons that will check if the player & computer arrays match to determine game state
        if (playerArray.length === computerArray.length) {
					if (JSON.stringify(playerArray) == JSON.stringify(computerArray)) {
						console.log('hit');
						playerArray = []
						generateComputerChoice();
					} else {
						console.log('GAMEOVER');
					}
				}
    })
}

// generates the computers choice and calls the playComputerArracy function 
function generateComputerChoice() {
    choice = Math.floor(Math.random() * 4)
    computerArray.push(choice)
    length = computerArray.length
    // let counter = 0
    // console.log(length)
    playComputerArray(length, counter)
}

// using recursion to playComputerArray
function playComputerArray(length, counter) {
    // console.log(length)
    if (length > 0) {
        length = length - 1
        
        // using recursion to avoid javasctipts synchronousity
        setTimeout(() => {
            num = computerArray[counter]
            counter = counter + 1
            // console.log(num)
            audioFiles[num].play();
            playComputerArray(length, counter);
        }, 1000);
    } else {
        printDistance(computerArray, counter)
        counter = 0;
        // console.log('end of loop')
        
    }
}

function printDistance (computerArray, counter) {
    // console.log(counter)
    // console.log(computerArray[counter - 2])
    // console.log(computerArray[counter - 1])
    console.log(computerArray[counter - 1] - computerArray[counter - 2])
}