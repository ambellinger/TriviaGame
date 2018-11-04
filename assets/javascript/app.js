
// Create Lists of Questions and Answers in an array

var questions = [
    {
        question: "Which former player is affectionately dubbed 'Mr.Cub?'",
        answers: ["Ernie Banks", "Ron Santo", "Sammy Sosa", "Ryne Sandberg"],
        correctanswer: "Ernie Banks",
        gif: "https://media.giphy.com/media/2EOQCjrCSiHcs/giphy.gif",

    }, {
        question: "What historic stadium do the Cubs call home?",
        answers: ["Fenway Park", "Comiskey Park", "Wrigley Field", "Doublemint Dome"],
        correctanswer: "Wrigley Field",
        gif: "http://mlb.mlb.com/images/8/8/2/208022882/110316_wrigleyville_celebration_med_pk4e0iqm.gif",
    }, {
        question: "Which Cubs outfielder holds 5 Gold Gloves and counting?",
        answers: ["Albert Almora", "Dexter Fowler", "Kyle Schwarber", "Jason Heyward"],
        correctanswer: "Jason Heyward",
        gif: "https://media.giphy.com/media/ONYAPQhhTqvZTC7NU2/giphy.gif",
    }

    , {
        question: "Which Cubs player goes by the nickname 'El Mago'?",
        answers: ["Javier Báez", "Willson Contreras", "Criss Angel", "Albert Almora"],
        correctanswer: "Javier Báez",
        gif: "https://media.giphy.com/media/l0HlD1A4v1igVT4NW/giphy.gif",
    }

    , {
        question: "Which charitable Cubs player won the 2017 Roberto Clemente award?",
        answers: ["Jon Lester", "Anthony Rizzo", "Carl Edwards, Jr.", "Kris Bryant"],
        correctanswer: "Anthony Rizzo",
        gif: "https://media.giphy.com/media/J3WYE0PGN5H3O/giphy.gif",
    }

    , {
        question: "Prior to the 2016 World Series, when was the last time the Chicago Cubs won the championship?",
        answers: ["1930", "1945", "1902", "1908"],
        correctanswer: "1908",
        gif: "https://media.giphy.com/media/3o7TKVJrotqrMJdlao/giphy.gif",
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

            //Next Question
            //Go to next question by adding to the index
            arrayIndex++;
            //Clear the buttons
            $("#answersarea").empty();
            $("#question-area").empty();
            if (arrayIndex === 6) {
                $("#answersarea").html("<h2>Final Scores</h2><p>Correct:" + correctanswer + "</p> <p>Incorrect: " + incorrectAnswer + "</p> <p>Unanswered: " + unanswered + "</p>");
                $("#timer").hide();
                $("#answersarea").append("<button id=restart > Restart </button>")
                $("#restart").on("click", function () {
                    restart()
                    
                }
                
                )
            }


            //Retrieve question by calling the getQuestion function
            getQuestion()
            countdown = 31;
            questionTime()
        }
    }

    function stop() {
        clearInterval(intervalId);
    }


    //get the question
    function getQuestion() {

        //Time begsins
        questionTime();

        //Dynamically create buttons for each of the potential answers
        for (var i = 0; i < questions[arrayIndex].answers.length; i++) {
            //Displaying the question 
            $("#question-area").html(questions[arrayIndex].question);
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
            if (arrayIndex != 6 && checkAnswer === questions[arrayIndex].correctanswer) {
                //display a "you're correct" message and gif
                //add a point to the score
                correctanswer++;

                //Display correct screen with gifs
                $("#question-area").html("That's right! " + questions[arrayIndex].correctanswer + " is the correct answer!");
                $("#answersarea").html("<img src='" + questions[arrayIndex].gif + "' alt='gif'  />");
                //Hide the timer
                $("#timer").hide();

                //Display correct screen for 3 seconds
                threeSecondalert = setTimeout(function () {
                    //Next Question
                    //Go to next question by adding to the index
                    arrayIndex++;
                    //Clear the buttons area so that the buttons don't stack on each other
                    $("#answersarea").empty();
                    $("#question-area").empty();
                    if (arrayIndex === 6) {
                        $("#answersarea").html("<h2>Final Scores</h2><p>Correct:" + correctanswer + "</p> <p>Incorrect: " + incorrectAnswer + "</p> <p>Unanswered: " + unanswered + "</p>");
                        $("#timer").hide();
                        $("#answersarea").append("<button id=restart > Restart </button>")
                        $("#restart").on("click", function () {
                            restart()
                            
                        }
                        
                        )
                    }
                    //Retrieve question by calling the getQuestion function
                    getQuestion()
                    //restart the timer
                    questionTime()
                    //show the timer
                    $("#timer").show();
                    //return it to it's original time.
                    countdown = 31;



                }, 4000);

               

                //else if, if clicked answer does not === correct answer
            } else if (arrayIndex != 6 && checkAnswer !== questions[arrayIndex].correctanswer) {
                //disaplay a "you're wrong" message and gif
                //add a point to the wrong score
                incorrectAnswer++;
                //Display incorrect screen with gifs
                $("#question-area").html("Sorry! " + questions[arrayIndex].correctanswer + " is the correct answer!");
                $("#answersarea").html("<img src='" + questions[arrayIndex].gif + "' alt='gif'  />");
                //Hide the timer
                $("#timer").hide();

                //Display correct screen for 3 seconds
                threeSecondalert = setTimeout(function () {
                    //Next Question
                    //Go to next question by adding to the index
                    arrayIndex++;
                    //Clear the buttons area so that the buttons don't stack on each other
                    $("#answersarea").empty();
                    $("#question-area").empty();
                    if (arrayIndex === 6) {
                        $("#answersarea").html("<h2>Final Scores</h2><p>Correct:" + correctanswer + "</p> <p>Incorrect: " + incorrectAnswer + "</p> <p>Unanswered: " + unanswered + "</p>");
                        $("#timer").hide();
                        $("#answersarea").append("<button id=restart >Restart</button>")

                        $("#restart").on("click", function () {
                            restart()
                            
                        }
                        
                        )
                    }
                    //Retrieve question by calling the getQuestion function
                    getQuestion()
                    //restart the timer
                    questionTime()
                    //show the timer
                    $("#timer").show();
                    //return it to it's original time.
                    countdown = 31;

                }, 4000);


            }
        });

       

    }
    getQuestion();

    function restart(){
        correctanswer = 0;
        unanswered = 0;
        incorrectAnswer = 0;
        countdown = 31;
        arrayIndex = 0;
        $("#answersarea").empty();
        $("#question-area").empty();
        getQuestion()
       
   }
}

 


startGameButton();

//Errors remaining
//The 3 second page does not appear if the question goes unanswered. 
//CSS is also uglayyy