// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//when page is loaded open the modal
document.addEventListener("DOMContentLoaded" , function(){
    $(window).on('load', function() {
        $('#myModal').modal('show');
    });
})


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


//Starting to write all function of the game for better structure
function userName(){}

function easyModality(){}

function mediumModality(){}

function difficultModality(){}

function expertModality(){}

function chooseDarkSide(){}

function chooseLightSide(){}

function runGame(){}

function nextQuestion(){}

function getScore(){}

function incrementPositiveAnswer(){}

function incrementNegativeAnswer(){}

function calcolateFinalScore(){}

function getSound(){}

function getLeaderboard(){}

