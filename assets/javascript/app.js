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