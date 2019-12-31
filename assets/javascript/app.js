//create a start button that begins the game and starts the timer for questions
//create a function that displays the questions and possible answers on the screen and replaces previous question
//be able to track which answer the user clicks on
//create a total score to keep track of correct answers
//create a function that displays either the right or wrong answer image after user chooses an answer
//create a total score diplay at the end of the quiz with a restart button function
$(document).ready(function() {


var intervalId;
//count will be incremented and display the questions/answer choices for the current object in the array
var count = 0;
var correctAnswerImage = "<img src='assets/images/correct-answer.gif'/>"
var wrongAnswerImage =  "<img src='assets/images/wrong-answer.gif'/>"
var correctAnswerScore = 0;
var wrongAnswerScore = 0;
var selectedAnswer;
var timer = 15;
var isTimerRunning = false;





//my array of objects. each object being a question,answer choices, and correct answer
var questionObj = [{
    question: "What is the name of Leela's pet?",
    answers: ["Nobbler", "Nibbler", "Nubben", "Norman"],
    rightAnswer: "B"
},
{
    question: "What was Fry's job in 1999?",
    answers: ["Pizza Delivery Boy", "Newspaper Delivery Boy", "Milkman", "Shoe Shine Boy"],
    rightAnswer: "A"
},
{
    question: "What company does Dr.Farnsworth run?",
    answers: ["Space Express", "Earth Express", "Planet Express", "Federal Express"],
    rightAnswer: "C"
},
{
    question: "What was Fry's bank account balance in 1999?",
    answers: ["33 Cents", "53 Cents", "73 Cents", "93 Cents"],
    rightAnswer: "D"
},
{
    question: "What did the Professors smelloscope detect in space?",
    answers: ["A planet of cheese", "A comet", "A ball of garbage", "An alien ship"],
    rightAnswer: "C"
},
{
    question: "What is Fry's favourite soft drink?",
    answers: ["Slurm", "Slop", "Glurm", "Gloop"],
    rightAnswer: "A"
},
{
    question: "What is the name of Philip J. Frys older brother?",
    answers: ["Brannigan", "Darcy", "Florence", "Yancy"],
    rightAnswer: "D"
},
{
    question: "What was top of the list of Benders 10 most commonly used words?",
    answers: ["Daffodil", "Pimpmobile", "Ass", "Chumpette"],
    rightAnswer: "C"
}];


//initally hides the answer boxes,restart button, and timer
$(".answers-show").hide();
$("#restart-button").hide();
$("#timer-display").hide();
$("#start-button").click(displayQuestions);


//pulls information from the object and displays the question,timer, and answers
function displayQuestions(){
    if(!isTimerRunning){
        intervalId = setInterval(questionTimer, 1000);
        isTimerRunning = true;
        $("#start-button").hide();
        $(".answers-show").show();
        $("#question-display").show();
        $("#timer-display").show();
        $("#question-display").html(questionObj[count].question);
        $("#answer-a").html(`A) ${questionObj[count].answers[0]}`);
        $("#answer-b").html(`B) ${questionObj[count].answers[1]}`);
        $("#answer-c").html(`C) ${questionObj[count].answers[2]}`);
        $("#answer-d").html(`D) ${questionObj[count].answers[3]}`);

    }
};

//when one of the 4 answer buttons are clicked the checkAnswer function runs
$(".answer-button").click(checkAnswer)

//this function checks which button the user clicked on and compares its value of selectedAnswer to the current
//questions right answer to see if the user is correct or incorrect.
function checkAnswer(event){

    if(isTimerRunning){
    clearInterval(intervalId);
    isTimerRunning = false;

        if (event.target.id === "answer-a"){
            selectedAnswer = "A";
        } else if (event.target.id === "answer-b"){
            selectedAnswer = "B";
        } else if (event.target.id === "answer-c"){
            selectedAnswer = "C";
        } else if (event.target.id === "answer-d"){
            selectedAnswer = "D";
        }
        

        if (selectedAnswer === questionObj[count].rightAnswer){
            correctAnswerScore++;
            $("#timer-display").hide();
            $("#correct-image-display").show();
            $("#correct-image-display").html(correctAnswerImage);
            $("#correct-image-display").append(`<h2>Correct!</h2>`)
            setTimeout(nextQuestion, 3000);

            
        } else {
            wrongAnswerScore++;
            $("#timer-display").hide();
            $("#incorrect-image-display").show();
            $("#incorrect-image-display").html(wrongAnswerImage);
            $("#incorrect-image-display").append(`<h2>Wrong, the correct answer was ${questionObj[count].rightAnswer}</h2>`)
            setTimeout(nextQuestion, 3000);
        }
    }
}

//a 15 second countdown timer per question that counts the answer as wrong if the timer expires   
function questionTimer() {
    $("#timer-display").html(`Time Left to Answer: ${timer}`);
    timer--;
    if(timer < 0){
    clearInterval(intervalId);
    isTimerRunning = false;
    
      wrongAnswerScore++;
      $("#timer-display").hide();
      $("#incorrect-image-display").show();
      $("#incorrect-image-display").html(wrongAnswerImage);
      $("#incorrect-image-display").append(`<h2>Wrong, the correct Answer was ${questionObj[count].rightAnswer}`)
      setTimeout(nextQuestion, 5000);
    }
}

//this function increased the count which pushs the next array in the object onto the screen
//(displays the next question and possible answers)
function nextQuestion(){

    clearInterval(intervalId);
    isTimerRunning = false;
    $("#correct-image-display").hide();
    $("#incorrect-image-display").hide();
    $("#timer-display").show();
    count++;
    timer = 15;
    if (count === questionObj.length){
        finalscore();
    } else {
    displayQuestions();
    }

}


//displays only the restart button and your total wrong and right answers score
function finalscore(){

    $("#start-button").hide();
    $(".answers-show").hide();
    $("#question-display").hide();
    $("#timer-display").hide();
    $("#restart-button").show();
    $("#correct-answers-score").show().html(`You got ${correctAnswerScore} questions correct.`);
    $("#incorrect-answers-score").show().html(`You got ${wrongAnswerScore} questions incorrect.`);
    


}
// this function resets the game as is you had already pressed the start button
function resetGame (){
    if (!isTimerRunning){
    clearInterval(intervalId);
    correctAnswerScore = 0;
    wrongAnswerScore = 0;
    count = 0;
    $("#restart-button").hide();
    $("#correct-answers-score").hide()
    $("#incorrect-answers-score").hide()
    displayQuestions();
    isTimerRunning = true;
    }
    
}
// runs the restartGame function is the restart button is clicked
$("#restart-button").click(resetGame);


var audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "assets/images/Connie-Francis_If_it_takes_forever.mp3");

    

    $(".theme-button").on("click", function() {
        audioElement.volume = 0.1;
        var isPlaying = audioElement.currentTime > 0 && !audioElement.paused && !audioElement.ended && audioElement.readyState > 2;
        if (!isPlaying) {
        audioElement.play();
        }
    });
    $(".pause-button").on("click", function() {
        audioElement.pause();
    });

});