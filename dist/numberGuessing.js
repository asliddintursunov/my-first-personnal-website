let userInput = document.getElementById('user-input');
let guessButton = document.getElementById('guess-button');
let winResult = document.getElementById('win-result');
let loseResult = document.getElementById('lose-result');
let previousGuess = document.getElementById('previous-guess');
let yourGuess = document.getElementById('your-guesses');
let remainimgTries = document.getElementById('remaining-guesses');
let highOrLow = document.getElementById('high-low');
let result = document.querySelector('.results');
let tryAgainButton = document.getElementById('try-again');
let yourGuessAdder = document.getElementById('your-guesses-adder');
let leftTries = 7;

let computerRandom = Math.floor(Math.random() * 500) + 1;
let displayNumber = document.createElement('h4');
displayNumber.classList.add('mb-4');
displayNumber.textContent = `The number was ${computerRandom}`;
displayNumber.style.color = 'yellow';

const youWinFunction = () => {
    loseResult.style = `display: none`;
    winResult.style = `display: block;`
    winResult.style.color = 'green';
}

const youLoseFunction = () => {
    winResult.style = `display: none;`
    loseResult.style = `display: block;`
    loseResult.style.color = 'red';
}

const highFunc = () => {
    if(Number(userInput.value) - computerRandom > 100){
        highOrLow.style = 'display: none;'
        setTimeout(() => {
            highOrLow.style = 'display: block;'
            highOrLow.style.color = 'red';
            highOrLow.textContent = 'Too high 😕';
        }, 500);
    } else{
        highOrLow.style = 'display: none;'
        setTimeout(() => {
            highOrLow.style = 'display: block;'
            highOrLow.style.color = 'yellow';
            highOrLow.textContent = 'Close but little bit higher 🤔';
        }, 500);
    }
}
const lowFunc = () => {
    if(computerRandom - Number(userInput.value) > 100){
        highOrLow.style = 'display: none;'
        setTimeout(() => {
            highOrLow.style = 'display: block;'
            highOrLow.style.color = 'red';
            highOrLow.textContent = 'Too low 😕'
        }, 500);
    } else{
        highOrLow.style = 'display: none;'
        setTimeout(() => {
            highOrLow.style = 'display: block;'
            highOrLow.style.color = 'yellow';
            highOrLow.textContent = 'Close but litte bit lower 🤔';
        }, 500);
    }
}
const winFunc = () => {
    highOrLow.style = 'color: rgb(5, 180, 5);';
    highOrLow.textContent = 'Exact number 😃';                         
}

const guessDisplayFunction = () =>{
    previousGuess.textContent = `previous guess: ${Number(userInput.value)}`;
    yourGuessAdder.textContent += `${Number(userInput.value)}, `;
}
const eachTryFunc = () => {
    if (leftTries <= 0) {
        return
    }
    else if (leftTries > 0){
        guessDisplayFunction()
    }
    leftTries--;
    if (leftTries == 7 || leftTries == 6) {
        remainimgTries.style.color = 'green';
    } else if(leftTries <= 5 && leftTries >= 3 ){
        remainimgTries.style.color = 'yellow';
    } else if(leftTries >= 1 && leftTries <= 2){
        remainimgTries.style.color = 'red';
    }
    if (leftTries > 0 || Number(userInput.value) == computerRandom) {
        if (Number(userInput.value) != computerRandom) {
            if (Number(userInput.value) > computerRandom) {
                highFunc()
            } else if(Number(userInput.value) < computerRandom){
                lowFunc()
            }
            
        } else if(Number(userInput.value) == computerRandom){
                winFunc()
                youWinFunction()
                result.prepend(displayNumber);
                tryAgainButton.style = 'display: block;'
            }
            remainimgTries.textContent = `Remaining try: ${leftTries}/7`;
    } else if (leftTries <= 0){
        youLoseFunction()
        result.prepend(displayNumber);
        remainimgTries.textContent = `Remaining try: ${leftTries}/7`;
        highOrLow.style = 'display: none;'
        tryAgainButton.style = 'display: block;'
        
    }
    

}

guessButton.onclick = () => {
    eachTryFunc()
    userInput.focus()
    userInput.value = '';
}
window.addEventListener('keyup', (e) => {
    if (e.key == "Enter") {
        eachTryFunc()
        userInput.focus()
        userInput.value = '';
    }
})

tryAgainButton.onclick = () => window.location.reload();

console.log(computerRandom);