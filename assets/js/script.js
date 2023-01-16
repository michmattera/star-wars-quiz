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

//Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded" , function(){
  let buttons = document.getElementsByTagName('button');

  for(let button of buttons){
      button.addEventListener('click', function(){
          if(this.getAttribute("data-type") === "light"){
              runLightGame();
          } else {
              runDarkGame();
          }
      })
  }
});


/**
 * When chose side in chooseDarkSide or chooseLightSide
 * displaylightQuestions or displayDarkQuestions
 */
function runDarkGame() {
  console.log('dark game');
  
}

function runLightGame() {
  console.log('Light game');
  
}


//https://stackoverflow.com/questions/9419263/how-to-play-audio
//Play audio and user decide when to play or stop music


  function togglePlay() {
    let audioElem = document.getElementById('player');
    if (audioElem.paused) {
       audioElem.className =("fa-solid fa-volume-high");
       audioElem.play();
    } else {
       audioElem.className =("fa-solid fa-volume-xmark");
       audioElem.pause();
    }
 }


//isPlaying ? audio.pause() : audio.play();
function getLeaderboard() {}