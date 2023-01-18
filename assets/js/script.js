//$(document).ready(function () {
// $('#myModal').modal('show');
//});


//Starting to write all function of the game for better structure
function userName() {}

function easyModality() {}

function mediumModality() {}

function difficultModality() {}

function expertModality() {}

function getScore() {}

function incrementPositiveAnswer() {}

function incrementNegativeAnswer() {}

function calcolateFinalScore() {}

// variables to play light game
let lightQuestions = [{
  question: "What is the capital of United Kingdom?",
  choices: [{
      text: 'Manchester',
      correct: false
    },
    {
      text: 'London',
      correct: true
    },
    {
      text: 'Manchester',
      correct: false
    },
    {
      text: 'Manchester',
      correct: false
    },
  ]
}, {
  question: "What is the capital of Italy?",
  choices: [{
      text: 'Manchester',
      correct: false
    },
    {
      text: 'Roma',
      correct: true
    },
    {
      text: 'Manchester',
      correct: false
    },
    {
      text: 'Manchester',
      correct: false
    },
  ]

}]


//Declare variables for game
const gameAreaElement = document.getElementById('game-area');
let questionContainer = document.getElementById('question');
let chosenLightSide = document.getElementById('light-side');
let chosenDarkSide = document.getElementById('dark-side');
let shuffledLightQuestions = lightQuestions.sort[Math.floor(Math.random() * lightQuestions.length)];
let currentQuestionsIndex = 0
//try to write i, as well inside not working, as well if i just add lenght of lightquestions question
let questionNumber = 0;

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
 * When chose side in runDarkGame
 * display DarkQuestions, nextQuestions and hide chosenLightSide/chosenDarkSide
 */
function runDarkGame() {
  console.log('dark game');
  chosenDarkSide.classList.add('hide')
  chosenLightSide.classList.add('hide')
  gameAreaElement.classList.remove('hide')

  nextQuestion()
}

/**
 * When chose side in runLightGame
 * display LightQuestions, nextQuestions and hide chosenLightSide/chosenDarkSide
 */
function runLightGame() {
  console.log('light game')
  chosenLightSide.classList.add('hide')
  chosenDarkSide.classList.add('hide')
  gameAreaElement.classList.remove('hide')
  showQuestion()

}
/**
 * get nextQuestion from the current question and use shuffledLightQuestions to do it randomly
 */
function nextQuestion() {
  showQuestion(shuffledLightQuestions[currentQuestionsIndex])
}


/**
 * show the questions in the question container
 */
function showQuestion() {
  questionContainer.innerText = lightQuestions[questionNumber].question;
  console.log(lightQuestions[questionNumber].question);

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