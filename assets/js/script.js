//constant variables for different modals
// Instruction modal
const modalInstruction = document.querySelector(".modal-instruction");
const overlay = document.querySelector(".overlay");
const openModalInstructionBtn = document.querySelector(".btn-open-instruction");
const closeModalInstructionBtn = document.querySelector(".btn-close-instruction");
const openModalInstruction = function () {
  modalInstruction.classList.remove("hide");
  overlay.classList.remove("hide");
};
const closeModalInstruction = function () {
  modalInstruction.classList.add("hide");
  overlay.classList.add("hide");
};
openModalInstructionBtn.addEventListener("click", openModalInstruction);
closeModalInstructionBtn.addEventListener("click", closeModalInstruction);

//username modal
const modalUsername = document.querySelector(".modal-username");
const openModalUsernameBtn = document.querySelector(".btn-open-username");
const closeModalUsernameBtn = document.querySelector(".btn-close-username");
const openModalUsername = function () {
  modalUsername.classList.remove("hidden");
  overlay.classList.remove("hide");
};
const closeModalUsername = function () {
  modalUsername.classList.add("hidden");
  overlay.classList.add("hide");
};
openModalUsernameBtn.addEventListener("click",  openModalUsername);
closeModalUsernameBtn.addEventListener("click", closeModalUsername);

//leaderboard modal
const modalLeaderboard = document.querySelector(".modal-leaderboard");
const openModalLeaderboardBtn = document.querySelector(".btn-open-leaderboard");
const closeModalLeaderboardBtn = document.querySelector(".btn-close-leaderboard");
const openModalLeaderboard = function () {
  modalLeaderboard.classList.remove("hide");
  overlay.classList.remove("hide");
};
const closeModalLeaderboard = function () {
  modalLeaderboard.classList.add("hide");
  overlay.classList.add("hide");
};
openModalLeaderboardBtn.addEventListener("click",  openModalLeaderboard);
closeModalLeaderboardBtn.addEventListener("click", closeModalLeaderboard);

// youtube video on how to store item with local storage
//https://www.youtube.com/watch?v=6R9SaZdyaVU
var storedUsername = localStorage.getItem("storedUsername");

function saveName(){
  var newUsername = document.getElementById("username").value;
  localStorage.setItem("storedUsername", newUsername);
  document.getElementById("savedText").innerHTML = newUsername + "Hello";

  if(localStorage.getItem('username') === null){
    localStorage.setItem('username', '[]')
  }

  var oldData = JSON.parse(localStorage.getItem('username'));
  oldData.push(newUsername);

  localStorage.setItem('username', JSON.stringify(oldData))

}

function leaderboard (){
  if(localStorage.getItem('username') != null){
    document.getElementById('board').innerHTML = JSON.parse(localStorage.getItem('username'));
  }
}

function get(){
  localStorage.getItem("storedUsername");
  document.getElementById("openedText").innerHTML = storedUsername + "stored";
}
//Starting to write all function of the game for better structure

//function easyModality() {
 // console.log('easyMOD')
//}

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
let totalQuestions = 14;
let positiveScore = 0;
let negativeScore = 0;
let correctBonus = 1;
let correct = 0;
let incorrect = 0;
let score;
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
  get()
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

//variables to get difficulty level
var storedEasyLevel = localStorage.getItem("storedEasyLevel");
var storedMediumLevel = localStorage.getItem("storedMediumLevel");
var storedDifficultLevel = localStorage.getItem("storedDifficultLevel");
var storedExpertLevel = localStorage.getItem("storedExpertLevel");

/**
 * store easy modality and print it in game level chosen
 */
function easyModality(){
  let chosenLevel = document.getElementById('easy').value;
  localStorage.setItem("storedEasyLevel", chosenLevel);
  document.getElementById("playing-level").innerHTML = "You are playing" + "" + chosenLevel + "" + "modality";
  if(localStorage.getItem('easy') === null){
    localStorage.setItem('easy', '[]')
  }
  var oldData = JSON.parse(localStorage.getItem('easy'));
  oldData.push(chosenLevel);
  localStorage.setItem('easy', JSON.stringify(oldData))
}
/**
 * store medium modality and print it in game level chosen
 */
