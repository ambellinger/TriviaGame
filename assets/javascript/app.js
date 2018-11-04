
// Create Lists of Questions and Answers in an array

var questions = [
    {
        question: "Question 1",
        answers: ["Option A", "Option B", "Option C", "Option D"],
        correctanswer: "Option A",
        gif: "assets/images/belding.gif",

    }, {
        question: "Question 2",
        answers: ["Option A", "Option B", "Option C", "Option D"],
        correctanswer: "Option C",
        gif: "assets/images/bulls.gif",
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
var correctanswer = 0;
var unanswered = 0;
var incorrectAnswer = 0;
var arrayIndex = 0;
var countdown = 31;
var checkAnswer;
//var threeSecondalert;


// Startgame. Game can't start until the start game button is clicked.
function startGameButton() {
    $("#start").on("click", function () {
        $("#start").remove();
        startgame();
    });
}


function startgame() {

    //Game begins.

    function questionTime() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        countdown--;
        $("#timer").html("Seconds Left: " + countdown);

        if (countdown === 0) {
            stop();
            unanswered++;
            console.log(countdown);
            endgame();
            //Next Question
            //Go to next question by adding to the index
            arrayIndex++;
            //Clear the buttons
            $("#answersarea").empty();
            //Retrieve question by calling the getQuestion function
            getQuestion()
            countdown = 31;
            questionTime()
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    function endgame() {
        if (arrayIndex > questions[arrayIndex]) {
            $("#question-area").html("Game Over");
            alert("game over");
        }
    }

    //get the question
    function getQuestion() {

        //Time begsins
        questionTime();

        //Displaying the question 
        $("#question-area").html(questions[arrayIndex].question);

        //Dynamically create buttons for each of the potential answers
        for (var i = 0; i < questions[arrayIndex].answers.length; i++) {
            var button = $("<button>");
            // Adding a class of answers to our button
            button.addClass("answers-btn");
            // Adding a data-attribute
            button.attr("data-name", questions[arrayIndex].answers[i]);
            // Providing the initial button text
            button.text(questions[arrayIndex].answers[i]);
            // Adding the button to the buttons-view div
            $("#answersarea").append(button);

        }
        //checkAnswer();
        $(".answers-btn").on("click", function () {
            checkAnswer = $(this).attr("data-name");
            //create an if else statement
            //if clicked answer ==== correct answer
            //display a "you're correct" message and gif
            //add a point to the score
            if (checkAnswer === questions[arrayIndex].correctanswer) {
                //display a "you're correct" message and gif
                //add a point to the score
                correctanswer++;

                //Display correct screen with gifs
                $("#question-area").html("That's correct!" + questions[arrayIndex].correctanswer + " is the correct answer!");
                $("#answersarea").html("<img src='" + questions[arrayIndex].gif + "' alt='gif'  />");
                //Hide the timer
                $("#timer").hide();

                //Display correct screen for 3 seconds
                threeSecondalert = setTimeout(function () {
                    endgame();
                    //Next Question
                    //Go to next question by adding to the index
                    arrayIndex++;
                    //Clear the buttons area so that the buttons don't stack on each other
                    $("#answersarea").empty();
                    //Retrieve question by calling the getQuestion function
                    getQuestion()
                    //restart the timer
                    questionTime()
                    //show the timer
                    $("#timer").show();
                    //return it to it's original time.
                    countdown = 31;
                    


                }, 3000);

                //else if, if clicked answer does not === correct answer
            } else if (checkAnswer !== questions[arrayIndex].correctanswer) {
                //disaplay a "you're wrong" message and gif
                //add a point to the wrong score
                incorrectAnswer++;
                //Display incorrect screen with gifs
                $("#question-area").html("Sorry! That's incorrect. " + questions[arrayIndex].correctanswer + " is the correct answer!");
                $("#answersarea").html("gif here");
                //Hide the timer
                $("#timer").hide();

                //Display correct screen for 3 seconds
                threeSecondalert = setTimeout(function () {
                    endgame();
                    //Next Question
                    //Go to next question by adding to the index
                    arrayIndex++;
                    //Clear the buttons area so that the buttons don't stack on each other
                    $("#answersarea").empty();
                    //Retrieve question by calling the getQuestion function
                    getQuestion()
                    //restart the timer
                    questionTime()
                    //show the timer
                    $("#timer").show();
                    //return it to it's original time.
                    countdown = 31;
                }, 3000);


            }

        });


    }
    getQuestion();
}
startGameButton();
