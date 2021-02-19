// grabs all the buttons for simon says
const buttons = document.getElementsByClassName('simon-button')

// arrays to hold the player and computer choices
const playerArray = [];

const computerArray = [5, 0, 1, 2, 3];
// hold audio files inside of the array
let audioFiles = [];

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
        playerArray.push(i)
        audioFiles[i].play()
    })
}

// generates the computers choice
function generateComputerChoice() {
    choice = Math.floor(Math.random() * 4)
    computerArray.push(choice)
    playComputerArray()
}

function checkArrays(computerArray, playerArray) {
    for (let i = 0; i < computerArray.length; i++) {
        console.log(computerArray[i])
        console.log(playerArray[i])
    }
}

// function playComputerArray() {
//     for (let i = 0; i < computerArray.length; i++) {
//         let num = computerArray[i];
//         doSetTimeout(i)
//         console.log(num);
//         // audioFiles[num].play();
//         // setTimeout(() => {audioFiles[i].play()}, 1000)
//     }
// }

// function doSetTimeout(i) {
//     setTimeout(() => {audioFiles[i].play()}, 1000)
// }

// for (let i = 0; i < computerArray.length; i++) {
// 	setTimeout(() => {
// 		console.log(computerArray[i]);
// 	}, 1000);
// }

let length = computerArray.length;
function playComputerArray() {
    // console.log(length)
    counter = counter + 1
    length = length - 1
    if (length > 0) {
        
        setTimeout(() => {
            num = generateLocation(counter, length);
            audioFiles[num].play();
            playComputerArray();
        }, 1000);
        
    } else {
        console.log('end of loop')
    }

}

function generateLocation(counter, length) {
    if (length > 0) {
        console.log(computerArray[counter]);
        return num = computerArray[counter]
    }
}

// setTimeout(() => {
//     for (let i = 0; i < computerArray.length; i++) {
// 			let num = computerArray[i];
// 			console.log(num);
// 			// audioFiles[num].play();
// 			setInterval(() => {
// 				audioFiles[i].play();
// 			}, 1000);
// 		}
// }, 5000)

/* function doSetTimeout(i) {
	setTimeout(function () {
		alert(i);
	}, 1000);
} */

// for (var i = 1; i <= 2; ++i) {
//     doSetTimeout(i);}

// for (let i = 1; i <= 2; i++) {
// 	setTimeout(function () {
// 		alert(i);
// 	}, 1000);
// }
