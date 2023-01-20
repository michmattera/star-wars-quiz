//$(document).ready(function () {
// $('#myModal').modal('show');
//});


//Starting to write all function of the game for better structure
function userName() {}

function easyModality() {}

function mediumModality() {}

function difficultModality() {}

function expertModality() {}

function calcolateFinalScore() {}


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

let scoreContainer = document.getElementById('score');


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
  checker()
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
  document.querySelector("#answer-one").innerHTML = lightQuestions[questionNumber].answerOne;
  document.querySelector("#answer-two").innerHTML = lightQuestions[questionNumber].answerTwo;
  document.querySelector("#answer-three").innerHTML = lightQuestions[questionNumber].answerThree;
  document.querySelector("#answer-four").innerHTML = lightQuestions[questionNumber].answerFour;

}

/**
 * 
 * function to check if answer is correct or not
 * if is correct than incrementPositiveAnswer if not incrementNegativeAnswer
 * run nextQuestion function
 */
function checker(event) {
  let clickedAnswer = event.target.innerHTML;
  let correctAnswer = lightQuestions[questionNumber].correctAnswer;
  if (clickedAnswer === correctAnswer) {
    console.log('correct');
    this.classList.add('correct-answer')
  } else {
    incrementNegativeAnswer()
    console.log('incorrect');
    this.classList.add('incorrect-answer')
  }
  const myTimeout = setTimeout(nextQuestion, 1000);
  this.classList.remove('incorrect-answer', 'correct-answer')
}

/**
 * function to increment correct score
 */


function incrementPositiveAnswer() {
}


/**
 * function to increment incorrect score
 */
function incrementNegativeAnswer() {}


//add event listener for each button clicked and run function checker to see if is correct or not
const buttonList = document.querySelectorAll("button");
buttonList.forEach(button => {
  button.addEventListener('click', checker);
})



/**
 * increase question number and currentQuestionIndex, show again new question and answers
 */
function nextQuestion() {
  currentQuestionsIndex++;
  questionNumber++;
  showChoices()
  showQuestion()
  console.log(lightQuestions[questionNumber].correctAnswer)
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