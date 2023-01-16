//$(document).ready(function () {
// $('#myModal').modal('show');
//});



let darkQuestions = [questionOnee, questionTwoo, questionThreee];

//test question for running light game
let lightQuestions = [questionOne, questionTwo, questionThree];


//Starting to write all function of the game for better structure
function userName() {}

function easyModality() {}

function mediumModality() {}

function difficultModality() {}

function expertModality() {}

function nextQuestion() {}

function getScore() {}

function incrementPositiveAnswer() {}

function incrementNegativeAnswer() {}

function calcolateFinalScore() {}

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

/**
 * When user click darkSide 
 * then runGame
 */
function chooseDarkSide() {
  let darkSide = document.getElementsByClassName('dark-side');
  console.log('Dark side');
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

//https://stackoverflow.com/questions/9419263/how-to-play-audio
//Play audio and user decide when to play or stop music


  function togglePlay() {
    let audioElem = document.getElementById('player');
    if (audioElem.paused) {
       audioElem.className =("fa-solid fa-volume-high");
       audioElem.play();
    } else {
       audioElem.className =("fa-solid fa-volume-xmark");
       audioElem.pause();
    }
 }


//isPlaying ? audio.pause() : audio.play();
function getLeaderboard() {}