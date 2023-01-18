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
let lightQuestions = [
{
    question: "Which Star wars faction fights against the Empire?",
    correctAnswer: "answerThree",
    answerOne: "REBEL LEAGUE",
    answerTwo: "REBEL CONFEDERATION",
    answerThree: "REBEL ALLIANCE",
    answerFour: "REBEL COALITION",
},
{
    question: "What is the name of the mystical power used by Jedi Knights in Star Wars?",
    correctAnswer: "answerOne",
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
  showQuestion()
  showChoices()

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
  showChoices()

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
/**
 * show all answer for specific question
 */
function showChoices(){
  const currentQuestion = lightQuestions[questionNumber];
  document.querySelector("#answer-one").innerHTML = currentQuestion.answerOne;
  document.querySelector("#answer-two").innerHTML = currentQuestion.answerTwo;
  document.querySelector("#answer-three").innerHTML = currentQuestion.answerThree;
  document.querySelector("#answer-four").innerHTML = currentQuestion.answerFour;
  
}

/**
 * adding function to check if the answer is correct or not
 */
function checkAnswer(){
  let score = 0;
  let scoreContainer = document.getElementById('score');
  for (let button of answerContainer) {
    button.addEventListener('click', function () {
      if(correctAnswer){
        console.log('correct')
      } else {
        console,log('wrong')
      }
    })
}}

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
