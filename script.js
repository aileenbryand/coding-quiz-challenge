 //Questions

var Questions = [
    {
      question: "Commonly used data types DO NOT include:",
      answers: {
        1: "strings",
        2: "booleans",
        3: "alerts",
        4: "numbers",
      },
      correctAnswer: "alerts",
    },
  
    {
      question:
        "The condition in an if/else statement is enclosed within ______.",
      answers: {
        1: "quotes",
        2: "curly brackets",
        3: "parenthesis",
        4: "square brackets",
      },
      correctAnswer: "curly brackets",
    },
  
    {
      question: "Arrays in JavaScript can be used to store ________.",
      answers: {
        1: "numbers and strings",
        2: "other arrays",
        3: "booleans",
        4: "all of the above",
      },
      correctAnswer: "all of the above",
    },
  
    {
      question:
        "String values must be enclosed within ____ when being assigned to variables.",
      answers: {
        1: "commas",
        2: "curly brackets",
        3: "quotes",
        4: "parenthesis",
      },
      correctAnswer: "quotes",
    },
  
    {
      question:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      answers: {
        1: "JavaScript",
        2: "terminal/bash",
        3: "for loops",
        4: "console.log",
      },
      correctAnswer: "console.log",
    },
  ];


  //variables
var questionDiv = document.getElementById('question')


var answers = document.getElementById('answers')
var startQuizEl = document.getElementById('start-quiz')
var initials = document.getElementById('initials')
var timerEl = document.getElementById("countdown");
var score = document.getElementById("score");
var submit = document.getElementById("submit-button");
var highscores = document.getElementById("highscores-link");
var timeLeft = 60;

function countdown () {
  // put the necessary code for counting down
  setInterval(printTimeLeft, 1000)
  //
}

function printTimeLeft () { 
  timeLeft = timeLeft - 1;
  timerEl.textContent = timeLeft;
}

  //event listener 

  function beginQuiz (){
    // questionDiv.textContent = "Hello there"
    
      countdown ();
      // showQuestions(questions[0]);
  
   }

 startQuizEl.addEventListener("click", beginQuiz)


 // display questions

 function displayQuestions() {
  
 var questionTitle = document.createElement("h4");
  var answerList = document.createElement("ul");
  var answerItem1 = document.createElement("li");
  var answerItem2 = document.createElement("li");
  var answerItem3 = document.createElement("li");
  var answerItem4 = document.createElement("li");

  questionTitle.textContent = activeQuestion.question;
  answerOne.textContent = activeQuestion.answers[1];
  answerTwo.textContent = activeQuestion.answers[2];
  answerThree.textContent = activeQuestion.answers[3];
  answerFour.textContent = activeQuestion.answers[4];

  answerList.append(answerItem1);
  answerList.append(answerItem2);
  answerList.append(answerItem3);
  answerList.append(answerItem4);
  questions.append(questionTitle);
  questions.append(answerList);
 }

  










































//code quiz js


//landing page with start button
//when start button is clicked, remove welcome msg abd append question 1

    //add event.litener
        //activity 12
//start timer
//user answers questions-read chosen elements, data value, compare to answer key
//iterate (for-loop to display questions
//if correct, next question
//if incorrect, sbstract 10 seconds from timer)
//end of quiz
    //add up user score
    //display input
    //second html and siplay username and score-- read object from local storage