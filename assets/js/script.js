//Declare variables for game
const gameAreaElement = document.getElementById("game-area");
let questionContainer = document.getElementById("question");
let chosenLightSide = document.getElementById("light-side");
let chosenDarkSide = document.getElementById("dark-side");
let currentQuestionsIndex = 0;
let questionNumber = 0;
let positiveScore = 0;
let correctBonus = 1;
let score;
let scoreContainer = document.getElementById("score");
let messageContainer = document.getElementById("message");
let winMessage = document.getElementById("won");
let lostContainer = document.getElementById("lost");
let levels = document.getElementById("levels");
const answers = document.querySelectorAll(".answer");
let changeButtons = document.querySelectorAll(".change-color");
let scoreDiv = document.getElementById("score-container");
let lostMessage = document.getElementById("lost-message");
let winningMessage = document.getElementById("winning-message");

/**
 * Wait for dom to be loaded
 * getLevel function to see what level is selected
 * When chosen side
 * runLightGame or runDarkGame
 */
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");
  getLevel();
  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("data-type") === "light") {
        runLightGame();
      } else if (this.getAttribute("data-type") === "dark") {
        runDarkGame();
      }
    });
  }

});

/**
 * function getLevel to select from dropdown the modality to play quiz
 */
function getLevel() {
  level.addEventListener("change", function () {
    if (level.value === "easy") {
      console.log("easy");
      easyModality();
    } else if (level.value === "medium") {
      mediumModality();
    } else if (level.value === "difficult") {
      difficultModality();
    } else if (level.value === "expert") {
      expertModality();
    } else {
      alert(`difficult unknown`);
    }
  });
}

/**
 * When chose side in runDarkGame
 * display DarkQuestions, showQuestions and hide chosenLightSide/chosenDarkSide
 */
function runDarkGame() {
  Array.from(document.querySelectorAll(".change-color"))
    .forEach(function (changeButtons) {
      changeButtons.classList.remove("border-blue");
      changeButtons.classList.add("border-red");
      level.classList.add("disabled");
    });

  for (const answer of answers) {
    answer.classList.remove("border-green");
    answer.classList.add("border-red");
  }
  chosenDarkSide.classList.add("hide");
  chosenLightSide.classList.add("hide");
  level.classList.add("hide");
  gameAreaElement.classList.remove("hide");
  lostMessage.classList.add("red-text");
  winningMessage.classList.add("red-text");
  showDarkQuestion();
  showDarkChoices();
  let dark = document.getElementById("pickedSide");
  dark.innerText = "dark";
  //add event listener for each button clicked
  //run function checker to see if is correct or not
  const buttonList = document.querySelectorAll(".answer");
  buttonList.forEach((answer) => {
    answer.addEventListener("click", checker);
  });
}
/**
 * When chose side in runLightGame
 * display LightQuestions, showQuestions and hide chosenLightSide/chosenDarkSide
 */
function runLightGame() {
  Array.from(document.querySelectorAll(".change-color"))
    .forEach(function (changeButtons) {
      changeButtons.classList.remove("border-blue");
      changeButtons.classList.add("border-green");
      level.classList.add("disabled");
    });
  chosenLightSide.classList.add("hide");
  chosenDarkSide.classList.add("hide");
  level.classList.add("hide");
  gameAreaElement.classList.remove("hide");
  let light = document.getElementById("pickedSide");
  light.innerText = "light";
  showQuestion();
  showChoices();
  //add event listener for each button clicked
  //run function checker to see if is correct or not
  const buttonList = document.querySelectorAll(".answer");
  buttonList.forEach((answer) => {
    answer.addEventListener("click", checker);
  });
}

/**
 * function to change side when finished quiz
 * removeChild() used for removing score from game finished
 * if was runLightGame() then runDarkGame and viceversa
 * for side selected resetting all buttons and change again style
 */
