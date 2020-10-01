
var mainEl = document.getElementById("main");
var startScreen = document.getElementById("startScreen");
var startBtn = document.getElementById("startbtn");
var questionContainer = document.getElementById("questionContainer");
var questionTitle = document.getElementById("questionTitle");
var answerButton = document.getElementById("answerButton");

var timeEl = document.getElementById("time");
var index = 0;
var secondsLeft = 60;

// section for questions - input actual questions later 
var questions = [{
    title: "Question 1: What attribute is used to decorate content",
    choices: ["style", "css", "html", "body"],
    answer: "style"
},{
    title: "Question 2: HTML tag not included in HEAD Tag?",
    choices: ["link", "header", "meta", "title"],
    answer: "header" 
},{
    title: "Question 3: What is the largest header tag? ",
    choices: ["h6", "h3", "h1", "h10"],
    answer: "h1"
},{
    title: "Question 4: What does CSS stand for?",
    choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    answer: "Answer 4"
},{
    title: "Question 5: What question do you have?",
    choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    answer: "Answer 1"
}]

// Timer function
function startCountdown() {
    var countDown = setInterval (function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining!"
        if (secondsLeft === 0) {
            clearInterval(countDown);
        }
    }, 1000)
    
    
 
}


//a function that starts the quiz by removing the attribute "hidden"
function startQuiz() {
    startScreen.setAttribute("class", "hide")
    questionContainer.removeAttribute("class")
    // start timer here
    startCountdown();
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
        button.setAttribute("value", choice);
        button.textContent = choice;
        button.onclick = answerQuestion;
        answerButton.appendChild(button);
        
    });
}

function answerQuestion(event) {
    var userSelection = event.target.value
    var correctAnswer = questions[index].answer

    if(userSelection === correctAnswer) {
        alert("correct answer")
    } else {
        alert("incorrect")
        secondsLeft -= 10
    }
    index +=1    
    getQuestion();   
} 


startBtn.onclick = startQuiz