function mediumModality(){
  let chosenMediumLevel = document.getElementById('medium').value;
  localStorage.setItem("storedMediumLevel", chosenMediumLevel);
  document.getElementById("playing-level").innerHTML = "You are playing" + "" + chosenMediumLevel + "" + "modality";
  var oldData = JSON.parse(localStorage.getItem('medium'));
  oldData.push(chosenLevel);
  localStorage.setItem('medium', JSON.stringify(oldData))
}
/**
 * store difficult modality and print it in game level chosen
 */
function difficultModality(){
  let chosenDifficultLevel = document.getElementById('difficult').value;
  localStorage.setItem("storedDifficultLevel", chosenDifficultLevel);
  document.getElementById("playing-level").innerHTML = "You are playing" + "" + chosenDifficultLevel + "" + "modality";
  var oldData = JSON.parse(localStorage.getItem('difficult'));
  oldData.push(chosenLevel);
  localStorage.setItem('difficult', JSON.stringify(oldData))
}
/**
 * store difficult modality and print it in game level chosen
 */
function expertModality(){
  let chosenExpertLevel = document.getElementById('expert').value;
  localStorage.setItem("storedExpertLevel", chosenExpertLevel);
  document.getElementById("playing-level").innerHTML = "You are playing" + "" + chosenExpertLevel + "" + "modality";
  var oldData = JSON.parse(localStorage.getItem('expert'));
  oldData.push(chosenLevel);
  localStorage.setItem('expert', JSON.stringify(oldData))
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
  //add event listener for each button clicked and run function checker to see if is correct or not
  const buttonList = document.querySelectorAll("button");
  buttonList.forEach(button => {
    button.addEventListener('click', checker);
  })
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
 * run nextQuestion function with timeout
 * add style to button clicked 
 */
function checker(event) {
  let clickedAnswer = event.target.innerHTML;
  let correctAnswer = lightQuestions[questionNumber].correctAnswer;
  let scoreDiv = document.getElementById('score-container');
  //if clicked answer is the same of correctanswer
  if (clickedAnswer === correctAnswer) {
    console.log('correct');
    this.classList.add('correct-answer')

    // add div inside score container and style red
    let scoreBoxes = document.createElement('div')
    scoreDiv.appendChild(scoreBoxes);
    scoreBoxes.classList.add('score-box', 'green');
    incrementPositiveAnswer(correctBonus);

    //if clicked answer is not the same of correct answer
  } else {
    console.log('incorrect');
    incorrect++;
    this.classList.add('incorrect-answer')
    // add div inside score container and style red
    let scoreBoxes = document.createElement('div')
    scoreDiv.appendChild(scoreBoxes);
    scoreBoxes.classList.add('score-box', 'red')

  }
  const myTimeout = setTimeout(nextQuestion, 1000);
}

/**
 * function to increment correct score
 */
//https://www.youtube.com/watch?v=BOQLbu_Crc0
incrementPositiveAnswer = num => {
 positiveScore+= num;
 console.log(positiveScore)
}

//var storedScore = localStorage.getItem("storedScore");
/** 
function saveScore(){
  var newScore = document.getElementById("username").value;
  localStorage.setItem("storedScore", newScore);
  document.getElementById("savedTextScore").innerHTML = newScore + "Hello";

  if(localStorage.getItem('score') === null){
    localStorage.setItem('score', '[]')
  }

  var oldScore = JSON.parse(localStorage.getItem('score'));
  oldScore.push(newScore);

  localStorage.setItem('score', JSON.stringify(oldScore))

}

function finalScore (){
  
}

/**
 * increase question number and currentQuestionIndex, show again new question and answers
 */

function nextQuestion() {
  const answers = document.querySelectorAll('.answer');
  if (lightQuestions[questionNumber] == totalQuestions) {
    finalScore()
   stopGame()
   } else {

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
}

/**
 * function to stop game
 */
function stopGame() {
  alert(`stop`)
  if (correct > incorrect) {
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