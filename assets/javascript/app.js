
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
    }, {
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
var intervalId;
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
    //get the question
    function getQuestion() {
        //Displaying the question  
        $("#question-area").html(questions.question);
        //Dynamically create buttons for each of the potential answers
        for (var i = 0; i < questions.answers.length; i++) {
            $("start").append("<button>" + questions.answers[i] + "</button>")
        }
    }
    
    //start the timer
    //Clear the interval first
    clearInterval(intervalId);
    //Interval starts, 30 seconds apiece
    intervalId = setInterval(getQuestion, 30000)

    //on click
    //Set three second timer to display answer result and gif
    clearTimeOut(setTimeoutID);
    setTimeoutID= setTImeout(displayQuestion, 3000)


    //create an if else statement
    //if clicked answer ==== correct answer
    //display a "you're correct" message and gif
    //add a point to the score

    //else if, if clicked answer does not === correct answer
    //disaplay a "you're wrong" message and gif
    //add a point to the wrong score
    
    //if there is no click, say "You're ran out of time" message and display the gif
    //add to the unanswered score unanswer++;

}

startGameButton();