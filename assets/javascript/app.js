
// Create Lists of Questions and Answers in an array

var questions = [
    {
        question: "Question 1",
        answers: ["Option A", "Option B", "Option C", "Option D"],
        correctanswer: "Option A",
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
var countdown = 30;

 


// Startgame. Game can't start until the start game button is clicked.
function startGameButton() {
    $("#start").on("click", function () {
        $("#start").remove();
        startgame();
        $("#timer").html("Seconds Left: " + countdown);
       
        
    });
}

function startgame() {
    //Game begins.
    //get the question
  

    function getQuestion() {
        //Displaying the question  
        $("#question-area").html(questions[arrayIndex].question);
        
        //Dynamically create buttons for each of the potential answers
        for (var i = 0; i < questions[arrayIndex].answers.length; i++) {
            var a = $("<button>");
          // Adding a class of movie-btn to our button
          a.addClass("answers-btn");
          // Adding a data-attribute
          a.attr("data-name", questions[arrayIndex].answers[i]);
          // Providing the initial button text
          a.text(questions[arrayIndex].answers[i]);
          // Adding the button to the buttons-view div
          $("#answersarea").append(a);
        //$("#answersarea").append('<button  data-name=" ' + questions[arrayIndex].answers[i] + ' ">' + questions[arrayIndex].answers[i] + '</button>');
           

        }
        //checkAnswer();
       $("#answer-area").on("click", function(){
            
         //var correct= questions[arrayIndex].correctanswer;
           // if("data"
           // };
        });
    }
    getQuestion();

 //function checkAnswer() {
   //   $("#")

    //on click
    //Set three second timer to display answer result and gif
    //clearTimeOut(setTimeoutID);
    //setTimeoutID= setTImeout(displayQuestion, 3000)


    //create an if else statement
    //if clicked answer ==== correct answer
    //display a "you're correct" message and gif
    //add a point to the score

    //else if, if clicked answer does not === correct answer
    //disaplay a "you're wrong" message and gif
    //add a point to the wrong score
    
    //if there is no click, say "You're ran out of time" message and display the gif
    //add to the unanswered score unanswer++;
   //}
   

}

startGameButton();
