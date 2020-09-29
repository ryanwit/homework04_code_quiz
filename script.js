var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var startScreen = document.getElementById("startScreen");
var startBtn = document.getElementById("startbtn");
var questionContainer = document.getElementById("questionContainer");
var questionTitle = document.getElementById("questionTitle");
var answerButton = document.getElementById("answerButton");
var index = 0;
var secondsLeft = 60;

var questions = [{
    title: "Question 1: What question do you have?",
    choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    answer: "Answer 2"
},{
    title: "Question 2: What question do you have?",
    choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    answer: "Answer 2" 
},{
    title: "Question 3: What question do you have?",
    choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    answer: "Answer 2"
},{
    title: "Question 4: What question do you have?",
    choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    answer: "Answer 2"
},{
    title: "Question 5: What question do you have?",
    choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    answer: "Answer 2"
}]
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left till end";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function startQuiz() {
    startScreen.setAttribute("class", "hide")
    questionContainer.removeAttribute("class")
    // start timer here
    getQuestion();
}

function getQuestion() {
    var currentQuestion = questions [index]
    questionTitle.textContent = currentQuestion.title
    answerButton.innerHTML = ""
    currentQuestion.choices.forEach(function(choice,i){
        console.log(choice,i) 
    })
}


startBtn.onclick = startQuiz