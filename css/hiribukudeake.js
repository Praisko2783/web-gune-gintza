

let currentQuestionIndex = 0;
let correctas = 0;
let incorrectas = 0;
let respondidas = 0;
let timer;
let timeLeft = 15;

document.getElementById('start-button').addEventListener('click', startQuiz);

function startQuiz() {
    document.getElementById('start-button').style.display = 'none';
    showQuestion();
    startTimer();
}

function showQuestion() {
    resetState();
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    questionElement.innerText = questions[currentQuestionIndex].question;
    questions[currentQuestionIndex].answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.addEventListener('click', () => selectAnswer(answer));
        answersElement.appendChild(button);
    });
    document.getElementById('question-container').style.display = 'block';
}

function resetState() {
    const answersElement = document.getElementById('answers');
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild);
    }
    document.getElementById('feedback').value = '';
    document.getElementById('feedback').style.color = 'black';
}

function selectAnswer(answer) {
    const feedbackElement = document.getElementById('feedback');
    if (answer.correct) {
        feedbackElement.value = 'ERANTZUN ZUZENA\n' + answer.feedback;
        feedbackElement.style.color = 'green';
        correctas++;
    } else {
        feedbackElement.value = 'ERANTZUN OKERRA\n' + answer.feedback;
        feedbackElement.style.color = 'red';
        incorrectas++;
    }
    respondidas++;
    updateScore();
    disableButtons();
    nextQuestion();
}

function disableButtons() {
    const buttons = document.querySelectorAll('.answers button');
    buttons.forEach(button => {
        button.disabled = true;
    });
}

function nextQuestion() {
    clearInterval(timer);
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            timeLeft = 15;
            showQuestion();
            startTimer();
        } else {
            endQuiz();
        }
    }, 5000);
}

function updateScore() {
    document.getElementById('correctas').innerText = correctas;
    document.getElementById('incorrectas').innerText = incorrectas;
    document.getElementById('respondidas').innerText = respondidas;
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function endQuiz() {
    document.getElementById('question-container').style.display = 'none';
    if(correctas > incorrectas){
        document.getElementById('feedback').value = 'Amaitu da azterketa! Zuzenak: '+correctas+ ', okerrak baino gehiago: '+incorrectas+'. Beraz, Zorionak!';
        document.getElementById('feedback').style.color = 'green';
    }
    else{
        document.getElementById('feedback').value = 'Amaitu da azterketa! Zuzenak: '+correctas+ ', okerrak baino gutxiago: '+incorrectas+'. Beraz, hobetu behar duzu!';
        document.getElementById('feedback').style.color = 'red';
    }
}