function changeSide() {
  removeChild();
  messageContainer.classList.add("hide");
  messageContainer.classList.remove("flex");
  lostMessage.classList.add("hide");
  lostContainer.classList.add("hide");
  winningMessage.classList.add("hide");
  winMessage.classList.add("hide");
  lostMessage.classList.remove("red-text");
  winningMessage.classList.remove("red-text");
  clickedAnswer = 0;
  currentQuestionsIndex = 0;
  questionNumber = 0;
  positiveScore = 0;
  score = 0;

  if (pickedSide.innerText === "light") {
    Array.from(document.querySelectorAll(".change-color"))
      .forEach(function (changeButtons) {
        changeButtons.classList.remove("border-blue", "border-green");
        changeButtons.classList.add("border-red");
      });
    for (const answer of answers) {
      answer.classList.remove("border-green");
      answer.classList.add("border-red");
    }
    runDarkGame();
  } else {
    Array.from(document.querySelectorAll(".change-color"))
      .forEach(function (changeButtons) {
        changeButtons.classList.remove("border-blue", "border-red");
        changeButtons.classList.add("border-green");
      });
    for (const answer of answers) {
      answer.classList.add("border-green");
      answer.classList.remove("border-red");
    }
    runLightGame();
  }
}

/**
 * function to restart quiz when finished quiz
 * removeChild() used for removing score from game finished
 * if was light then run light if dark than run dark
 */
function restartGame() {
  removeChild();
  messageContainer.classList.add("hide");
  messageContainer.classList.remove("flex");
  lostMessage.classList.add("hide");
  lostContainer.classList.add("hide");
  winningMessage.classList.add("hide");
  winMessage.classList.add("hide");
  clickedAnswer = 0;
  currentQuestionsIndex = 0;
  questionNumber = 0;
  positiveScore = 0;
  score = 0;
  if (pickedSide.innerText === "dark") {
    runDarkGame();
  } else {
    runLightGame();
  }
}

/**
 * show the questions in the question container when runLightGame is selected
 */
function showQuestion() {
  questionContainer.innerText = lightQuestions[questionNumber].question;
  console.log(lightQuestions[questionNumber].question);
}

/**
 * show the questions in the question container when runDarkGame() is selected
 */
function showDarkQuestion() {
  questionContainer.innerText = darkQuestions[questionNumber].question;
  console.log(darkQuestions[questionNumber].question);
}
/**
 * show all answer for specific question in light game
 */
function showChoices() {
  document.querySelector("#answer-one").innerHTML =
    lightQuestions[questionNumber].answerOne;
  document.querySelector("#answer-two").innerHTML =
    lightQuestions[questionNumber].answerTwo;
  document.querySelector("#answer-three").innerHTML =
    lightQuestions[questionNumber].answerThree;
  document.querySelector("#answer-four").innerHTML =
    lightQuestions[questionNumber].answerFour;
}

/**
 * show all answer for specific question in dark game
 */
function showDarkChoices() {
  document.querySelector("#answer-one").innerHTML =
    darkQuestions[questionNumber].answerOne;
  document.querySelector("#answer-two").innerHTML =
    darkQuestions[questionNumber].answerTwo;
  document.querySelector("#answer-three").innerHTML =
    darkQuestions[questionNumber].answerThree;
  document.querySelector("#answer-four").innerHTML =
    darkQuestions[questionNumber].answerFour;
}

/**
 * function to check if answer is correct or not
 * if is correct than incrementPositiveAnswer
 * run nextQuestion function with timeout
 * add style to button clicked
 */

