// grabs all the buttons for simon says
const buttons = document.getElementsByClassName('simon-button')
const intervalDisplay = document.getElementById('intervalDisplay')
const score = document.getElementById('score')
const modal = document.getElementById('modal');

// arrays to hold the player and computer choices
let playerArray = [];
const computerArray = [];

// hold audio files inside of the array
let audioFiles = [];

// variables for playComputerArray function
let num = 0
let counter = 0

// adding audio files to the audioFiles array
audioFiles[0] = new Audio('audio/C.mp3');
audioFiles[1] = new Audio('audio/D.mp3');
audioFiles[2] = new Audio('audio/E.mp3');
audioFiles[3] = new Audio('audio/F.mp3');
audioFiles[4] = new Audio('audio/G.mp3');
audioFiles[5] = new Audio('audio/A.mp3');
audioFiles[6] = new Audio('audio/B.mp3');
audioFiles[7] = new Audio('audio/C2.mp3');

// array for all the musical intervals
const intervals = ['same note', 'Major 2nd', 'Major 3rd', 'Perfect 4th', 'Perfect 5th', 'Major 6th', 'Major 7th', 'Octive']

// sets the opacity of all buttons containing notes
for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.opacity = .2;
}

// for loop that adds eventListeners to the buttons that pushes the value into the playerArray
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        playerArray.push(i)
        audioFiles[i].play()

        // adds funtionality to buttons that will check if the player & computer arrays match to determine game state
        if (playerArray.length === computerArray.length) {

            // if player array equal computer array 
            if (JSON.stringify(playerArray) == JSON.stringify(computerArray)) {

                // sets the innterText to the music interval if answer is correct
                if (intervals[choice] !== undefined) {
                    intervalDisplay.innerText = intervals[choice];
                }

                // clears player array for next round
                playerArray = []

                // increases score by 10 for every right answer
                score.innerHTML = parseInt(score.innerHTML) + 10

                // calls the generateComputerChoice function to continue game
                generateComputerChoice();

                // if player array doesnt equal computer array
            } else {

                // you failed game over 
                modal.style.display = 'block';

                // makes everything unclickable
                document.getElementById('simon').classList.add('disable');
            }
        }
    })

    // animation function for all buttons
    buttons[i].addEventListener('click', (event) => {
        event.target.style.opacity = 1;
        setTimeout(() => {
            event.target.style.opacity = 0.2;
        }, 600);
    })
}

// generates the computers choice and calls the playComputerArracy function 
function generateComputerChoice() {
    choice = Math.floor(Math.random() * 8)
    computerArray.push(choice)
    length = computerArray.length
    playComputerArray(length, counter)
}

// using recursion to playComputerArray
function playComputerArray(length, counter) {
    document.getElementById('simon').classList.add('disable');

    if (length > 0) {
        length = length - 1

        // using recursion to avoid javasctipts synchronousity
        setTimeout(() => {
            num = computerArray[counter]
            counter = counter + 1
            audioFiles[num].play();
            buttons[num].style.opacity = 1
            setTimeout(() => {
                buttons[num].style.opacity = 0.2;
            }, 600)
            playComputerArray(length, counter);
        }, 1200);
    } else {
        printDistance(computerArray, counter)
        document.getElementById('simon').classList.remove('disable');
        counter = 0;
    }
}

// used to find the distances between notes so we can find the interval to display on the screen
function printDistance(computerArray, counter) {
    choice = computerArray[counter - 1] - computerArray[counter - 2]
    if (choice < 0) {
        choice = choice / -1
    }
}
