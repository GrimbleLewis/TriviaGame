//create a start button that begins the game and starts the timer for questions
//create a function that displays the questions and possible answers on the screen and replaces previous question
//have able to track which answer the user clicks on
//create a total score to keep track of correct answers
//create a function that displays either the right or wrong answer image after user chooses an answer
//create a total score diplay at the end of the quiz with a restart button function



var intervalId;
var correctAnswerImage = '<img src="../images/correct-answer.gif">'
var wrongAnswerImage =  '<img src="../images/wrong-answer.gif">'


var questions = [
    "What is the name of Leela's pet?",
    "What was Fry's job in 1999?",
    "What company does Dr.Farnsworth run?",
    "What was Fry's bank account balance in 1999?",
    "What did the Professors smelloscope detect in space?",
    "What is Fry's favourite soft drink?",
    "What is the name of Philip J. Frys older brother?",
    "What was top of the list of Benders 10 most commonly used words?"
];

var answers = [
    ["Nobbler", "Nibbler", "Nubben", "Norman"],
    ["Pizza Delivery Boy", "Newspaper Delivery Boy", "Milkman", "Shoe Shine Boy"],
    ["Space Express", "Earth Express", "Planet Express", "Federal Express"],
    ["33 Cents", "53 Cents", "73 Cents", "93 Cents"],
    ["A planet of cheese", "A comet", "A ball of garbage", "An alien ship"],
    ["Slurm", "Slop", "Glurm", "Gloop"],
    ["Brannigan", "Darcy", "Florence", "Yancy"],
    ["Daffodil", "Pimpmobile", "Ass", "Chumpette"]
];

var correctAnswers = [1,0,2,3,2,0,3,2];


$("#start-button").click(displayQuestions);




function displayQuestions(){

    $("#start-button").hide();
    for (q=0; q<=questions.length; q++){
    $("#question-display").text(questions[q])
    };
    var printArray = function(answers) {
        if ( typeof(answers) == "object") {
            for (var a = 0; a < answers.length; a++) {
         $("#answers-diplay").text(printArray(answers[a]));
            }
        }
    }
    
    console.log(answers)
};


    


    // for (a=0; a<=answers.length; a++){
    // $("#answers-diplay").text(answers[a])
    // };
    // console.log(answers)


