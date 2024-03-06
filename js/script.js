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
        question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
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
        question: "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What is the most preferred image format used for logos in the Wikimedia database?",
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
        question: "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
          "Ice Cream Sandwich",
          "Jelly Bean",
          "Marshmallow",
        ],
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
        question: "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
    },
];


// variabile che serve per tenere il conto del numero della domanda
let questionNumber = 0;

// Array domande corrects = 1 e incorrects = 0
let answers = [];

document.addEventListener("DOMContentLoaded", () => {
    // aspetto il caricamento del documento e prendo la prima domanda dell'array delle domande
    nextQuestion();
    updateQuestionCounter();
});

    /* 
        Questa funziona utilizza la varibiale questionNumber per estrarre dall'array 
        delle domanda la domanda e le relative risposte 
    */
function nextQuestion() {
    if (questionNumber < questions.length ) {
        // legge e stampa su display la domanda 
        let htmlAnswers = "";
        let htmlQuestion = `<div class="cnt-question">
                        ${questions[questionNumber].question}
                        </div>`;
                        
        document.getElementById("cnt-question").innerHTML = htmlQuestion;
        console.log(document.getElementById("cnt-answers"))

        console.log(questions[questionNumber].type);
        switch(questions[questionNumber].type) {
            
            case "multiple":
                // ciclo di for per leggere il contenuto delle risposte sbagliate
                console.log(questionNumber);
                questions[questionNumber].incorrect_answers.forEach(element => {
                    htmlAnswers = htmlAnswers + `<button class="incorrect">${element}</button> \n`;
                });

                // legge e stampa la risposta corretta
                htmlAnswers = htmlAnswers + `<button class="correct">${questions[questionNumber].correct_answer}</button> \n`;

                console.log(htmlAnswers);
                console.log(document.getElementById("cnt-answers"));
                document.getElementById("cnt-answers").innerHTML = htmlAnswers;
                

                // domande errate
                let incorrects = document.querySelectorAll(".incorrect");
                
                incorrects.forEach(element => {

                    element.addEventListener("click", function() {
                        console.log("Incorrects multiple");
                        answers.push(0);
                        nextQuestion();
                    })
                });

                // domande corrette 
                let corrects = document.querySelectorAll(".correct");
                
                corrects.forEach(element => {
                
                    element.addEventListener("click", function() {
                        console.log("Correct multiple");
                        answers.push(1);
                        nextQuestion();
                    })
                });

                questionNumber += 1;
                
                break;

            case "boolean":
                console.log(questionNumber);
                console.log("sono in boolean");

                // creo funzione per le booleane
                questions[questionNumber].incorrect_answers.forEach(element => {
                    htmlAnswers = htmlAnswers + `<button class="boolIncorrect">${element}</button> \n`;
                });

                htmlAnswers = htmlAnswers + `<button class="boolCorrect">${questions[questionNumber].correct_answer}</button> \n`;
                console.log(htmlAnswers);
                console.log( document.getElementById("cnt-answers"));
                document.getElementById("cnt-answers").innerHTML = htmlAnswers;
                
                // domande booleane corrette
                let booleanCorrect = document.querySelectorAll(".boolCorrect");
                
                booleanCorrect.forEach(element => {
                    element.addEventListener("click", function() {
                        console.log("Correct boolean");
                        answers.push(1);
                        nextQuestion();
                    })
                });


                // domande  booleane corrette
                let booleanIncorrect = document.querySelectorAll(".boolIncorrect");
                
                booleanIncorrect.forEach(element => {
                    
                    element.addEventListener("click", function() {
                        console.log("Incorrect boolean");
                        answers.push(0);
                        nextQuestion();
                    })
                });
                questionNumber += 1;

                break;

            default:
                break;

        }
        updateQuestionCounter();
    } else {
        console.log("Domande terminate");
        let corrette = 0;
        for(let i = 0; i < answers.length; i++) {
            if (answers[i] === 1) {
                corrette += 1;
            }
        }
        console.log("Risposte corrette: "+ corrette);
        questionNumber = 0;
        htmlfinal = "";
        document.getElementById("cnt-question").innerHTML = htmlfinal;
        document.getElementById("cnt-answers").innerHTML = htmlfinal;
    }
};

//funzione per tenere aggiornato il contatore delle domande
function updateQuestionCounter(){
  document.getElementsByClassName("cnt-question-counter")[0].innerHTML = `QUESTION ${questionNumber} /  ${questions.length}`;
  

}

  
  