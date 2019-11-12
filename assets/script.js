var startQuiz = document.getElementById("startQuiz");
var begin = document.getElementById("begin");
var enterYourScore = document.getElementById("enterYourScore")
var submit = document.getElementById("submit");
var name = document.getElementById("yourName");
var pennedHighScores = document.getElementById("pennedHighScores");

//questions
var questionsBox = document.getElementById("questionsBox");
var titles = document.getElementById("titles");
var choiceA = document.getElementById("buttonA");
var choiceB = document.getElementById("buttonB");
var choiceC = document.getElementById("buttonC");
var choiceD = document.getElementById("buttonD");
var buttonEl = document.querySelector("#choice");

//score
var nameInput = document.getElementById("yourName");
var score = document.getElementById("yourScore");
var nameList = document.getElementById("nameList");
var names = [];
var scores = [];
var submit = document.getElementById("submit");

//make questions invisible when page first loads
questionsBox.style.display = "none";
enterYourScore.style.display = "none";
pennedHighScores.style.display = "none";


//Local Storage
function init () {
    //grabbing stored scores and name from local storage
    //parsing the JSON string to an object
    var storedNames = JSON.stringify(localStorage.getItem("names"));
    var storedScores = JSON.stringify(localStorage.getItem("scores"));

    if (storedNames !== null) {
        names = storedNames;
    }

    renderNames();
    renderScores();
}

function storeNames() {
    //stringify and set "names" key in localstorage to names array
    localStorage.setItem("names", JSON.stringify(names));
    localStorage.setItem("scores", JSON.stringify(scores));
}

//when submit button is pressed
submit.addEventListener("click", function(event) {
    event.preventDefault();

    var nameText = nameInput.value.trim();
    var scoreText = score.value.trim();

    if (nameInput === "") {
        return;
    }

    names.push(nameText);
    nameInput.value="";

    scores.push(scoreText);
    score.value="";

    storeNames();
    renderNames();
})

function renderNames() {
    nameList.innerHTML = "";

    for (var i = 0; i < names.length; i++) {
        var name = names[i];

        var li = document.createElement("li");
        li.textContent = nameg;
        li.setAttribute("data-index", i);

        nameList.appendChild(li);
    }
}







//click start button, then questions will appear and timer will start
startQuiz.addEventListener("click", function () {
    begin.style.display = "none";
    timeLeft();
    promptQuestions();
});

i = 0;
//function to generate questions
function promptQuestions(event) {
    if (i < questions.length) {
    questionsBox.style.display = "block";
    titles.textContent = questions[i].title;
    choiceA.textContent = questions[i].choices[0];
    choiceB.textContent = questions[i].choices[1];
    choiceC.textContent = questions[i].choices[2];
    choiceD.textContent = questions[i].choices[3];
    }

    else {
        // timeLeft.pause;
        alert("You're all done!")
        enterScore();
    }
}

function nextQuestion (event) {
    if (i < questions.length) {
        i++;
        // promptQuestions();
    }
}
//function for timer
var timer = 5;
function timeLeft() {
    var time = document.getElementById("timer");
    var outOfTime = setInterval(function () {
        timer--;
        time.textContent = ("Time: " + timer);

        if (timer === 0) {
            clearInterval(outOfTime)
            alert('You are out of time! Click "OK" to enter your high score.');
            enterScore();
        }

    }, 1000)
}

//right/wrong answers
questionsBox.addEventListener("click", function (event) {
    var element = event.target;

    if (element.matches("button") === true) {
        var choice = element.textContent
        console.log(choice);
        // promptQuestions();
        

        if (choice == questions[i].answer) {
            // alert("Correct!");
            timer = timer + 10;
            // promptQuestions();
            nextQuestion();
        }
        else {
            // alert("incorrect");
            timer = timer - 5;
            // promptQuestions();
            nextQuestion();
        }

        promptQuestions();
    }
    

})



function enterScore() {
    questionsBox.style.display = "none";
    enterYourScore.style.display = "block";
    document.getElementById("yourScore").value = timer;
}

// function submitScore() {
//     localStorage.setItem("user", user);
//     var user = {
//         username: name,
//         highScore: timer,
//     };
//     console.log(user);

// };

function highScoreBtn() {
    begin.style.display = "none";
    enterYourScore.style.display = "none";
    pennedHighScores.style.display = "block";
}

