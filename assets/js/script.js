//$(document).ready(function () {
// $('#myModal').modal('show');
//});


//Starting to write all function of the game for better structure
function userName() {}

function easyModality() {}

function mediumModality() {}

function difficultModality() {}

function expertModality() {}

function incrementPositiveAnswer() {}

function incrementNegativeAnswer() {}

function calcolateFinalScore() {}

// variables to play light game
let lightQuestions = [{
    question: "Which Star wars faction fights against the Empire?",
    correctAnswer: "REBEL ALLIANCE",
    answerOne: "REBEL LEAGUE",
    answerTwo: "REBEL CONFEDERATION",
    answerThree: "REBEL ALLIANCE",
    answerFour: "REBEL COALITION",
  },
  {
    question: "What is the name of the mystical power used by Jedi Knights in Star Wars?",
    correctAnswer: "THE FORCE",
    answerOne: "THE FORCE",
    answerTwo: "THE POWER",
    answerThree: "THE EFFORT",
    answerFour: "THE ENERGY",
  },
];


//Declare variables for game
const gameAreaElement = document.getElementById('game-area');
let questionContainer = document.getElementById('question');
let answerContainer = document.getElementById('answer-buttons');
let chosenLightSide = document.getElementById('light-side');
let chosenDarkSide = document.getElementById('dark-side');
let shuffledLightQuestions = lightQuestions.sort[Math.floor(Math.random() * lightQuestions.length)];
let currentQuestionsIndex = 0
let questionNumber = 0;
let score = 0;
let correct = lightQuestions[questionNumber].correctAnswer;
let scoreContainer = document.getElementById('score');
let currentQuestion = lightQuestions[questionNumber];


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
 * display DarkQuestions, showQuestions and hide chosenLightSide/chosenDarkSide
 */
function runDarkGame() {
  console.log('dark game');
  chosenDarkSide.classList.add('hide')
  chosenLightSide.classList.add('hide')
  gameAreaElement.classList.remove('hide')
  showQuestion()
  showChoices()

}

/**
 * When chose side in runLightGame
 * display LightQuestions, showQuestions and hide chosenLightSide/chosenDarkSide
 */
function runLightGame() {
  console.log('light game')
  chosenLightSide.classList.add('hide')
  chosenDarkSide.classList.add('hide')
  gameAreaElement.classList.remove('hide')
  showQuestion()
  showChoices()
  getAnswer()
}

/**
 * show the questions in the question container
 */
function showQuestion() {
  questionContainer.innerText = lightQuestions[questionNumber].question;
  console.log(lightQuestions[questionNumber].question);

}
/**
 * show all answer for specific question
 */
function showChoices() {
  document.querySelector("#answer-one").innerHTML = currentQuestion.answerOne;
  document.querySelector("#answer-two").innerHTML = currentQuestion.answerTwo;
  document.querySelector("#answer-three").innerHTML = currentQuestion.answerThree;
  document.querySelector("#answer-four").innerHTML = currentQuestion.answerFour;

}

console.log(lightQuestions[questionNumber].answerOne);

/**
 * adding function to check if the button click by the user is correct
 * if they have same value of correct answer then is correct otherwise incorrect
 */
function getAnswer() {
  //https://www.3schools.in/2022/03/how-to-get-value-of-clicked-button-%20in.html
  let buttonList = document.querySelectorAll("button");
  buttonList.forEach(function (i) {
    i.addEventListener("click", function (e) {
      if ((e.target.innerHTML) === (correct)) {
        console.log('correct')
        nextQuestion()
      } else {
        console.log('incorrect');
        nextQuestion()
      }
    })
  })

}

function nextQuestion() {
  currentQuestionsIndex++;
  questionNumber++;
  showQuestion()
  showChoices()
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