//let scoreDiv = document.getElementById('score-container');
function checker(event) {
  let clickedAnswer = event.target.innerHTML;
  let correctAnswer = lightQuestions[questionNumber].correctAnswer;
  let correctDarkAnswer = darkQuestions[questionNumber].correctAnswer;
  //if clicked answer is the same of correctanswer
  if ((clickedAnswer === correctAnswer) ||
    (clickedAnswer === correctDarkAnswer)) {
    console.log("correct");
    this.classList.remove("button:hover");
    this.classList.add("correct-answer");

    // add div inside score container and style red
    let scoreBoxes = document.createElement("div");
    scoreDiv.appendChild(scoreBoxes);
    scoreBoxes.classList.add("score-box", "green");
    incrementPositiveAnswer(correctBonus);

    //if clicked answer is not the same of correct answer
  } else {
    console.log("incorrect");
    this.classList.remove("button:hover");
    this.classList.add("incorrect-answer");
    // add div inside score container and style red
    let scoreBoxes = document.createElement("div");
    scoreDiv.appendChild(scoreBoxes);
    scoreBoxes.classList.add("score-box", "red");
  }
  //set timeout for nextQuestion( to display once clicked an answer)
  const myTimeout = setTimeout(nextQuestion, 600);
}

/**
 * function to remove score div childs when game is finished
 */
function removeChild() {
  while (scoreDiv.firstChild) {
    scoreDiv.removeChild(scoreDiv.firstChild);
  }
}
/**
 * function to increment correct score
 */
//https://www.youtube.com/watch?v=BOQLbu_Crc0
incrementPositiveAnswer = num => {
  positiveScore += num;
  console.log(positiveScore);
};

/**
 * increase question number and currentQuestionIndex
 * remove style from answer clicked
 * show again new question and answers
 * set for different modalities different number of questions
 * if last question and depending on the score winGame() or loseGame()
 */
function nextQuestion() {
  const answers = document.querySelectorAll(".answer");
  //function to check if the value selected from the getLevel was easy
  //if so when finish the game
  if (document.querySelector("#levels").value === "easy") {
    if (currentQuestionsIndex == 6) {
      if (positiveScore > 3) {
        winGame();
      } else {
        loseGame();
      }
    } else {
      currentQuestionsIndex++;
      questionNumber++;
      if (pickedSide.innerText === "light") {
        showChoices();
        showQuestion();
      } else {
        showDarkChoices();
        showDarkQuestion();
      }
    }
  }

  //function to check if the value selected from the getLevel was medium
  //if so when finish the game
  if (document.querySelector("#levels").value === "medium") {
    if (currentQuestionsIndex == 10) {
      if (positiveScore > 5) {
        winGame();
      } else {
        loseGame();
      }
    } else {
      currentQuestionsIndex++;
      questionNumber++;
      if (pickedSide.innerText === "light") {
        showChoices();
        showQuestion();
      } else {
        showDarkChoices();
        showDarkQuestion();
      }
    }
  }
  //function to check if the value selected from the getLevel was difficult
  //if so when finish the game
  if (document.querySelector("#levels").value === "difficult") {
    if (currentQuestionsIndex == 14) {
      if (positiveScore > 7) {
        winGame();

      } else {
        loseGame();
      }
    } else {
      currentQuestionsIndex++;
      questionNumber++;
      if (pickedSide.innerText === "light") {
        showChoices();
        showQuestion();
      } else {
        showDarkChoices();
        showDarkQuestion();
      }
    }
  }
  for (const answer of answers) {
    answer.classList.remove("correct-answer",
      "incorrect-answer"
    );
  }
}

/**
 * function to win game and bring the player to win page
 */
function winGame() {
  messageContainer.classList.remove("hide");
  messageContainer.classList.add("flex");
  winMessage.classList.remove("hide");
  gameAreaElement.classList.add("hide");
  level.classList.remove("disabled");
  winningMessage.innerText =
    `Congratulation you won the battle master ${username.value}!
   You got ${positiveScore} points`;
  winningMessage.classList.remove("hide");
}

function loseGame() {
  messageContainer.classList.remove("hide");
  messageContainer.classList.add("flex");
  lostContainer.classList.remove("hide");
  lostMessage.classList.remove("hide");
  gameAreaElement.classList.add("hide");
  level.classList.remove("disabled");
  lostMessage.innerText = `Oh no! You lost the battle master ${username.value}
   You got just ${positiveScore} right`;
}
