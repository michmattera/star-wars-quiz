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
// When the user clicks anywhere outside of the modal, close it
/*
window.onclick = function(event) {
  if (event.target == modalInstruction) {
    modalInstruction.classList.add("hide");
    overlay.classList.add("hide");
  }
}
**/
//username modal
const modalUsername = document.querySelector(".modal-username");
const openModalUsernameBtn = document.querySelector(".btn-open-username");
const closeModalUsernameBtn = document.querySelector(".btn-close-username");
const saveButton = document.querySelector(".save");
const openModalUsername = function () {
  modalUsername.classList.remove("hidden");
  overlay.classList.remove("hide");
};
const closeModalUsername = function () {
  modalUsername.classList.add("hidden");
  overlay.classList.add("hide");
};
saveButton.addEventListener("click", closeModalUsername);
openModalUsernameBtn.addEventListener("click", openModalUsername);
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
openModalLeaderboardBtn.addEventListener("click", openModalLeaderboard);
closeModalLeaderboardBtn.addEventListener("click", closeModalLeaderboard);


//https://www.youtube.com/watch?v=DFhmNLKwwGw
const highScoresList = document.getElementById("highScoresList");
const highScoresListTwo = document.getElementById("highScoresListTwo");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const light = JSON.parse(localStorage.getItem("highScores"));
const dark = JSON.parse(localStorage.getItem("highScores"));
var username = document.getElementById("username");
/** 
function displayLightScore(){
  for (let i = 0; i < 5; i++){
    console.log(light.light[i])
    highScoresListTwo.innerHTML = (light.light[i]).map((score) => {
      return `
            <tr>
                <td>${score.name}</td>
                <td>${score.score}</td>
                <td>${score.side}</td>
            </tr>
        `;
    }).join("");
  }
}
*/

/**
 * 

highScoresListTwo.innerHTML = highScores.map((score) => {
  return `
        <tr>
            <td>${score.name}</td>
            <td>${score.score}</td>
            <td>${score.side}</td>
        </tr>
    `;
}).join("");
 */
/**
 * 

highScoresListTwo.innerHTML = light.map((score) => {
  return `
        <tr>
            <td>${score.name}</td>
            <td>${score.score}</td>
            <td>${score.side}</td>
        </tr>
    `;
}).join("");
 */
saveHighScore = (e) => {
  e.preventDefault();
  //Scores getting sorted from highest to lowest
  //highScores.push(userEndResult);
  //highScores.sort((a, b) => b.score - a.score);
  // Show at max 6 high scores
  //highScores.splice(5);
  //localStorage.setItem("highScores", JSON.stringify(highScores));

  function addToHighScore(light, score) {
    let highScores = getHighScore()
    highScores[light].push(score);
    localStorage.setItem('highScores', JSON.stringify(highScores));
  }

  function addToHighScore(dark, score) {
    let highScores = getHighScore()
    highScores[dark].push(score);
    localStorage.setItem('highScores', JSON.stringify(highScores));
  }

  function getHighScore() {
    let highScores = localStorage.getItem('highScores');
    if (highScores) {
      return JSON.parse(highScores);
    } else return {
      "light": [],
      "dark": []
    }

  };

  if (pickedSide.innerText === "light") {
    addToHighScore('light', {
      score: positiveScore,
      name: username.value,
      side: pickedSide.innerText
    })
  } else {
    addToHighScore('dark', {
      score: positiveScore,
      name: username.value,
      side: pickedSide.innerText
    });
  }
}

//var side = document.getElementById("pickedSide").innerHTML;;
/**
 * Show High Score List
 * Return name, score
/** 
  highScoresListTwo.innerHTML = highScores.map((score) => {
    return `
          <tr>
              <td>${score.name}</td>
              <td>${score.score}</td>
              <td>${score.side}</td>
          </tr>
      `;
  }).join("");

    highScoresListTwo.innerHTML = light.map((score) => {
    return `
          <tr>
              <td>${score.name}</td>
              <td>${score.score}</td>
              <td>${score.side}</td>
          </tr>
      `;
  }).join("");
saveHighScore = (e) => {
  e.preventDefault();
  const userEndResult = {
    score: positiveScore,
    name: username.value,
    side: pickedSide.innerText
  };
//trying to create two list with hiscores based on the side chosen
  //Scores getting sorted from highest to lowest
  highScores.push(userEndResult);
  highScores.sort((a, b) => b.score - a.score);
  // Show at max 6 high scores
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));

};
*/
function get() {
  localStorage.getItem("highScores");
  localStorage.getItem('highscores[light]');
  localStorage.getItem('highscores[dark]');
}

