let min = 1;
let max = 10;
let winningNum = 2;
let guessesLeft = 3;

const game = document.getElementById('game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const btn = document.querySelector('#guess-btn');
const input = document.querySelector('#guess-input');
const message = document.querySelector('.message')

minNum.textContent = min;
maxNum.textContent = max;

btn.addEventListener('click', function(){
    let guess = parseInt(input.value)
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, `red`)
    }
    if(guess === winningNum){
        input.disabled = true
        input.style.borderColor = 'green'
        setMessage(`${winningNum} is correct`, `green`)
    } else {
        guessesLeft -= 1
        if(guessesLeft === 0){
            input.disabled = true
            input.style.borderColor = 'red'
            setMessage(`Game over, you lost. The correct number was ${winningNum}`, `red`)
        } else {
            input.style.borderColor = 'red'
            input.value = ''
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left.`, 'red')
        }
    }
})

setMessage = (msg, color) => {
    message.style.color = color
    message.textContent = msg
}