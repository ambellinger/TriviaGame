# TriviaGame

TriviaGame is a fun timed trivia game that utilizes GIPHY's API to display gifs inbetween questions. At the end of the game, you are presented with your score.

## Technologies Used
* Javascript
* jQuery
* GIPHY API
## Prerequisites
* None

## Challenges 
Although it's appearance is simple, the construction of TriviaGame was tricky due to the integration of the timer and the clearing of the divs. 

As with many games, there are quite a lot of functions that are being called. Understanding how they are all connected is essential to working with the code. I found myself getting lost in the web of all these functions and how they relate to one another depending on where you are in the application. 

For example, the following functions are called within the decrement function which occurs when the user doesn't select an answer in the alloted time.
```
//Retrieve question by calling the getQuestion function
            getQuestion()
            countdown = 31;
            questionTime()
```
