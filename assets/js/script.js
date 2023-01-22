//$(document).ready(function () {
// $('#myModal').modal('show');
//});


//Starting to write all function of the game for better structure
function userName() {}

function easyModality() {
  console.log('easyMOD')
}

function mediumModality() {
  console.log('medium')
}

function difficultModality() {
  console.log('difficult')
}

function expertModality() {
  console.log('expert')
}

function calcolateFinalScore() {}

//Declare variables for game
const gameAreaElement = document.getElementById('game-area');
let questionContainer = document.getElementById('question');
let answerContainer = document.getElementById('answer-buttons');
let chosenLightSide = document.getElementById('light-side');
let chosenDarkSide = document.getElementById('dark-side');
//let shuffledLightQuestions = lightQuestions.sort[Math.floor(Math.random() * lightQuestions.length)];
let currentQuestionsIndex = 0
let questionNumber = 0;
let score = 0;
let correct = 0;
let incorrect = 0;
let level = document.getElementById("levels");
let scoreContainer = document.getElementById('score');
let buttonAnswerOne = lightQuestions[questionNumber].answerOne;

/**
 * Wait for dom to be loaded
 * getLevel function to see what level is selected
 * When chosen side
 * runLightGame or runDarkGame
 */
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName('button');
  getLevel()
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
 * function getLevel to select from dropdown the modality to play quiz
 */
function getLevel() {

  level.addEventListener('change', function () {
    if (level.value === "easy") {
      console.log('easy')
      easyModality()
    } else if (level.value === "medium") {
      mediumModality()
    } else if (level.value === "difficult") {
      difficultModality()
    } else if (level.value === "expert") {
      expertModality()
    } else {
      alert(`difficult unknown`)
    }
  })
}


/**
 * When chose side in runDarkGame
 * display DarkQuestions, showQuestions and hide chosenLightSide/chosenDarkSide
 */
function runDarkGame() {
  console.log('dark game');
  chosenDarkSide.classList.add('hide')
  chosenLightSide.classList.add('hide')
  level.classList.add('hide')
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
  level.classList.add('hide')
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
  let scoreDiv = document.getElementById('score-container');
  if (clickedAnswer === correctAnswer) {
    console.log('correct');
    this.classList.add('correct-answer')
    
    // add div inside score container and style red
     let scoreBoxes = document.createElement('div')
    scoreDiv.appendChild(scoreBoxes);
    scoreBoxes.classList.add('score-box' , 'green')
  } else {
    incrementNegativeAnswer()
    console.log('incorrect');
    incorrect++;
    this.classList.add('incorrect-answer')
    // add div inside score container and style red
    let scoreBoxes = document.createElement('div')
    scoreDiv.appendChild(scoreBoxes);
    scoreBoxes.classList.add('score-box' , 'red')
  }
  const myTimeout = setTimeout(nextQuestion, 1000);
}
//resultSquare.classList.add('score-box', 'score-box-correct');
/**
 * function to increment correct score
 */


function incrementPositiveAnswer() {}


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
  const answers = document.querySelectorAll('.answer');
  //if (questionContainer.innerHTML === lastQuestions) {
   // stopGame()
 // } else {

    currentQuestionsIndex++;
    questionNumber++;
    showChoices()
    showQuestion()
    console.log(lightQuestions[questionNumber].correctAnswer)
  
  for (const answer of answers) {
    answer.classList.remove('correct-answer',
      'incorrect-answer'
    );
  }
}

/**
 * function to stop game
 */
function stopGame(){
  alert(`stop`)
  if(correct > incorrect){
    alert(`you win`)
  } else {
    alert(`you lost`)
  }
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