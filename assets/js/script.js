//$(document).ready(function () {
// $('#myModal').modal('show');
//});

//Starting to write all function of the game for better structure
function userName() {}

function easyModality() {}

function mediumModality() {}

function difficultModality() {}

function expertModality() {}

//Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function () {});

/**
 * When chose side in chooseDarkSide or chooseLightSide
 * displaylightQuestions or displayDarkQuestions
 */
function runDarkGame() {
  console.log('dark game');
}

function runLightGame() {
  console.log('Light game');
}

let questions = ['hello'];
/**
 * When user click darkSide 
 * then runGame
 */
function chooseDarkSide() {
  let darkSide = document.getElementsByClassName('dark-side');
  console.log('Dark side');
  console.log(questions[0]);
  runDarkGame()
}

/**
 * When user click lightSide 
 * then runGame
 */
function chooseLightSide() {
  let lightSide = document.getElementsByClassName('light-side');
  console.log('Light side');
  console.log(questions[0]);
  runLightGame()
}

function nextQuestion() {}

function getScore() {}

function incrementPositiveAnswer() {}

function incrementNegativeAnswer() {}

function calcolateFinalScore() {}

function getSound() {}

function getLeaderboard() {}