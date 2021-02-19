const buttons = document.querySelectorAll('#button')


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        console.log("worked")
    })
}