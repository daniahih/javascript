let lettersArr = [];
let missingLetter= document.querySelector(".missing-letter");
let responseText = document.querySelector(".response-text");
let guesses = document.querySelector(".guesses");
let keysGuessed = document.querySelector("h2");

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

let playAgainStr = `<button class="play-again" role="button">Yes</button>`;


function keyReact(e) {
    let letter = e.key.toLowerCase();

    //if key is a letter
    if (letter.length == 1) {
         //winning event
        if (randomLetter == letter) {

            window.removeEventListener('keydown', keyReact, true);
            missingLetter.innerHTML = letter;
            responseText.innerHTML = "Right letter!";
            responseText.classList.add("green");

            guesses.innerHTML = playAgainStr;
            keysGuessed.innerHTML = "Would you like to play again?"
            

            let playAgain = document.querySelector(".play-again");
            playAgain.style.padding = "7px";

            playAgainOption = () => location.reload();

            playAgain.addEventListener('click', playAgainOption);

        }
        //wrong guesses:
        else { 
            //first mistake
            if (lettersArr.length == 0) {
                lettersArr.push(letter);
                guesses.innerHTML = lettersArr;
            }
            //repeated letter
            else if (lettersArr.toString().includes(letter)) {
                responseText.innerHTML = `${letter} has already been guessed!`; 
                responseText.classList.add("red");   
            } 
            //second + letter mistake 
            else {    
                lettersArr.push(" "+letter);
                guesses.innerHTML = lettersArr;
                responseText.innerHTML = `Nope, wrong letter`;
                responseText.classList.add("red");  
            }                   
        }
    }
    //else- key is not a letter
    else {
        responseText.innerHTML = `Please enter a valid letter`;
        responseText.classList.add("red");
    }
}

window.addEventListener('keydown', keyReact, true);