function leaderboard() {
  displayDarkScore()
  displayLightScore()
}

let lightBest = [(light.light[0]), (light.light[1]), (light.light[2]), (light.light[3]), (light.light[4])];
let darkBest = [(dark.dark[0]), (dark.dark[1]), (dark.dark[2]), (dark.dark[3]), (dark.dark[4])];


function displayDarkScore() {
  for (j = 0; j < lightBest.length; j++) {
    if (darkBest[j].side === "dark") {
      let bestScore = (darkBest[j].name + "," + darkBest[j].score);
      console.log(bestScore);
      let listTwo = document.createElement('li');
      listTwo.innerText = bestScore;
      document.querySelector('#boardTwo').appendChild(listTwo);
    }
  }
}

function displayLightScore() {
  for (i = 0; i < lightBest.length; i++) {
    if (lightBest[i].side === "light") {
      let bestScore = (lightBest[i].name + "," + lightBest[i].score);
      console.log(bestScore);
      let list = document.createElement('li');
      list.innerText = bestScore;
      document.querySelector('#board').appendChild(list);
    }
  }
}

//Declare variables for game
const gameAreaElement = document.getElementById('game-area');
let questionContainer = document.getElementById('question');
let answerContainer = document.getElementById('answer-buttons');
let chosenLightSide = document.getElementById('light-side');
let chosenDarkSide = document.getElementById('dark-side');
let iconsContainer = document.getElementById('button-container');
//let shuffledLightQuestions = lightQuestions.sort[Math.floor(Math.random() * lightQuestions.length)];
let currentQuestionsIndex = 0
let questionNumber = 0;
let totalQuestions = 14;
let positiveScore = 0;
let negativeScore = 0;
let correctBonus = 1;
let score;
let level = document.getElementById("levels");
let scoreContainer = document.getElementById('score');
let messageContainer = document.getElementById('message');
let winMessage = document.getElementById('won');
let lostContainer = document.getElementById('lost');
let restartBtn = document.getElementById('restart');
let levels = document.getElementById('levels')
const answers = document.querySelectorAll('.answer');

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

//variables to get difficulty level
var storedEasyLevel = localStorage.getItem("storedEasyLevel");
var storedMediumLevel = localStorage.getItem("storedMediumLevel");
var storedDifficultLevel = localStorage.getItem("storedDifficultLevel");
var storedExpertLevel = localStorage.getItem("storedExpertLevel");

/**
 * store easy modality and print it in game level chosen
 */
function easyModality() {
  let chosenLevel = document.getElementById('easy').value;
  localStorage.setItem("storedEasyLevel", chosenLevel);
  document.getElementById("playing-level").innerHTML = "You are playing : " + chosenLevel;
  if (localStorage.getItem('easy') === null) {
    localStorage.setItem('easy', '[]')
  }
  var oldData = JSON.parse(localStorage.getItem('easy'));
  //oldData.push(chosenLevel);
  localStorage.setItem('easy', JSON.stringify(oldData));
}
/**
 * store medium modality and print it in game level chosen
 */
function mediumModality() {
  let chosenMediumLevel = document.getElementById('medium').value;
  localStorage.setItem("storedMediumLevel", chosenMediumLevel);
  document.getElementById("playing-level").innerHTML = "You are playing : " + chosenMediumLevel;
  var oldData = JSON.parse(localStorage.getItem('medium'));
  //oldData.push(chosenLevel);
  localStorage.setItem('medium', JSON.stringify(oldData));
}
/**
 * store difficult modality and print it in game level chosen
 */
