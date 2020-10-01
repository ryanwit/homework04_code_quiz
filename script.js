
var mainEl = document.getElementById("main");
var startScreen = document.getElementById("startScreen");
var startBtn = document.getElementById("startbtn");
var questionContainer = document.getElementById("questionContainer");
var questionTitle = document.getElementById("questionTitle");
var answerButton = document.getElementById("answerButton");

var timeEl = document.querySelector("time");
var index = 0;
var secondsLeft = 60;

// section for questions - input actual questions later 
var questions = [{
    title: "Question 1: What question do you have?",
    choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    answer: "Answer 1"
},{
    title: "Question 2: What question do you have?",
    choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    answer: "Answer 2" 
},{
    title: "Question 3: What question do you have?",
    choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    answer: "Answer 3"
},{
    title: "Question 4: What question do you have?",
    choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    answer: "Answer 4"
},{
    title: "Question 5: What question do you have?",
    choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    answer: "Answer 5"
}]

function timer() {
timerCountdown = setInterval(function(){
    countdown--;
    timeLeft.textContent = countdown + " seconds remaining";
    if (countdown === 0) {
        clearInterval(timerCountdown);
    }
}, 1000)
}

//a function that starts the quiz by removing the attribute "hidden"
function startQuiz() {
    startScreen.setAttribute("class", "hide")
    questionContainer.removeAttribute("class")
    // start timer here
    getQuestion();
}

//function to get questions 
function getQuestion() {
    var currentQuestion = questions [index]
    console.log(currentQuestion)
    questionTitle.textContent = currentQuestion.title
    answerButton.innerHTML = ""
    currentQuestion.choices.forEach(function(choice,i){
        console.log(choice,i) 
        var button = document.createElement("button")
        button.textContent = choice
        answerButton.appendChild(button)
        
    });
}


startBtn.onclick = startQuiz