
var mainEl = document.getElementById("main");
var startScreen = document.getElementById("startScreen");
var startBtn = document.getElementById("startbtn");
var questionContainer = document.getElementById("questionContainer");
var questionTitle = document.getElementById("questionTitle");
var answerButton = document.getElementById("answerButton");
var highScore = document.getElementById("highScore");
var highScoreButton = document.getElementById("highScoreButton");
var highScoreContainer = document.getElementById("highScoreContainer");
var initials = document.getElementById("initials");
var finalScore = document.getElementById("score")
var countDown;
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
    choices: ["Cool Style Sheets", "Color Style Sheets", "Cascading Style Software", "Cascading Style Sheets"],
    answer: "Cascading Style Sheets"
},{
    title: "Question 5: What does HTML Stand for?",
    choices: ["Hyper Text Markup Language", "Hyper Technology Markup Language", "Hyper Telephone Machine Language", "Hollow Text Markup Language"],
    answer: "Hyper Text Markup Language"
}]

// Timer function
function startCountdown() {
        countDown = setInterval (function() {
        secondsLeft--;
        timeEl.textContent = "Timer:  " + secondsLeft + " seconds remaining!"
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
    console.log(userSelection)
    var correctAnswer = questions[index].answer

    if(userSelection === correctAnswer) {
        alert("Correct!")
    } else {
        alert("Wrong Answer minus 10 seconds")
        secondsLeft -= 10
    } 
    
    index +=1    
    // getQuestion();
        if(index === questions.length) {
            quizEnd();
        } else {
            getQuestion();
        }
} 

function quizEnd() {
    clearInterval(countDown);
    highScoreContainer.setAttribute("class", "show");
    finalScore.textContent = secondsLeft;
    questionContainer.setAttribute("class", "hide");
    highScore();
}

function highScore() {
    var initials = initials.value.trim()
    var highscores = JSON.parse(localStorage.getItem("highscore")) || []

    if(initials !== "") 
    { var newScore = {
        score : secondsLeft,
        initials : initials,
    }
    highscores.push(newScore);
        localStorage.setItem("highscores", JSON.stringify(highscores))
    }
}

startBtn.onclick = startQuiz;