function difficultModality() {
  let chosenDifficultLevel = document.getElementById('difficult').value;
  localStorage.setItem("storedDifficultLevel", chosenDifficultLevel);
  document.getElementById("playing-level").innerHTML = "You are playing : " + chosenDifficultLevel;
  var oldData = JSON.parse(localStorage.getItem('difficult'));
  //oldData.push(chosenLevel);
  localStorage.setItem('difficult', JSON.stringify(oldData))
}
/**
 * store difficult modality and print it in game level chosen
 */
function expertModality() {
  let chosenExpertLevel = document.getElementById('expert').value;
  localStorage.setItem("storedExpertLevel", chosenExpertLevel);
  document.getElementById("playing-level").innerHTML = "You are playing" + chosenExpertLevel + "modality";
  var oldData = JSON.parse(localStorage.getItem('expert'));
  //oldData.push(chosenLevel);
  localStorage.setItem('expert', JSON.stringify(oldData))
}
/**
 * When chose side in runDarkGame
 * display DarkQuestions, showQuestions and hide chosenLightSide/chosenDarkSide
 */
function runDarkGame() {
  console.log('dark game');
  openModalInstructionBtn.classList.remove('border-blue');
  openModalInstructionBtn.classList.add('border-red');
  openModalUsernameBtn.classList.remove('border-blue');
  openModalUsernameBtn.classList.add('border-red');
  openModalLeaderboardBtn.classList.remove('border-blue');
  openModalLeaderboardBtn.classList.add('border-red');
  levels.classList.remove('border-blue');
  levels.classList.add('border-red');
  for (const answer of answers) {
    answer.classList.remove('border-green')
    answer.classList.add('border-red')
  }

  chosenDarkSide.classList.add('hide')
  chosenLightSide.classList.add('hide')
  level.classList.add('hide')
  gameAreaElement.classList.remove('hide')
  showDarkQuestion()
  showDarkChoices()

  let dark = document.getElementById('pickedSide');
  dark.innerText = "dark";
  //add event listener for each button clicked and run function checker to see if is correct or not
  const buttonList = document.querySelectorAll(".answer");
  buttonList.forEach(answer => {
    answer.addEventListener('click', checker);
  })
  checker()
}

/**
 * When chose side in runLightGame
 * display LightQuestions, showQuestions and hide chosenLightSide/chosenDarkSide
 */
function runLightGame() {
  console.log('light game')
  openModalInstructionBtn.classList.remove('border-blue');
  openModalInstructionBtn.classList.add('border-green');
  openModalUsernameBtn.classList.remove('border-blue');
  openModalUsernameBtn.classList.add('border-green');
  openModalLeaderboardBtn.classList.remove('border-blue');
  openModalLeaderboardBtn.classList.add('border-green');
  levels.classList.remove('border-blue');
  levels.classList.add('border-green');
  chosenLightSide.classList.add('hide')
  chosenDarkSide.classList.add('hide')
  level.classList.add('hide')
  gameAreaElement.classList.remove('hide')

  let light = document.getElementById('pickedSide');
  light.innerText = "light";
  showQuestion()
  showChoices()
  //add event listener for each button clicked and run function checker to see if is correct or not
  const buttonList = document.querySelectorAll(".answer");
  buttonList.forEach(answer => {
    answer.addEventListener('click', checker);
  })
  checker()
}

//function to change side still not working , bug found
function changeSide() {
  messageContainer.classList.add('hide');
  messageContainer.classList.remove('flex');
  lostMessage.classList.add('hide');
  lostContainer.classList.add('hide');
  winningMessage.classList.add('hide');
  winMessage.classList.add('hide');
  clickedAnswer = 0;
  currentQuestionsIndex = 0;
  questionNumber = 0;
  positiveScore = 0;
  score = 0;

  if (pickedSide.innerText === "light") {
    openModalInstructionBtn.classList.remove('border-blue', 'border-green');
    openModalInstructionBtn.classList.add('border-red');
    openModalUsernameBtn.classList.remove('border-blue', 'border-green');
    openModalUsernameBtn.classList.add('border-red');
    openModalLeaderboardBtn.classList.remove('border-blue', 'border-green');
    openModalLeaderboardBtn.classList.add('border-red');
    levels.classList.remove('border-blue', 'border-green');
    levels.classList.add('border-red');
    for (const answer of answers) {
      answer.classList.remove('border-green')
      answer.classList.add('border-red')
    }
    runDarkGame()
  } else {
    openModalInstructionBtn.classList.remove('border-blue', 'border-red');
    openModalInstructionBtn.classList.add('border-green');
    openModalUsernameBtn.classList.remove('border-blue', 'border-red');
    openModalUsernameBtn.classList.add('border-green');
    openModalLeaderboardBtn.classList.remove('border-blue', 'border-red');
    openModalLeaderboardBtn.classList.add('border-green');
    levels.classList.remove('border-blue', 'border-red');
    levels.classList.add('border-green');
    for (const answer of answers) {
      answer.classList.add('border-green')
      answer.classList.remove('border-red')
    }
    runLightGame()
  }
}

