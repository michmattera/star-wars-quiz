# **STAR WARS QUIZ**

![Star wars Mockup Images](/assets/images/read-me-images/responsive-star-wars.PNG)

[View the live project here](https://michmattera.github.io/)

<p>
<a href="http://jigsaw.w3.org/css-validator/validator$link">
    <img style="border:0;width:88px;height:31px"
        src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
        alt="Valid CSS!" />
    </a>
</p>
     

## **Table of contents**
***
1. [Introduction](#introduction)
2. [UX](#UX)
    1. [Ideal Player Demographic](#ideal-player-demographic)
    2. [Player Goals](#player-goals) 
3. [Development Planes](#development-planes)
4. [Features](#features)  
    1. [General Features](#general-features)
    2. [Sections Features](#pages-features)
    3. [Future features](#future-features)
5. [Design](#design)
    1. [ Color Palette](#color-palette)
    2. [ Typography](#typography)
6. [Issues and Bugs](#issues-and-bugs)
7. [Technology Used](#technology-used)
    1. [Languages Used](#languages-used)
    2. [External Programs-Website Used](#external-programs-website-used)
8. [Testing](#testing)
9. [Deployment](#deployment)
10. [Credits](#credits)
    1. [Visuals](#visuals)
    2. [Content](#content)
    3. [Code](#code)
11. [Acknowledgements](#acknowledgements)


## **Introduction**
This is a quiz build for all **Star Wars** fan.
It tests all star wars fan for knowledge on how much they know the Star Wars world.
 
The main goal of the user is answering correctly at least half of the total of questions to win the quiz.

The game also features a double set of questions and answer to differentiate from other quiz.
The questions are divided in:
- The side chosen : You have 15 different questions for each side(In the main page you can chose either the light side or the dark side).
- You have different numbers of questions depending on the difficulty level the user chose.

It also saves scores in the user’s local storage so the user can resume the game and allows multiple user names on the same device.

This is a fun and interactive quiz created for the second of five Milestone projects required to complete the Diploma in Software development (eCommerce Applications) program at The Code Institute.
The main requirements of this project are to use all the technologies learned so far, **HTML5** , **CSS3** AND **JAVASCRIPT**. 


## **UX**

### **Ideal Player Demographic**
The ideal player for this quiz is:
* New player
* Old player


### **Player Goals**

#### **New Player**

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

#### **Old Player**

This quiz is for users that have already played.
1. As an older player I would like to play again and update my score, trying to reach the top.
2. As an older player I would like to be able to change my username and play again.
3. As an older player I would like to be able to save different username to play with friends offline
4. I would like to be challenged in different levels of questions

## **Development Planes**

To build an interactive front-end site.

 The site should respond to the users’ actions, allowing users to actively engage with data, alter the way site displays the site displays the information to win the game.
For this purpose, I chose an interactive quiz, set in the: **Star wars** world.
The website presents data and information based on the main topic.

Development planes were made in the following order:
- Strategy
- Scope
- Structure
- Skeleton


### **Strategy**
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

### **Scope**

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

### **Structure**

The structure was then created like a game-based interface with all the features on just one page.
 Clicking different icons and buttons will show the user different information and presents him with different choices.

The page was then structured into 3 different sections:
1. The heading = That included the main title, and a container with main icons for game
2. Center = That includes the rapresentation of two buttons where the user clicks to decide which game and questions to answer
3. End = footer with copyright information and developer social media


### **Skeleton**

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

<details>
<summary>Final wireframes - UIzard-Wireframes</summary>

![Final wireframes](/assets/images/read-me-images/final-wireframe.jpg)
</details>

## **Features**

### **General features**

1. **Fully responsive** = Each section of the webiste is fully responsive and easy to navigate for user.
2. **Sound effects** = Implemented sound effect such as soundtrack for game( main sound of star wars movies) and sound effects( lightsaber sound effect) when clicking an answer.
3. **Navigation bar** :
    1. The navigation bar with the following icons on the left:
        - Questions mark = Instruction of the game
        - User = To insert username and save it
        - House = To bring the user home whenever he wants
        - Cup = Leaderboard to see the score saved
    2. The navigation bar with the following icons on the right:
        - Sound = Sound for clicked button and soundtrack for the game
        - Level form = To chose difficulty 
4. **Modals** = Each modal open when clicked on the icon in the navigation bar, it overlays by 2 index and has a backdrop-filter that blur all other content. And a close button marked with an "X".
5. **404 / 505 page** = To redirect user if wrong url was clicked.

### **Sections features** 

Main page is divided in different sections that has their own features:

#### **Navigation bar:**
1. Navigation bar from left to right:
    - Instruction modal that opens when clicked on question mark. It has title and instruction for user on how to play and the different explanation of the levels that he can be challenged with.
2. User modal that open when clicked on user icon . It has an input to insert username with max 15 character and a save button that save the username in the local storage and close as well the modal. Save button is not clickable if input field is empty.
3. House button that bring the user back to the homepage at any time.
4. Leaderboard modal that open when clicked on cup. It shows if there is any score and username saved in the local storage best 5 scores . It is divided in two different divs:
    - Green div that shows 5 best players ( username + score) from when user saved the score from playing the light questions and side.
    - Red div that shows 5 best players ( username + score) from when user saved the score from playing the dark questions and side.
    - Close button.
    If there is no username saved then just the score will be displayed , and in the username list a dash "-".
5. Sound button that is toggled when clicked on the sound button , and can be controlled by the user . If clicked when there is no sound than icon change and soundtrack and sound for answer clicked is audible . Otherwise no sound is heard .
6. Level form button that when clicked give the possibility to the user to choose difficulty. It is not clickable when game is already on , and it became again clickable when game finish. It give possibility of three difficulty:
    - Easy = It displays just 7 questions.
    - Medium = It displays 11 questions.
    - Difficult = It displays 15 questions.

#### **Center buttons:**

Depending on device center buttons are displayed :

**Horizontal line** 
<details>
<summary>Horizontal line</summary>

![Horizontal Line](/assets/images/read-me-images/horizontal.png)
</details>


**Vertical line**
<details>
<summary>Vertical line</summary>

![Vertical Line](/assets/images/read-me-images/vertical.png)
</details>


Both buttons has same height and width and are centered in outside container.
Both buttons has hover effect of main color used ...

1. The green button , has a background image of the rebellion side (the light side) rapresented by **Yoda**.
When clicked this button it will display light questions on "Rebellion" as main topic.
It will change all navigation button to ... with as well border of the answers.

2. The red button , has a background image of the Empire ( the dark side ) rapresented byt **Darth Vader**.
When clicked this button it will displaydark questions on "The empire" as main topic.
It will change all navigation button to ... with as well border of the answers.

#### **Questions and answers**

Once clicked on one of the center buttons then the user is presented with 1 question and 4 different options.
The user still has visible and clickable navigation buttons , all but the level form that during the game became disabled.
For each answer the correct answer will have a visual effect of green and for the wrong answer red.
In addition to this at the bottom the user will have a score div , that with each answer correct or incorrect will add a small score box ( Designed as if was a small lightsaber to remain on main game topic).

#### **Final message**

Final message will have two different outcome :
1. If the user win will have a congratulation message.
2. If the user lose will have a consolation message.

Both messages will have as well 3 buttons :
-   To save the score, that will bring the user home and reload the leaderboard text from localStorage.
-   To replay the same game.
-   To change side directly without having to go back to the homepage.

In addition to this the level form to choose the difficulty at this point will be clickable again,
so the user before playing again or change side can directly change the difficulty, so when clicked on restart or change side will display the correct number of questions.

#### **Footer**

Footer made by the developer almost not visible when centered the screen to makeit visible just for user that really wanted to find copiryght information and developer social media.
All content centered in the middle of the footer.

### **Future features**

Due to limited resources (time constraint, skill of the developer at the moment, and other reasons), some features were not implemented.
In the future the developer thought of the following features to inplement the game:

1. Add new level of difficulty **Expert** were the user had 19 questions and could win just if guessing all answers.
2. Differentiate the sound for correct and incorrect andswer.
3. As in original wireframe , add on the side of the score-container images of the dark and light side depending on the side chosen , to show charachter, and to be more game like visually.
4. Leaderboard local storage to be able to save as many infinite local storage and get just best 5 .

## **Design**

### **Color palette**

The overall theme of the game were green and blue, based on the background picture throughout all the game.
I chose this picture to remind user of space and planets as in star wars.
With the picture was then based the color palette for the game:


<details>
<summary>Color palette</summary>

![Color palette](/assets/images/read-me-images/colormind.png)
</details>
The color palette were chosen with [Colormind](http://colormind.io/bootstrap/).

#### **Main colors**
Main colors token from the color palette were the following three:

1. **#112948 BLUE DIANNE** = Chosen mainly for background color for buttons and footer. Used as well for background of modal such as instruction and username.
2. **#0783BE CURIOUS BLUE** = Chosen mainly for Heading and original color for the border of all buttons. Used as well for save button in the username modal.
3. **#BFDA46 CONIFER** = Chosen for the color of the light side. All buttons once is started the rebellion questions change the border from #0783BE to #BFDA46, as well as the border of the questions . In addition the final message when played the light side is displayed in this color as well.

The only color chosen outside the color palette was the color rapresenting the dark side that as **BFDA46** was used for the main picture of the dark side , all border for buttons when chosen the dark side and last message was **rgb(136, 0, 0)** a dark red that rapresented the dard side.

Based on these colors then was added **#ddd ALTO** between white and grey for the text with the blue background.

#### Border lightsaber effect

In addition to the previous colors were added 3 more colors used for the effect of the border for questions and buttons.
Followed ![Youtube video](https://www.youtube.com/watch?v=XFuilG5FAIc) to learn how to do lightsaber effect and get the colors from there.
1. **#0F0** = Very bright green.
2. **#F00** = Very bright red.
3. **#FFD0D0 COSMOS** = For the color of the border before the effect of the lightsaber a light pick.
4. **WHITE** = For the effect of the text-shadow that remembers the lightsaber.

### **Typography**
All of the fonts were sourced from [Google Fonts](https://fonts.google.com). 
The typography chosen were the following :
1. Main font: 
    -  "Nanum Gothic"
    Used for the Main Title and heading. Chosen for the modernity of the font and to be paired nice with secondary font.
2. Secondary font :
    -  "Ubuntu"
    Used for the main questions and text throughout all website. Clean and modern font chosen to give user best experience for screen-readers.
3. Tertiary :
    - "Sans-serif" 
    If the other two fonts were unavailable then this save font was chosen.

### **Images**
Three main images were created and token from the developer in ![Canva](https://www.canva.com/).
1. First image of the space used for background.
2. Second image used to rapresent light side **Yoda** stylized with a lightsaber.
3. Third and last image to rapresent dark side **Darth Vader** stylized.

## **Issue and Bugs**

During development of the website many issues and bugs were found by the developer.
Most significant one displayed below:
1. To inplement sound an icon was added to the navigation section. And create a function with JS to stop and play the sound when clicked .
    - Issue : Developer saw that also if sound was stopping and playing when the button was clicked the icon would not change. In addition when added the second function for the answer sounds , when the window was loading the sound was stopping but the sound for the answer clicked no. When instead you were replaying the game everything was working normally.
    - Solved: The first function was then changed thanks to ![StackOverflow](https://stackoverflow.com/questions/27368778/
how-to-toggle-audio-play-pause-with-one-button-or-link). While the second issue the developer saw that the if statement to check if running or not the sound was not working properly in two different functions. So the developer change the 2 single functions and put them together in a longer function to eliminate the issue.
2. When inplementing the answers and the next question function , an error was found.
    - Issue = The first question was always skipped and then working perfectly after .
    - Solved = The developer tried to setTimeout for the nextQuestion function but still got the error , so had to set the timeout and as well change the moment the previous function was called to eliminate the issue.
3. When clicking on forst button to decide which game to play the developer found a new issue.
    - Issue = when clicking on change side onclick button it shows previous question of game .
    - Solved = Developer changed all the function to changeSide and discovered that the onclick button was not working properly because of another variable that had the same name declared inside the wrong function. Eliminate variable and rewrite all function to let new function work.


## **Technology Used**  

### **Languages Used**
   * [HTML5](https://en.wikipedia.org/wiki/HTML5)
   * [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)  
   * [JavaScript](https://en.wikipedia.org/wiki/JavaScript) 

### **External Programs-Website Used**

The developer used different external programs throughout the development of this project.
There are all external programs used :
- [Google Fonts](https://fonts.google.com/ "Link to Google Fonts")
    - Google fonts was used to import the fonts "Nanum Gothic", "Ubuntu" and "Serif" , "Sans-serif" for backup fonts into the style.css file. These fonts were used throughout the project.
- [Font Awesome](https://fontawesome.com/ "Link to FontAwesome")
     - Font Awesome was used to import icons (e.g. social media icons, main buttons icons , instruction icons).
- [GitPod](https://gitpod.io/ "Link to GitPod homepage")
     - GitPod was used for writing code, commiting, and then pushing to GitHub.
- [GitHub](https://github.com/ "Link to GitHub")
- [Canva](https://www.canva.com/ "Link to Canva homepage")
     - Canva was used to create and take all images used for the website.
- [Am I Responsive?](http://ami.responsivedesign.is/# "Link to Am I Responsive Homepage")
     - Am I Responsive was used in order to see responsive design throughout the process and to generate mockup imagery to be used.
- [Ezgif](https://ezgif.com/video-to-gif "Link to go to ezgif homepage")
    - Ezgif was used to convert all videos to gifs for the testing file.
- [Free screen recorder](https://screencast-o-matic.com/screen-recorder?from=app&installed=true "Link to go to Free screen recorder homepage")
    - Free screen recorder was installed on the pc, and used to screen record all videos for the testing files.



