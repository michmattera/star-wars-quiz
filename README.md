bug= icon does not change , sound work good.
issue = 
let currentQuestion = lightQuestions[questionNumber]; While writing the function to show next question and answer this variable did not let me show it , too off the variable to let code work
issue = function to get answer , first question is skipped , for checker and nextQuestion ,try to add setTimeout but still error
bug = when clicking on change side onclick button it shows previous question of game 

# STAR WARS QUIZ

![Star wars Mockup Images](/assets/images/read-me-images/responsive-star-wars.PNG)

[View the live project here](https://michmattera.github.io/)

<p>
<a href="http://jigsaw.w3.org/css-validator/validator$link">
    <img style="border:0;width:88px;height:31px"
        src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
        alt="Valid CSS!" />
    </a>
</p>
     

## Table of contents
***
1. [Introduction](#introduction)
2. [UX](#UX)
    1. [Ideal Player Demographic](#ideal-player-demographic)
    2. [Player Goals](#player-goals) 
3. [Development Planes](#development-planes)
4. [Features](#features)  
    1. [General Features](#general-features)
    2. [Pages Features](#pages-features)
    3. [Future features](#future-features)
5. [Design](#design)
    1. [ Color Palette](#color-palette)
    2. [ Typography](#typography)
6. [Design](#design)
    1. [ Color Palette](#color-palette)
    2. [ Typography](#typography)
7. [Issues and Bugs](#issues-and-bugs)
8. [Technology Used](#technology-used)
    1. [Languages Used](#languages-used)
    2. [External Programs-Website Used](#external-programs-website-used)
9. [Testing](#testing)
10. [Deployment](#deployment)
11. [Credits](#credits)
    1. [Visuals](#visuals)
    2. [Content](#content)
    3. [Code](#code)
12. [Acknowledgements](#acknowledgements)


## Introduction
This is a quiz build for all **Star Wars** fan.
It tests all star wars fan for knowledge on how much they know the Star Wars world.
 
The main goal of the user is answering correctly at least half of the total of questions to win the quiz.

The game also features a double set of questions ans answer to differentiate from other quiz.
The questions are divided in:
- The side chosen : You have 15 different questions for each side(In the main page you can chose either the light side or the dark side).
- You have different numbers of questions depending on the difficulty level the user chose.

It also saves scores in the user’s local storage so the user can resume the game and allows multiple user names on the same device.

This is a fun and interactive quiz created for the second of five Milestone projects required to complete the Diploma in Software development (eCommerce Applications) program at The Code Institute.
The main requirements of this project are to use all the technologies learned so far, **HTML5** , **CSS3** AND **JAVASCRIPT**. 


## UX
### Ideal Player Demographic
The ideal player for this quiz is:
* New player
* Old player


### Player Goals

#### New Player

This quiz is for users that would like to have fun and get their knowledge tested on **star wars**.
1. As a new player I would like to get visually stimulated by Star wars symbols at first impact.
2. As a new player I would like to easily navigate the main page and find all features that remind me of a game such as : 
    - Leaderboard
    - Instructions on how to play
    - Inserting username to save
    - Sound
    - Automated questions and answers
    - Fun and relative questions on the main topic
3. As a new player I would like to be able to play without reading the instruction first
4. As a new player I would like to be able to quit the game at any point

#### Old Player

This quiz is for users that have already played.
1. As an older player I would like to play again and update my score, trying to reach the top.
2. As an older player I would like to be able to change my username and play again.
3. As an older player I would like to be able to save different username to play with friends offline
4. I would like to be challemged in different levels of questions

## Development Planes

To build an interactive front-end site.

 The site should respond to the users’ actions, allowing users to actively engage with data, alter the way site displays the site displays the information to win the game.
For this purpose, I chose an interactive quiz, set in the: **Star wars** world.
The website presents data and information based on the main topic.

Development planes were made in the following order:
- Strategy
- Scope
- Structure
- Skeleton


### Strategy
Used to determine business goals and user needs.

Business goals:
- Get the user to play.
- Get the user to insert a username.
- Get the user to save the score and try different levels of the quiz.
- Get the player to try both sides of the game quiz.
- Stimulate the user with audio, visual effect, and images.

User needs were determined based on different target audiences: 

- **Roles:**
    - New player
    - Old player

- **Demographic:**
    - No minimum age
    - From all over the world

- **Psychographic:**
    - Star wars fan
    - Quiz lovers

### Scope

The scope plane, based on the goals established on the strategy plane, identified the following two categories.
- Content Requirements:
    - The user will be looking for:
        - Information about star wars
        - Different modalities to play
        - Instructions on how to play
- Functionality Requirements:
    - The user will be able to:
        - Be able to insert username and save the score
        - Play again

### Structure

The structure was then created like a game-based interface with all the features on just one page.
 Clicking different icons and buttons will show the user different information and presents him with different choices.

The page was then structured into 3 different sections:
1. The heading = That included the main title, and a container with main icons for game
2. Center = That includes the rapresentation of two buttons where the user clicks to decide which game and questions to answer
3. End = footer with copyright information and developer social media


### Skeleton

Wireframes were made to organize and make the skeleton of the website. The wireframes were created using the free platform 
[Uizard](https://app.uizard.io/prototypes).

From the original idea wireframes were then changed by the developer for better structure.
In the original idea before the Homapage there was a single page with three different buttons containing:

- Start the quiz
- Difficulty
- Leaderboard

<details>
<summary>Original landing page- UIzard-Wireframes</summary>

![Original-landing-page-wireframe](/assets/images/read-me-images/original-landing-wireframe.png)

</details>
These buttons were than bringing the user to three different pages :

Second page to choose between the dark or the light side to play.


<details>
<summary>Start quiz- UIzard-Wireframes</summary>

![Start-quiz](/assets/images/read-me-images/original-start-quiz.png)
</details>


A page to choose the difficulty of the quiz.

<details>
<summary>Difficulty- UIzard-Wireframes</summary>

![Difficulty](/assets/images/read-me-images/difficulty.png)
</details>


A page to be able to see the saved score , and divide the score in two different lists.
 
<details>
<summary>Leaderboard - UIzard-Wireframes</summary>

![Leaderboard](/assets/images/read-me-images/leaderboard.png)
</details>

These were than changed for a single page, implementing 3 different modals that were displayed or not based on the user actions ,
without bringing the user to different pages .

But having everything on a single page.

## Features

### General features

1. **Fully responsive** = Each section of the webiste is fully responsive and easy to navigate for user.
2. **Sound effects** = Implemented sound effect such as soundtrack for game and sound effects when clicking an answer.
3. **Navigation bar** :
    1. The navigation bar with the following icons on the left:
        - Questions mark = Instruction of the game
        - User = To insert username and save it
        - House = To bring the user home whenever he wants
        - Cup = Leaderboard to see the score saved
    2. The navigation bar with the following icons on the right:
        - Sound = Sound for clicked button and soundtrack for the game
        - Level form = To chose difficulty 
    3. **404 / 505 page** = To redirect user if wrong url was clicked.