let scoreBox = document.getElementsByClassName('score-box');
let scoreDiv = document.getElementById('score-container');
//function to restart game once is finished
function restartGame() {
  removeChild();
  messageContainer.classList.add('hide');
  messageContainer.classList.remove('flex');
  lostMessage.classList.add('hide');
  lostContainer.classList.add('hide');
  winningMessage.classList.add('hide');
  winMessage.classList.add('hide');
  clickedAnswer = 0;
  currentQuestionsIndex = 0;
  questionNumber = 0;
  positiveScore = 0;
  score = 0;
  if (pickedSide.innerText === "dark") {
    runDarkGame()
  } else {
    runLightGame()
  }
}

/**
 * show the questions in the question container
 */
function showQuestion() {
  questionContainer.innerText = lightQuestions[questionNumber].question;
  console.log(lightQuestions[questionNumber].question);

}

function showDarkQuestion() {
  questionContainer.innerText = darkQuestions[questionNumber].question;
  console.log(darkQuestions[questionNumber].question);
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

function showDarkChoices() {
  document.querySelector("#answer-one").innerHTML = darkQuestions[questionNumber].answerOne;
  document.querySelector("#answer-two").innerHTML = darkQuestions[questionNumber].answerTwo;
  document.querySelector("#answer-three").innerHTML = darkQuestions[questionNumber].answerThree;
  document.querySelector("#answer-four").innerHTML = darkQuestions[questionNumber].answerFour;
}

/**
 * 
 * function to check if answer is correct or not
 * if is correct than incrementPositiveAnswer
 * run nextQuestion function with timeout
 * add style to button clicked 
 * remove as well score div
 */

//let scoreDiv = document.getElementById('score-container');
function checker(event) {
  let clickedAnswer = event.target.innerHTML;
  let correctAnswer = lightQuestions[questionNumber].correctAnswer;
  let correctDarkAnswer = darkQuestions[questionNumber].correctAnswer;
  //if clicked answer is the same of correctanswer
  if ((clickedAnswer === correctAnswer) || (clickedAnswer === correctDarkAnswer)) {
    console.log('correct');
    this.classList.remove('button:hover')
    this.classList.add('correct-answer')

    // add div inside score container and style red
    let scoreBoxes = document.createElement('div')
    scoreDiv.appendChild(scoreBoxes);
    scoreBoxes.classList.add('score-box', 'green');
    incrementPositiveAnswer(correctBonus);

    //if clicked answer is not the same of correct answer
  } else {
    console.log('incorrect');
    this.classList.remove('button:hover')
    this.classList.add('incorrect-answer')
    // add div inside score container and style red
    let scoreBoxes = document.createElement('div')
    scoreDiv.appendChild(scoreBoxes);
    scoreBoxes.classList.add('score-box', 'red');

  }
  //set timeout for nextQuestion( to display once clicked an answer)
  const myTimeout = setTimeout(nextQuestion, 1000);
}

function removeChild() {
  if (document.querySelector('#levels').value === "easy") {
    if (currentQuestionsIndex == 6) {
      while (scoreDiv.firstChild) {
        scoreDiv.removeChild(scoreDiv.firstChild);
      }
    }
  };

  if (document.querySelector('#levels').value === "medium") {
    if (currentQuestionsIndex == 10) {
      while (scoreDiv.firstChild) {
        scoreDiv.removeChild(scoreDiv.firstChild);
      }
    }
  };

  if (document.querySelector('#levels').value === "difficult") {
    if (currentQuestionsIndex == 14) {
      while (scoreDiv.firstChild) {
        scoreDiv.removeChild(scoreDiv.firstChild);
      }
    }
  };
}

/**
 * function to increment correct score
 */
//https://www.youtube.com/watch?v=BOQLbu_Crc0
incrementPositiveAnswer = num => {
  positiveScore += num;
  console.log(positiveScore)
}

/**
 * increase question number and currentQuestionIndex, show again new question and answers
 * trying to set for different modalities different number of questions
 * if last question and depending on the score winGame() or loseGame()
 */
function nextQuestion() {
  const answers = document.querySelectorAll('.answer');
  //function to check if the value selected from the getLevel was easy and if so when finish the game
  if (document.querySelector('#levels').value === "easy") {
    if (currentQuestionsIndex == 6) {
      if (positiveScore > 3) {
        winGame()
      } else {
        loseGame()
      }
    } else {
      currentQuestionsIndex++;
      questionNumber++;
      if (pickedSide.innerText === "light") {
        showChoices()
        showQuestion()
      } else {
        showDarkChoices()
        showDarkQuestion()
      }
    }
  }

  //function to check if the value selected from the getLevel was medium and if so when finish the game
  if (document.querySelector('#levels').value === "medium") {
    console.log('test');
    if (currentQuestionsIndex == 10) {
      if (positiveScore > 5) {
        winGame()
      } else {
        loseGame()
      }
    } else {
      currentQuestionsIndex++;
      questionNumber++;
      if (pickedSide.innerText === "light") {
        showChoices()
        showQuestion()
      } else {
        showDarkChoices()
        showDarkQuestion()
      }
    }
  }
  //function to check if the value selected from the getLevel was difficult and if so when finish the game
  if (document.querySelector('#levels').value === "difficult") {
    console.log('test');
    if (currentQuestionsIndex == 14) {
      if (positiveScore > 7) {
        winGame()

      } else {
        loseGame()
      }
    } else {
      currentQuestionsIndex++;
      questionNumber++;
      if (pickedSide.innerText === "light") {
        showChoices()
        showQuestion()
      } else {
        showDarkChoices()
        showDarkQuestion()
      }
    }
  }
  for (const answer of answers) {
    answer.classList.remove('correct-answer',
      'incorrect-answer'
    );
  }
}

/**
 * function to win game and bring the player to win page
 */
function winGame() {
  messageContainer.classList.remove('hide');
  messageContainer.classList.add('flex');
  winMessage.classList.remove('hide');
  gameAreaElement.classList.add('hide');
  winningMessage.innerText = `Congratulation you won the battle master ${username.value}!
   You got ${positiveScore} points`;
  winningMessage.classList.remove('hide');
}

let lostMessage = document.getElementById('lost-message');
let winningMessage = document.getElementById('winning-message');

function loseGame() {
  messageContainer.classList.remove('hide');
  messageContainer.classList.add('flex');
  lostContainer.classList.remove('hide');
  lostMessage.classList.remove('hide');
  gameAreaElement.classList.add('hide');
  lostMessage.innerText = `Oh no! You lost the battle master ${username.value}
   You got ${positiveScore} points`;
}

//home button
document.querySelector('.home-btn').addEventListener('click', function () {
  window.location.reload()
});
//home button two - issue if using the same name did not work - fix it using two different classes
document.querySelector('.home-btn-two').addEventListener('click', function () {
  window.location.reload()
});

/*Audio Player 
Created using information from Stackflow
https://stackoverflow.com/questions/27368778/how-to-toggle-audio-play-pause-with-one-button-or-link*/
const audioPlayer = document.getElementById("player");
const myAudio = document.getElementById("audio");
const audioOffIcon = document.getElementById("sound-off");
const audioOnIcon = document.getElementById("sound-on");

function togglePlay() {
  if (myAudio.paused) {
    myAudio.play();
    audioOffIcon.classList.remove("hide");
    audioOnIcon.classList.add("hide");
  } else {
    myAudio.pause();
    audioOffIcon.classList.add("hide");
    audioOnIcon.classList.remove("hide");
  }
}