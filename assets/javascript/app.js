
// Create Lists of Questions and Answers in an array

var questions = [
    {
        question: "Question 1",
        answers: ["Option A", "Option B", "Option C", "Option D"],
        correctanswer: "Correct choice",
        gif: $('#gif').append('<img src="TriviaGame\assets\images\belding.gif" />'),

    }, {
        question: "Question 2",
        answers: ["Option A", "Option B", "Option C", "Option D"],
        correctanswer: "Correct choice",
        gif: $('#gif').append('<img src="TriviaGame\assets\images\bulls.gif" />'),
    } , {
        question: "Question 3",
        answers: ["Option A", "Option B", "Option C", "Option D"],
        correctanswer: "Correct choice",
        gif: $('#gif').append('<img src="TriviaGame\assets\images\fresh.gif" />'),
    }

    , {
        question: "Question 4",
        answers: ["Option A", "Option B", "Option C", "Option D"],
        correctanswer: "Correct choice",
        gif: $('#gif').append('<img src="TriviaGame\assets\images\lionking.gif" />'),
    }

    , {
        question: "Question 5",
        answers: ["Option A", "Option B", "Option C", "Option D"],
        correctanswer: "Correct choice",
        gif: $('#gif').append('<img src="TriviaGame\assets\images\nirvanabark.gif" />'),
    }

    , {
        question: "Question 6",
        answers: ["Option A", "Option B", "Option C", "Option D"],
        correctanswer: "Correct choice",
        gif: $('#gif').append('<img src="TriviaGame\assets\images\skeeter.gif" />'),
    }
]

//Create Global Variables
var intervalidid;
var setTimeoutId;
var correctanswer;
var unanswered;
var incorrectAnswer;
var arrayIndex = 0;


// Startgame. Game can't start until the start game button is clicked.
function startGameButton() {
    $("#start").on("click", function () {
       startgame();       
    });
} 

function startgame() {
    //Game begins.
    //Clear the interval
    clearInterval(setIntervalID);
    //Interval starts, 30 seconds apiece
    setIntervalID = setInterval(getQuestion, 30000)
    
    function getQuestion() {
      

        if there is no  click{
            You ran out of time
            Display answer with animated gif
            Unanswer++;
        }

    }


// Function displayQuestion{
//    clearInterval(setIntervalID);
//  setIntervalID = setInterval(getQuestion,30000);

// }

// function getQuestion()
// {     
//                      get the Questionarray

// if there is no  click{
//     You ran out of time
// Display answer with animated gif
//     Unanswer++;
//            }
// }


// When you click on the possible answer
// clearTimeOut(setTimeoutID);
//  setTimeoutID= setTImeout displayQuestion, 3000)

//       You compare the answer array with the correct answer after you click
//                If it is correct
//                  You’ve answered correctly.
//                      Display the correct answer with the animated gif
//  CorrectAnswer++
//            Else
//  IncorrectAnswer++
//       You’ve answer incorrectly
//       Display correct answer


//Psuedo code 

some info 
set interval id
var intervalidid; 

you have to clearInterval(setintervalid) after each question to flush it out. 

setTimeout to give the answers with the gif

you have to make the setTimeout variable
setTimeoutId;

clearTimeout(setTimeoutId)
make sure you put it before you initialize it. 

(same thing with onclick, it will stay in memory.)

Don't run the program until the user hits the start button
////

Write questions // LIst of Questions and Answers in an array

var questions = [
    {
        question:
        answers:
        correctanswer:
        gif:

    } {
        question:
        answers:
        correctanswer:
        gif:
    }
]
store gifs locally or remotely
create variables.
    setintervalid   
    setTimeoutId
    correct answers
    wrong answers
    unanswered
    array index = 0

Start game

startgame
    setIntervalID=setInterval(getQuestion, 30000)

    function getQuestion( ) {
        get the Questionarray

    }

can you $.each to disply the iteration for the answer LIst

on click will compare the answer to the correct, it will count as plus one in score and a display the gif
    set time out should begin 
        setTimeoutId = setTimeout(getQuestion, 3000)
    if else
    else, wronganswers++
    display correct asnwer with something that says they annswered incorrectly

    the set interval is a loop in of itself. 