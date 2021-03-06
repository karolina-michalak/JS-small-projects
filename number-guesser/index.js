let min = 1;
let max = 10;
let winningNum = getRandomNum(min, max);
let guessesLeft = 3;

const game = document.getElementById('game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const btn = document.querySelector('#guess-btn');
const input = document.querySelector('#guess-input');
const message = document.querySelector('.message')

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload()
    }
})

btn.addEventListener('click', function(){
    let guess = parseInt(input.value)
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, `red`)
    }
    if(guess === winningNum){
        gameOver(true, `${winningNum} is correct.`)
    } else {
        guessesLeft -= 1
        if(guessesLeft === 0){
            gameOver(false, `Game over, you lost. The correct number was ${winningNum}`)
        } else {
            input.style.borderColor = 'red'
            input.value = ''
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left.`, 'red')
        }
    }
})

gameOver = (won, msg) => {
    let color;
    won === true ? color = 'green' : color = 'red'
    input.disabled = true
    input.style.borderColor = color
    message.style.color = color
    setMessage(msg)

    btn.value = 'play again' 
    btn.className += 'play-again'
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

setMessage = (msg, color) => {
    message.style.color = color
    message.textContent = msg
}