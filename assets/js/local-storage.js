//https://www.youtube.com/watch?v=DFhmNLKwwGw
// video youtube 
//variables to save score and save it in local storage
var username = document.getElementById("username");
const highScoresList = document.getElementById("highScoresList");
const highScoresListTwo = document.getElementById("highScoresListTwo");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const light = JSON.parse(localStorage.getItem("highScores"));
const dark = JSON.parse(localStorage.getItem("highScores"));

/**
 * function saveHighScore() to get highscore from localstorage
 * then divide it in light and dark list and push it again 
 */
saveHighScore = (e) => {
  e.preventDefault();

  function addToHighScore(light, score) {
    var highScores = getHighScore();
    highScores[light].push(score);
    localStorage.setItem("highScores", JSON.stringify(highScores));
  }

  function addToHighScore(dark, score) {
    var highScores = getHighScore();
    highScores[dark].push(score);
    localStorage.setItem("highScores", JSON.stringify(highScores));
  }

  function getHighScore() {
    var highScores = localStorage.getItem("highScores");
    if (highScores) {
      return JSON.parse(highScores);
    } else return {
      "light": [],
      "dark": []
    };
  }

  if (pickedSide.innerText === "light") {
    addToHighScore("light", {
      score: positiveScore,
      name: username.value,
      side: pickedSide.innerText
    });
  } else {
    addToHighScore("dark", {
      score: positiveScore,
      name: username.value,
      side: pickedSide.innerText
    });
  }
};

/**
 * function to get the items from local storage
 */
function get() {
  localStorage.getItem("highScores");
  localStorage.getItem("highscores[light]");
  localStorage.getItem("highscores[dark]");
}
/**
 * if there is no highscores then show nothing when modal is open
 * otherwise after 500 milliseconds display the light or the dark scores
 */
function leaderboard() {
  if ((localStorage.getItem("highScores") === null)) {
  } else {
    const timeoutLight = setTimeout(displayLightScore, 500);
    const timeoutDark = setTimeout(displayDarkScore, 500);
  }
}

/**
 * display from localstorage the list inside the dark highscores
 * create then list in html to display it
 */
function displayDarkScore() {
  // Declaring variable of darkBest from array of localstorage
  // Max number of localstorage to save and then sort is 8.
  let darkBest = [(dark.dark[0]),
    (dark.dark[1]),
    (dark.dark[2]),
    (dark.dark[3]),
    (dark.dark[4]),
    (dark.dark[5]),
    (dark.dark[6]),
    (dark.dark[7])
  ];
  darkBest.sort((a, b) => b.score - a.score);

  for (j = 0; j < darkBest.length; j++) {
    if (darkBest[j].side === "dark") {
      let bestName = (darkBest[j].name);
      let bestScore = (darkBest[j].score);
      //get just best 5 highscores
      darkBest.splice(5);
      let listTwoName = document.createElement("li");
      listTwoName.innerText = bestName;
      let listTwoScore = document.createElement("li");
      listTwoScore.innerText = bestScore;
      document.querySelector("#boardTwo-score").appendChild(listTwoScore);
      document.querySelector("#boardTwo-name").appendChild(listTwoName);
    }
  }
}

/**
 * display from localstorage the list inside the light highscores
 * create then list in html to display it
 */
function displayLightScore() {
  // Declaring varibale of lightBest from array of localstorage light highScores
  // Max number of localstorage to save and then sort is 8.
  let lightBest = [(light.light[0]),
    (light.light[1]),
    (light.light[2]),
    (light.light[3]),
    (light.light[4]),
    (light.light[5]),
    (light.light[6]),
    (light.light[7])
  ];
  lightBest.sort((a, b) => b.score - a.score);

  for (i = 0; i < lightBest.length; i++) {
    if (lightBest[i].side === "light") {
      lightBest.splice(5);
      let bestName = (lightBest[i].name);
      let bestScore = (lightBest[i].score);
      let listScore = document.createElement("li");
      listScore.innerText = bestScore;
      let listName = document.createElement("li");
      listName.innerText = bestName;
      document.querySelector("#board-score").appendChild(listScore);
      document.querySelector("#board-name").appendChild(listName);
    }
  }
}