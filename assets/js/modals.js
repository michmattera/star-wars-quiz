//constant variables for different modals

// Instruction modal
const modalInstruction = document.querySelector(".modal-instruction");
const overlay = document.querySelector(".overlay");
const openModalInstructionBtn = document.querySelector(".btn-open-instruction");
const closeButtons = document.querySelectorAll(".btn-close");
//username modal
const modalUsername = document.querySelector(".modal-username");
const openModalUsernameBtn = document.querySelector(".btn-open-username");
const saveButton = document.querySelector(".save");
//leaderboard modal
const modalLeaderboard = document.querySelector(".modal-leaderboard");
const openModalLeaderboardBtn = document.querySelector(".btn-open-leaderboard");

//open modal instruction
const openModalInstruction = function () {
    modalInstruction.classList.remove("hide");
    overlay.classList.remove("hide");
};
//open modal username 
const openModalUsername = function () {
    modalUsername.classList.remove("hidden");
    overlay.classList.remove("hide");
};
//open modal leaderboard
const openModalLeaderboard = function () {
    modalLeaderboard.classList.remove("hide");
    overlay.classList.remove("hide");
};

//close all modal when clicked on closeButtons
function clsModal() {
    modalUsername.classList.add("hidden");
    modalInstruction.classList.add("hide");
    modalLeaderboard.classList.add("hide");
    overlay.classList.add("hide");
};
//select all modals to add same close function clsModal when clicked
Array.from(document.querySelectorAll(".btn-close")).forEach(closeButtons => {
    closeButtons.addEventListener("click", clsModal);
});

//add event listener to open modals
openModalInstructionBtn.addEventListener("click", openModalInstruction);
saveButton.addEventListener("click", closeButtons);
openModalUsernameBtn.addEventListener("click", openModalUsername);
openModalLeaderboardBtn.addEventListener("click", openModalLeaderboard);

/*Audio Player
Created using information from Stackflow
https://stackoverflow.com/questions/27368778/
how-to-toggle-audio-play-pause-with-one-button-or-link*/
const audioPlayer = document.getElementById("player");
const myAudio = document.getElementById("audio");
const audioOffIcon = document.getElementById("sound-off");
const audioOnIcon = document.getElementById("sound-on");

function togglePlay() {
    if (myAudio.paused) {
        myAudio.play();
        answerSound();
        audioOffIcon.classList.remove("hide");
        audioOnIcon.classList.add("hide");
    } else {
        myAudio.pause();
        answersAudio.pause();
        audioOffIcon.classList.add("hide");
        audioOnIcon.classList.remove("hide");
    }
}
/**
 * function to add sound every time user click on an answer
 * add currenttime 0 so the sound
 *if is not finished will restart on next click
 */
function answerSound() {
    const answers = document.querySelectorAll(".answer");
    let answersAudio = document.getElementById("answersAudio");
    answers.forEach(answer => {
        answer.addEventListener("click", () => {
            answersAudio.currentTime = 0;
            answersAudio.play();
        });
    });
}

//home button
document.querySelector(".home-btn")
.addEventListener("click", function () {
    window.location.reload();
});

//save button to bring you to home and have leaderboard() with username and score
document.querySelector(".save-score")
.addEventListener("click", function () {
    window.location.reload();
});

//save button to bring you to home and have leaderboard() with username and score
document.querySelector(".save-score-two")
.addEventListener("click", function () {
    window.location.reload();
});

//add event listener to close leaderboard
//to avoid duplication of list in displayLightScore() - displayDarkScore()
document.querySelector(".leaderboard")
    .addEventListener("click", function () {
        window.location.reload();
    });