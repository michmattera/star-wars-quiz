//$(document).ready(function () {
// $('#myModal').modal('show');
//});
console.log('hello');
//Starting to write all function of the game for better structure
function userName() {}

function easyModality() {}

function mediumModality() {}

function difficultModality() {}

function expertModality() {}

function runGame() {
  console.log('Running');
}

let darkSide = document.getElementsByClassName('dark-side');
/**
 * When user click darkSide 
 * then runGame of DarkSide questions
 */
function chooseDarkSide() {
  darkSide.addEventListener('click', function () {
    if (('data-type') === "dark") {
      console.log('yess');
    }
  })
}

/**
 * When user click lightSide 
 * then runGame of LightSide questions
 */
function chooseLightSide() {
  let lightSide = document.getElementsByClassName('light-side');
}

function nextQuestion() {}

function getScore() {}

function incrementPositiveAnswer() {}

function incrementNegativeAnswer() {}

function calcolateFinalScore() {}

function getSound() {}

function getLeaderboard() {}