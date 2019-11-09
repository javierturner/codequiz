var startQuiz = document.getElementById("startQuiz");
var begin = document.getElementById("begin");

//questions
var questionsBox = document.getElementById("questionsBox");
var titles = document.getElementById("titles");
var choiceA = document.getElementById("buttonA");
var choiceB = document.getElementById("buttonB");
var choiceC = document.getElementById("buttonC");
var choiceD = document.getElementById("buttonD");
var buttonEl = document.querySelector("#choice");

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
    titles.textContent = questions[i].title;
    choiceA.textContent = questions[i].choices[0];
    choiceB.textContent = questions[i].choices[1];
    choiceC.textContent = questions[i].choices[2];
    choiceD.textContent = questions[i].choices[3];  
}


//function for timer
function timeLeft() {
    var time = document.getElementById("timer");
     setInterval(function () {
        timer--;
        time.textContent = ("Time: " + timer);
    }, 1000)
}

i = 0
// buttonEl.addEventListener()
function nextQuestion(event){
    var answer = buttonEl.textContent;
    console.log(answer);
    if (i < questions.length) {
        i++;
        promptQuestions()
    }
}

