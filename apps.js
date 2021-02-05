/*----
let rand = Math.floor(Math.random() * 100) + 1;
let input = Number (prompt("Please type a number"));

if (input < rand) {
    alert("too low");
} else if (input > rand) {
    alert("too high")
} else {
    alert("Congratulation")
}
function guess (){
    for ( let i = 1; i <= 100; i++) {
        
    }
}
-----*/

window.onload = function () {
    console.log("Welcome!");
   
// Declare game variables
let attempts = 0;
let secondes = 0;
let minutes = 0;
let hours = 0;
let randomNumber;

// Select document objects
const input= document.getElementById("guess") 
const feedback = document.getElementById("feedback") 
const attemps = document.getElementById("attemps") 
const clock = document.getElementById("clock") 
const guessBtn = document.getElementById("guessBtn") 
const resetBtn = document.getElementById("resetBtn")

// add event listener
guessBtn.addEventListener("click", startGame);
//resetBtn.addEventListener("click", resetGame);

function startGame () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    playing = true;
    guessBtn.textContent = "Guess";
    input.disabled = false;=]]]]]]]]]]
    

    guessBtn.removeEventListener("click, startGame");
    resetBtn.removeEventListener("click", guess);
}
function guess () {
    if (playing) {
        giveFeedback(parseInt(input.value));
    }   
}
function giveFeedback(guess) {
    if (randomNumber > guess) {
        feedback.textContent = "Too low";
    } else if (random.randomNumber < guess) {
        feedback.textContent = "Too high";
    } else {
        // congrat
        feedback.textContent = "Congrat";
    }
}
}
};
