const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

// variabile che serve per tenere il conto del numero della domanda
let questionNumber = 0;
let correctAnswers = 0;
let wrongAnswers = 0;


// aspetto il caricamento del documento e prendo la prima domanda dell'array delle domande
nextQuestion();
updateQuestionCounter();




//timer

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;
 
const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};
  
const TIME_LIMIT = 60;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;
  
document.getElementById("app").innerHTML = `
  <div class="base-timer">
    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          id="base-timer-path-remaining"
          stroke-dasharray="283"
          class="base-timer__path-remaining ${remainingPathColor}"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <div class="timer-label-container">
      <span>SECONDS</span>
      <span id="base-timer-label" class="base-timer__label">${formatTime(timeLeft)}</span>
      <span>REMAINING</span>
    </div>
  </div>
`;
  
startTimer();
  
function onTimesUp() {
  clearInterval(timerInterval);
  timePassed = 0;
  timeLeft = 30;
  document.getElementById("base-timer-path-remaining").classList.remove("red");
  document.getElementById("base-timer-path-remaining").classList.add("green");     
  nextQuestion();
  startTimer();
};
  
function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
    setCircleDasharray();
    setRemainingPathColor(timeLeft); 
    
    if (timeLeft === 0) {
      onTimesUp();
    }
    }, 1000);
};
  
function formatTime(time) {
  // const minutes = Math.floor(time / 60);
  let seconds = time;
  
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${seconds}`;
};
  
function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document.getElementById("base-timer-path-remaining").classList.remove(warning.color);
    document.getElementById("base-timer-path-remaining").classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document.getElementById("base-timer-path-remaining").classList.remove(info.color);
    document.getElementById("base-timer-path-remaining").classList.add(warning.color);
  }
}; 
  
function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
};
  
function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharray", circleDasharray);
};


//fine timer

/* 
    Questa funziona utilizza la varibiale questionNumber per estrarre dall'array 
    delle domanda la domanda e le relative risposte 
*/

function nextQuestion() {
  if (questionNumber < questions.length) {
    // legge e stampa su display la domanda
    let htmlAnswers = "";
    let htmlQuestion = `<div class="cnt-question">
                        ${questions[questionNumber].question}
                        </div>`;
  
    document.getElementById("cnt-question").innerHTML = htmlQuestion;
    switch (questions[questionNumber].type) {
      case "multiple":
        // ciclo for per leggere il contenuto delle risposte sbagliate
        questions[questionNumber].incorrect_answers.forEach((element) => {
          htmlAnswers = htmlAnswers + `<button class="incorrect">${element}</button> \n`;
        });
        // legge e stampa la risposta corretta
        htmlAnswers = htmlAnswers + `<button class="correct">${questions[questionNumber].correct_answer}</button> \n`;
        document.getElementById("cnt-answers").innerHTML = htmlAnswers;
        questionNumber += 1;
        console.log(questionNumber);
        break;
  
      case "boolean":
        // creo funzione per le booleane
        questions[questionNumber].incorrect_answers.forEach((element) => {
          htmlAnswers = htmlAnswers + `<button class="incorrect">${element}</button> \n`;
        });
        htmlAnswers = htmlAnswers +`<button class="correct">${questions[questionNumber].correct_answer}</button> \n`;
        document.getElementById("cnt-answers").innerHTML = htmlAnswers;
        questionNumber += 1;
        console.log(questionNumber);
        break;
      default:
        console.log("question type non gestito");
        break;
    }
  
    //aggiungo l'evento click ai bottoni contenente le domande errate
    let incorrects = document.querySelectorAll(".incorrect");
    incorrects.forEach((element) => {
      element.addEventListener("click", function () {
        wrongAnswers += 1;
        // nextQuestion();
        onTimesUp();
      });
    });
      
    //aggiungo l'evento click ai bottoni contenente le domande corrette
    let corrects = document.querySelectorAll(".correct");
  
    corrects.forEach((element) => {
      element.addEventListener("click", function () {
        console.log("Correct multiple");
        correctAnswers += 1;
        // nextQuestion();
        onTimesUp();
      });
    });
  
    updateQuestionCounter();
  } else {
    console.log("Domande terminate");
    console.log("domande errate:" + wrongAnswers);
    console.log("domande corrette:" + correctAnswers);
    document.getElementById("cnt-question").innerHTML = "";
    document.getElementById("cnt-answers").innerHTML = "";
  }
}
  
//funzione per tenere aggiornato il contatore delle domande
function updateQuestionCounter() {
  document.getElementsByClassName(
    "cnt-question-counter"
  )[0].innerHTML = ` QUESTION ${questionNumber} <span>/${questions.length} </span>`;
}