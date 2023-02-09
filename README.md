# **STAR WARS QUIZ**

![Star wars Mockup Images](/assets/images/read-me-images/responsive-star-wars.PNG)

[View the live project here](https://michmattera.github.io/star-wars-quiz/)
     

## **Table of contents**
***
1. [Introduction](#introduction)
2. [UX](#ux)
    1. [Ideal Player Demographic](#ideal-player-demographic)
    2. [Player Goals](#player-goals) 
3. [Development Planes](#development-planes)
4. [Features](#features)  
    1. [General Features](#general-features)
    2. [Sections Features](#sections-features)
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
    1. [Code](#code)
11. [Acknowledgements](#acknowledgements)


## **Introduction**
This is a quiz built for all **Star Wars** fans.
It tests all star wars fans for knowledge on how much they know about the Star Wars world.
 
The main goal of the user is to answer correctly at least half of the total questions to win the quiz.

The game also features a double set of questions and answers to differentiate it from other quizzes.
The questions are divided in:
- The side chosen: You have 15 different questions for each side(On the main page you can choose either the light side or the dark side).
- You have different numbers of questions depending on the difficulty level the user chose.

It also saves scores in the user’s local storage so the user can resume the game and allows multiple user names on the same device.

This is a fun and interactive quiz created for the second of five Milestone projects required to complete the Diploma in Software development (eCommerce Applications) program at The Code Institute.
The main requirements of this project are to use all the technologies learned so far, **HTML5**, **CSS3**, AND **JAVASCRIPT**. 


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
3. As an older player I would like to be able to save different usernames to play with friends offline
4. I would like to be challenged with different levels of questions

## **Development Planes**

To build an interactive front-end site.

 The site should respond to the users’ actions, allowing users to actively engage with data, and alter the way the site displays the information to win the game.
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
2. Center = That includes the presentation of two buttons where the user clicks to decide which game and questions to answer
3. End = footer with copyright information and developer social media


### **Skeleton**

Wireframes were made to organize and make the skeleton of the website. The wireframes were created using the free platform 
[Uizard](https://app.uizard.io/prototypes).

From the original idea, wireframes were then changed by the developer for better structure.
In the original idea before the Homapage, there was a single page with three different buttons containing:

- Start the quiz
- Difficulty
- Leaderboard

<details>
<summary>Original landing page- UIzard-Wireframes</summary>

![Original-landing-page-wireframe](/assets/images/read-me-images/original-landing-wireframe.png)

</details>
These buttons then bring the user to three different pages :

The second page chooses between the dark and the light side to play.


<details>
<summary>Start quiz- UIzard-Wireframes</summary>

![Start-quiz](/assets/images/read-me-images/original-start-quiz.png)
</details>


A page to choose the difficulty of the quiz.

<details>
<summary>Difficulty- UIzard-Wireframes</summary>

![Difficulty](/assets/images/read-me-images/difficulty.png)
</details>


A page to be able to see the saved score and divide the score into two different lists.
 
<details>
<summary>Leaderboard - UIzard-Wireframes</summary>

![Leaderboard](/assets/images/read-me-images/leaderboard.png)
</details>

These were then changed for a single page, implementing 3 different modals that were displayed or not based on the user actions,
without bringing the user to different pages.

But having everything on a single page.

<details>
<summary>Final wireframes - UIzard-Wireframes</summary>

![Final wireframes](/assets/images/read-me-images/final-wireframe.jpg)
</details>

## **Features**

### **General features**

1. **Fully responsive** = Each section of the website is fully responsive and easy to navigate for users.
2. **Sound effects** = Implemented sound effects such as soundtrack for the game( main sound of star wars movies) and sound effects( lightsaber sound effects) when clicking an answer.
3. **Navigation bar** :
    1. The navigation bar with the following icons on the left:
        - Questions mark = Instruction of the game
        - User = To insert username and save it
        - House = To bring the user home whenever he wants
        - Cup = Leaderboard to see the score saved
    2. The navigation bar with the following icons on the right:
        - Sound = Sound for clicked button and soundtrack for the game
        - Level form = To chose difficulty 
4. **Modals** = Each modal opens when clicking on the icon in the navigation bar, it overlays by 2 indexes and has a backdrop filter that blurs all other content. And a close button marked with an "X".
5. **404 / 505 page** = To redirect the user if the wrong URL was clicked.

### **Sections features** 

The main page is divided into different sections that have their features:

#### **Navigation bar:**

 - Navigation bar from left to right:
1. House button that brings the user back to the homepage at any time.
2. User modal that opens when clicked on the user icon. It has an input to insert a username with max 15 characters and a save button that saves the username in the local storage and closes it as well as the modal. The save button is not clickable if the input field is empty.
3. Instruction modal that opens when clicked on the question mark. It has a title and instructions for the user on how to play and the different explanations of the levels that he can be challenged with.
4. Leaderboard modal that opens when clicked on the cup. It shows if there is any score and username saved in the local storage best 5 scores. It is divided into two different divs:
    - Green div that shows 5 best players ( username + score) from when the user saved the score from playing the light questions and side.
    - Red div that shows 5 best players ( username + score) from when the user saved the score from playing the dark questions and side.
    - Close button.
    If there is no username saved then just the score will be displayed, and in the username list a dash "-".
5. Sound button that is toggled when clicked on the sound button, and can be controlled by the user. If clicked when there is no sound then the icon change and the soundtrack and sound for the answer clicked is audible. Otherwise, no sound is heard.
6. Level form button that when clicked gives the possibility to the user to choose a difficulty. It is not clickable when the game is already on, and it became again clickable when the game finishes. It gives a possibility of three difficulties:
    - Easy = It displays just 7 questions.
    - Medium = It displays 11 questions.
    - Difficult = It displays 15 questions.

#### **Center buttons:**

Depending on the device center buttons are displayed :

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


Both buttons have the same height and width and are centered in the outside container.
Both buttons have a hover effect of the main color used **#112948 BLUE DIANNE**

1. The green button, has a background image of the rebellion side (the light side) represented by **Yoda**.
When clicking this button it will display light questions on "Rebellion" as the main topic.
It will change all navigation buttons to  **#BFDA46 CONIFER**  with as well border of the answers.

2. The red button has a background image of the Empire ( the dark side ) represented byt **Darth Vader**.
When clicking this button it will display dark questions on "The empire" as the main topic.
It will change all navigation buttons to **RGB (136, 0, 0)**  with as well border of the answers.

#### **Questions and answers**

Once clicked on one of the center buttons then the user is presented with 1 question and 4 different options.
The user still has visible and clickable navigation buttons, all but the level form that during the game became disabled.
For each answer, the correct answer will have a visual effect of green, and for the wrong answer red.
In addition to this at the bottom the user will have a score div, that with each answer correct or incorrect will add a small score box ( Designed as if was a small lightsaber to remain on the main game topic).

#### **Final message**

The final message will have two different outcomes:
1. If the user win will have a congratulatory message.
2. If the user loses will have a consolation message.

Both messages will have as well 3 buttons :
-   To save the score, that will bring the user home and reload the leaderboard text from localStorage.
-   To replay the same game.
-   To change sides directly without having to go back to the homepage.

In addition to this, the level form to choose the difficulty at this point will be clickable again,
so the user before playing again or changing sides can directly change the difficulty, so when clicking on restart or change side will display the correct number of questions.

#### **Footer**

The footer made by the developer is almost not visible when centered on the screen to make it visible just for users that wanted to find copyright information and developer social media.
All content is centered in the middle of the footer.

### **Future features**

Due to limited resources (time constraints, the skill of the developer at the moment, and other reasons), some features were not implemented.
In the future the developer thought of the following features to implement the game:

1. Add a new level of difficulty **Expert** where the user had 19 questions and could win just if guessing all answers.
2. Differentiate the sound for correct and incorrect answers.
3. As in the original wireframe, add on the side of the score-container images of the dark and light side depending on the side chosen, to show the character, and to be more game-like visually.
4. Leaderboard local storage to be able to save as much infinite local storage and get just the best 5.

## **Design**

### **Color palette**

The overall theme of the game was green and blue, based on the background picture throughout the game.
I chose this picture to remind users of space and planets as in star wars.
The picture was then based on the color palette for the game:


<details>
<summary>Color palette</summary>

![Color palette](/assets/images/read-me-images/colormind.png)
</details>

The color palette was chosen with [Colormind](http://colormind.io/bootstrap/).

#### **Main colors**
The main colors token from the color palette were the following three:

1. **#112948 BLUE DIANNE** = Chosen mainly for a background color for buttons and footer. Used as well for the background of modal such as instruction and username.
2. **#0783BE CURIOUS BLUE** = Chosen mainly for the Heading and original color for the border of all buttons. Used as well for the save button in the username modal.
3. **#BFDA46 CONIFER** = Chosen for the color of the light side. All buttons once started the rebellion questions change the border from #0783BE to #BFDA46, as well as the border of the questions. In addition, the final message when played on the light side is displayed in this color as well.

The only color chosen outside the color palette was the color representing the dark side **BFDA46** was used for the main picture of the dark side, all borders for buttons when chosen for the dark side and the last message was **RGB (136, 0, 0)** a dark red that represented the dark side.

Based on these colors than was added **#ddd ALTO** between white and grey for the text with the blue background.

#### Border lightsaber effect

In addition to the previous colors were added 3 more colors were used for the effect of the border for questions and buttons.
Followed [Youtube video](https://www.youtube.com/watch?v=XFuilG5FAIc) to learn how to do the lightsaber effect and get the colors from there.
1. **#0F0** = Very bright green.
2. **#F00** = Very bright red.
3. **#FFD0D0 COSMOS** = For the color of the border before the effect of the lightsaber a light pick.
4. **WHITE** = For the effect of the text shadow that remembers the lightsaber.

### **Typography**
All of the fonts were sourced from [Google Fonts](https://fonts.google.com). 
The typography chosen was the following :
1. Main font: 
    -  "Nanum Gothic"
    Used for the Main Title and heading. Chosen for the modernity of the font and to be paired nicely with the secondary font.
2. Secondary font :
    -  "Ubuntu"
    Used for the main questions and text throughout all websites. The clean and modern font was chosen to give users the best experience for screen readers.
3. Tertiary :
    - "Sans-serif" 
    If the other two fonts were unavailable then this save font was chosen.

### **Images**
Three main images were created and taken by the developer in [Canva](https://www.canva.com/).
1. First image of the space used for the background.
2. Second image is used to represent the light side **Yoda** stylized with a lightsaber.
3. Third and last image to represent the dark side **Darth Vader** stylized.

## **Issues and Bugs**

During the development of the website, many issues and bugs were found by the developer.
The most significant one is displayed below:
1. To implement sound an icon was added to the navigation section. And create a function with JS to stop and play the sound when clicked.
    - Issue: The developer saw that also if the sound was stopping and playing when the button was clicked the icon would not change. In addition, when adding the second function for the answer sounds, when the window was loading the sound was stopped but the sound for the answer clicked no. When instead you were replaying the game everything was working normally.
    - Solved: The first function was then changed thanks to [Stack-Overflow](https://stackoverflow.com/questions/27368778/how-to-toggle-audio-play-pause-with-one-button-or-link)
how-to-toggle-audio-play-pause-with-one-button-or-link). While the second issue the developer saw that the if statement to check if the running or not sound was not working properly in two different functions. So the developer changes the 2 single functions and puts them together in a longer function to eliminate the issue.
2. When implementing the answers and the next question function, an error was found.
    - Issue = The first question was always skipped and then worked perfectly after.
    - Solved = The developer tried to setTimeout for the nextQuestion function but still got the error, so had to set the timeout and as well change the moment the previous function was called to eliminate the issue.
3. When clicking on the first button to decide which game to play the developer found a new issue.
    - Issue = when clicking on the change side on the click button it shows the previous question of the game.
    - Solved = Developer changed all the functions to the change side and discovered that the on-click button was not working properly because of another variable that had the same name declared inside the wrong function. Eliminate variables and rewrite all functions to let new function work.


## **Technology Used**  

### **Languages Used**
   * [HTML5](https://en.wikipedia.org/wiki/HTML5)
   * [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)  
   * [JavaScript](https://en.wikipedia.org/wiki/JavaScript) 

### **External Programs-Website Used**

The developer used different external programs throughout the development of this project.
There are all external programs used :
- [Google Fonts](https://fonts.google.com/ "Link to Google Fonts")
    - Google fonts were used to import the fonts "Nanum Gothic", "Ubuntu" "Serif", and "Sans-serif" for backup fonts into the style.css file. These fonts were used throughout the project.
- [Font Awesome](https://fontawesome.com/ "Link to FontAwesome")
     - Font Awesome was used to import icons (e.g. social media icons, main buttons icons, instruction icons).
- [GitPod](https://gitpod.io/ "Link to GitPod homepage")
     - GitPod was used for writing code, committing, and then pushing to GitHub.
- [GitHub](https://github.com/ "Link to GitHub")
- [Canva](https://www.canva.com/ "Link to Canva homepage")
     - Canva was used to create and take all images used for the website.
- [Am I Responsive?](http://ami.responsivedesign.is/# "Link to Am I Responsive Homepage")
     - Am I Responsive was used to see responsive design throughout the process and to generate mockup imagery to be used.
- [Ezgif](https://ezgif.com/video-to-gif "Link to go to ezgif homepage")
    - Ezgif was used to convert all videos to gifs for the testing file.
- [Free screen recorder](https://screencast-o-matic.com/screen-recorder?from=app&installed=true "Link to go to Free screen recorder homepage")
    - Free screen recorder was installed on the pc, and used to screen record all videos for the testing files.

 ## **Testing**

Testing information can be found in a separate testing [file](TESTING.md "Link to testing file")

## **Deployment**

This project was developed using [GitPod](https://www.gitpod.io/ "Link to GitPod site"), which was then committed and pushed to GitHub using the GitPod terminal.

### **Deploying on GitHub Pages**
To deploy everything to GitHub Pages the following steps were taken:

1. Log into [GitHub](https://github.com/login "Link to GitHub login page") or [create an account](https://github.com/join "Link to GitHub create account page").
2. Locate the [GitHub Repository](https://github.com/michmattera/newline-alebrije "Link to GitHub Repo").
3. At the top of the repository, select Settings from the menu items.
4. Scroll down the Settings page to the "Pages" section.
5. Under "Source" click the drop-down menu labeled "None" and select "Main".
6. Click save or Ctrl + s.
7. Scroll back down to the "Pages" section to retrieve the deployed link.


## **Credits**

### **Code**

The code for the website was made by the developer, and the content and the questions were invented by the developer and not taken from any pre-existing source.
For the most complex functions, the developer helped from:
- Slack
- Stack Overflow
- Tutors
- Youtube videos

Throughout all the code where the developer used external help, the source is always commented on before the actual code.


## **Acknowledgements**

- I would like to thank my friends and family for helping me and giving me many different feedbacks to improve the website.
- I would like to thank in particular Francesco for his knowledge of star wars and for helping me make the questions and answers for the main game.
- I would like to thank my tutors and my mentor, Seun, for their invaluable help and guidance throughout the process.
- Lastly, I would like to thank the amazing people in Slack who helped me with a few issues and tested the site giving me valuable feedback.

[Back to top](#star-wars-quiz)

***