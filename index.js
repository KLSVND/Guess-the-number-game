let computerNumber
let userNumbers = []
let attempts = 0
let maxguesses = 10


function newGame() {
    window.location.reload()
}

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
}

function compareNumbers() {
    const returnNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + returnNumber)
    document.getElementById('guesses').innerHTML = userNumbers

    if (attempts < maxguesses) {

        if (returnNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Your number is bigger than my number, try again!'
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
        }

        else if (returnNumber < computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Your number is lower than my number, try again!'
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
        }

        else {
            document.getElementById('textOutput').innerHTML = 'Congratulations, you won! :P '
            attempts++
            document.getElementById('attempts').innerHTML = attempts
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
        }

    }
    else {
        document.getElementById('textOutput').innerHTML = 'GameOver xD ! The computer number was ' + computerNumber
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }
}