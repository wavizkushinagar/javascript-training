var randomNumber =Math.floor(Math.random() * 100 ) + 1;
console.log(randomNumber);

 var inputData = document.getElementById('inputData');
 var btn = document.getElementById('btn');
 var previous = document.getElementById('previous');
 var remaining = document.getElementById('remaining');
 var restart = document.getElementById('restart');
 var startOver = document.querySelector('.restartpass') 
 restart.style.display="none";
 var toLow = document.getElementById('toLow');
 //toLow.style.display='none';
 var p = document.createElement('p');
 let previousGuesses = [];
let numGuesses = 1;
let playGame = true;

if (playGame){
    btn.addEventListener('click', function(e){
       e.preventDefault();
        const guess = parseInt(inputData.value);
        validateGuess(guess);
    });
}


function validateGuess(guess){
    if (isNaN(guess)){
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1!');
    } else if (guess > 100){
        alert('Please enter a number less than 500!')
    } else {
        //Keep record of number of attempted guesses
        previousGuesses.push(guess);
        //Check to see if game is over
        if (numGuesses === 11){
            displayGuesses(guess);
            displayMessage(`Game Over! Number was ${randomNumber}`);
            endGame();
        } else {
        //Display previous guessed numbers
        displayGuesses(guess);
        //Check guess and display if wrong
        checkGuess(guess);
        }
    }
}


function checkGuess(guess){
    //Display clue if guess is too high or too low
    if (guess === randomNumber){
        displayMessage(`You guessed correctly!`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Too low! Try again!`);
    } else if (guess > randomNumber) {
        displayMessage(`Too High! Try again!`);
    }
}



//  const


function displayGuesses(guess){
    restart.style.display='block';
    inputData.value = '';
    previous.innerHTML += `<span class="guess_div">${guess}  </span>`;
    numGuesses++
    remaining.innerHTML = `${11 - numGuesses}  `;
}

function displayMessage(message){
        toLow.innerHTML = `<span>${message}</span>`
}

function endGame(){
    //Clear user input
    inputData.value = '';
    //Disable user input button
    inputData.setAttribute('disabled', '');
    //Display Start new Game Button
          p.classList.add('button');
          p.innerHTML = `<h5 id="newGame">Start New Game</h5>`
    startOver.appendChild(p);
    playGame = false;
    restart.style.display="none";
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(){
        //Pick a new random number
        randomNumber = parseInt((Math.random()*100)+1);
        previousGuesses = [];
        numGuesses = 1;
        previous.innerHTML = '';
        toLow.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesses}  `;
        inputData.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}

restart.addEventListener('click', function(e){
        randomNumber = parseInt((Math.random()*100)+1);
        previousGuesses = [];
        numGuesses = 1;
        previous.innerHTML = '';
        toLow.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesses}  `;
        inputData.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
        
});
















//  const check =()=>{
//     var dummy =Math.floor(Math.random() *3 ) + 1;
//    var inputData = document.getElementById('inputData').value;
//    let previousGuesses = [];
//     if(inputData!==""){
//         if(dummy == inputData){
//             alert('data matched')
//         }
//         else{
//             alert('data not matched')
//         }
//     }
//     else{
//         alert('Field empty')
//     }
//     document.getElementById('inputData').value="";

//  }

 