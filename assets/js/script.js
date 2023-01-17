//$(document).ready(function () {
// $('#myModal').modal('show');
//});


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

// variables to play light game
let lightQuestions = [{
    question: "What is the capital of United Kingdom?",
    choices: ["Manchester", "Birmingham", "London", "Birmingham"],
    answer: 2
  },

  {
    question: "What is the capital of United States?",
    choices: ["California", "New York", "Miami", "Florida"],
    answer: 1
  }
];
//Declare variables for game
const questionContainerElement = document.getElementById('question-container');
let chosenSide = document.getElementById('light-side');



/**
 * When chosen side
 * runLightGame or runDarkGame
 */
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName('button');

  for (let button of buttons) {
    button.addEventListener('click', function () {
      if (this.getAttribute("data-type") === "light") {
        runLightGame();
      } else if (this.getAttribute("data-type") === "dark") {
        runDarkGame();
      }
    })
  }
});

/**
 * When chose side in runDarkGame or runLightGame
 * displaylightQuestions or displayDarkQuestions
 */
function runDarkGame() {
  console.log('dark game');

}

function runLightGame() {
  console.log('light game')
  chosenSide.classList.add('hide')
  questionContainerElement.classList.remove('hide')

}


//https://stackoverflow.com/questions/9419263/how-to-play-audio
//Play audio and user decide when to play or stop music

function togglePlay() {
  let audioElem = document.getElementById('player');
  if (audioElem.paused) {
    audioElem.className = ("fa-solid fa-volume-high");
    audioElem.play();
  } else {
    audioElem.className = ("fa-solid fa-volume-xmark");
    audioElem.pause();
  }
}


//isPlaying ? audio.pause() : audio.play();
function getLeaderboard() {}