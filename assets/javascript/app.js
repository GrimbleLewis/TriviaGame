//create a start button that begins the game and starts the timer for questions
//create a function that displays the questions and possible answers on the screen and replaces previous question
//have able to track which answer the user clicks on
//create a total score to keep track of correct answers
//create a function that displays either the right or wrong answer image after user chooses an answer
//create a total score diplay at the end of the quiz with a restart button function



var intervalId;
var count = 0;
var correctAnswerImage = '<img src="../images/correct-answer.gif">'
var wrongAnswerImage =  '<img src="../images/wrong-answer.gif">'
var score = 0;


var questionObj = [{
    question: "What is the name of Leela's pet?",
    answers: ["Nobbler", "Nibbler", "Nubben", "Norman"],
    rightAnswer: 1
},
{
    question: "What was Fry's job in 1999?",
    answers: ["Pizza Delivery Boy", "Newspaper Delivery Boy", "Milkman", "Shoe Shine Boy"],
    rightAnswer: 0
},
{
    question: "What company does Dr.Farnsworth run?",
    answers: ["Space Express", "Earth Express", "Planet Express", "Federal Express"],
    rightAnswer: 2
},
{
    question: "What was Fry's bank account balance in 1999?",
    answers: ["33 Cents", "53 Cents", "73 Cents", "93 Cents"],
    rightAnswer: 3
},
{
    question: "What did the Professors smelloscope detect in space?",
    answers: ["A planet of cheese", "A comet", "A ball of garbage", "An alien ship"],
    rightAnswer: 2
},
{
    question: "What is Fry's favourite soft drink?",
    answers: ["Slurm", "Slop", "Glurm", "Gloop"],
    rightAnswer: 0
},
{
    question: "What is the name of Philip J. Frys older brother?",
    answers: ["Brannigan", "Darcy", "Florence", "Yancy"],
    rightAnswer: 3
},
{
    question: "What was top of the list of Benders 10 most commonly used words?",
    answers: ["Daffodil", "Pimpmobile", "Ass", "Chumpette"],
    rightAnswer: 2
}];

$(".answers-show").hide();
$("#restart-button").hide();
$("#start-button").click(displayQuestions);


function show(e){
    e.style.display = '';
}

function hide(e){
    e.style.display = 'none';
}

function displayQuestions(){

    $("#start-button").hide();
    $(".answers-show").show();
    $("#question-display").show();
    $("#question-display").html(questionObj[count].question);
    $("#answer-a").html(questionObj[count].answers[0]);
    $("#answer-b").html(questionObj[count].answers[1]);
    $("#answer-c").html(questionObj[count].answers[2]);
    $("#answer-d").html(questionObj[count].answers[3]);
   

};
    
    function checkAnswer(){

        nextQuestion();
        // var currentAnswer = $(".card-body")
        // console.log(currentAnswer)
        // if (currentAnswer == questionObj[count].rightAnswer){
        //     alert("yay")
        // }


        // for (i=0; i<questionObj[count].answers.length; i++){
           
        //     if (i === questionObj[count].rightAnswer + 1){
        //         break;}

        //         console.log(i)
        //         alert("yay");
        //     }
    


    }

$(".answer-button").click(checkAnswer)
    
    


function nextQuestion(){
    count++;
    if (count === questionObj.length){
        finalscore();
    } else {
    displayQuestions();
    }
}

function finalscore(){

    $("#start-button").hide();
    $(".answers-show").hide();
    $("#question-display").hide();
    $("#restart-button").show();

}

function resetGame (){
    score = 0;
    count = 0;
    $("#restart-button").hide();
    displayQuestions();
}

$("#restart-button").click(resetGame);