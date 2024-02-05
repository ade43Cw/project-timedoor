const questions = [
    {
        questions: "Witch is large animal in the World?",
        answer: [
            {text: "Shark", correct: false},
            {text: "Blue While", correct: true},
            {text: "Elepant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        questions: "Witch is the largest desert in the Word?",
        answer: [
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: false},
            {text: "Antarctica", correct: true},
        ]
    },
    {
        questions: "Witch is the smallest contien in the World?",
        answer: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Eroupe", correct: false},
            {text: "Africa", correct: false},
        ]
    },
    {
        questions: "Witch is tallest building in the World?",
        answer: [
            {text: "Burj Khalifa", correct: true},
            {text: "Shanghai", correct: false},
            {text: "Clock Royal Tower", correct: false},
            {text: "Lotte", correct: false},
        ]
    },
    {
        questions: "Witch is small country in the World?",
        answer: [
            {text: "Sri Lanhka", correct: false},
            {text: "Monaco", correct: false},
            {text: "Singapore", correct: false},
            {text: "Vatican", correct: true},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("nextBtn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion  = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.questions;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })
}

function resetState(){
    nextBtn.style.display = "none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct == "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score ++;
    }
    else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerBtn.children).forEach(button => {
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showScore() {
    resetState();
    let maxscore = (score / questions.length) * 100; // Assuming the maximum score is 100
    questionElement.innerHTML = `You Score ${maxscore}% (${score} out of ${questions.length})!`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}


function handleNextBtn() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        // Jika masih ada pertanyaan, tampilkan pertanyaan berikutnya
        showQuestion();
    } else {
        // Jika tidak ada pertanyaan lagi, tampilkan skor
        showScore();
    }
}

nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        // Jika masih ada pertanyaan, tangani pertanyaan berikutnya
        handleNextBtn();
    } else {
        // Jika tidak ada pertanyaan lagi, mulai kuis lagi
        startQuiz();
    }
});


startQuiz();