'use strict';

const generateNumber = function () {
  let secretNumber = Math.round(Math.random() * 100);
  console.log(secretNumber);
  return secretNumber;
}
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}
const changeBackground = function (color) {
  document.querySelector('body').style.backgroundColor = color;
}
const revealNumber = function (number) {
  document.querySelector('.number').textContent = number;
}
const updateScore = function (score) {
  document.querySelector('.score').textContent = score;
}
let secretNumber = generateNumber();
let score = 20;
let highScore = 0;  

// Event Listener for Game
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // For empty guess box
  if (!guess) {
    displayMessage("<- Input a Number!");
  }
    
  // For winning guess
  else if (guess === secretNumber) {
    displayMessage("Correct!");
    changeBackground("#104911");
    revealNumber(secretNumber);
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
    
  // For non-winning guess
  else if (guess !== secretNumber && score >= 1) {
    displayMessage(guess > secretNumber ? "Too High!" : "Too Low!")
    score--;
    updateScore(score);
    }

  // for Game Over
  else if (score < 1) {
    displayMessage("Game Over!");
    changeBackground("#BD4C52");
  }
})

// Reset Button
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = generateNumber();
  score = 20;
  updateScore(score);
  displayMessage("Start Guessing...");
  changeBackground("#222");
  revealNumber("?");
  document.querySelector('.guess').value = " ";
  })
