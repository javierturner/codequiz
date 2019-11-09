var questions = [
    {
        title: "Which is the correct tag to use when entering javascript?",
        choices: ["<js>", "<javascript>", "<script>", "<scripts>"],
        answer: "<script>"
    },

    {
        title: "What is the term to describe the area of the web page that is viewable at any given time?",
        choices: ["viewport", "screen", "image area", "page area"],
        answer: "viewport",
    },

    {
        title: "What does DOM stand for?",
        choices: ["Document Orienting Module", "Document Object Model", "Document Orienting Model", "Document Object Module"],
        answer: "Document Object Model",
    },

    {
        title: "Which of the following is NOT a logical operator in JavaScript?",
        choices: ["!", "||", "*", "&&"],
        answer: "*",
    },

    {
        title: "What is the correct syntax for selecting a div with the id of 'bags'?",
        choices: ['document.getElementById("bags")','document.getElementByClassName("bags")', 'document.getElement("bags")', 'document.querySelectorAll("bags")'],
        answer: 'document.getElementById("bags")',
    }

]

var startQuiz = document.getElementById("startQuiz");
var begin = document.getElementById("begin");

//questions
var questionsBox = document.getElementById("questionsBox");
var titles = document.getElementById("titles");
var choiceA = document.getElementById("buttonA");
var choiceB = document.getElementById("buttonB");
var choiceC = document.getElementById("buttonC");
var choiceD = document.getElementById("buttonD");

//make questions invisible when page first loads
questionsBox.style.visibility = "hidden";


var timer = 76;

//click start button, then questions will appear and timer will start
startQuiz.addEventListener("click", function () {
    begin.style.display = "none";
    timeLeft();
    promptQuestions();
});


//function to generate questions
function promptQuestions() {
    questionsBox.style.visibility = "visible";
    titles.textContent = questions[0].title;
    choiceA.textContent = questions[0].choices[0];
    choiceB.textContent = questions[0].choices[1];
    choiceC.textContent = questions[0].choices[2];
    choiceD.textContent = questions[0].choices[3];
}

//function for timer
function timeLeft() {
    var time = document.getElementById("timer");
     setInterval(function () {
        timer--;
        time.textContent = ("Time: " + timer);
    }, 1000)
}


