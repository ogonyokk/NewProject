const quizContainer = document.querySelector('.quiz-container');
const submitButton = document.querySelector('.submit-btn');

const questions = [
    {
        question: "Что такое JavaScript?",
        answers: [
            "Язык разметки",
            "Компилируемый язык программирования",
            "Скриптовый язык программирования",
            "Графический редактор",
            "Язык стилей"
        ],
        correctAnswer: 2
    },
    {
        question: "Какой объект отвечает за работу с HTTP-запросами в JavaScript?",
        answers: [
            "XMLHttpRequest",
            "JSONParser",
            "HTTPHandler",
            "RequestManager",
            "HttpConnector"
        ],
        correctAnswer: 0
    },
    {
        question: "Что из перечисленного является языком стилей?",
        answers: [
            "JavaScript",
            "HTML",
            "CSS",
            "Python"
        ],
        correctAnswer: 2
    },
    {
        question: "Какие из нижеперечисленных языков программирования являются объектно-ориентированными?",
        answers: [
            "JavaScript",
            "HTML",
            "CSS",
            "Python"
        ],
        correctAnswer: 0
    },
    // Добавьте другие вопросы
];

function buildQuiz() {
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<p>${question.question}</p>`;

        question.answers.forEach((answer, ansIndex) => {
            const answerInput = document.createElement('input');
            answerInput.type = 'radio';
            answerInput.name = `q${index}`;
            answerInput.value = ansIndex;
            answerInput.id = `q${index}-a${ansIndex}`;
            questionDiv.appendChild(answerInput);

            const answerLabel = document.createElement('label');
            answerLabel.classList.add('answer');
            answerLabel.setAttribute('for', `q${index}-a${ansIndex}`);
            answerLabel
            answerLabel.innerHTML = answer;
            questionDiv.appendChild(answerInput);
            questionDiv.appendChild(answerLabel);
        });

        quizContainer.appendChild(questionDiv);
    });
}

function submitQuiz() {
    let score = 0;

    questions.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedAnswer) {
            const userAnswer = parseInt(selectedAnswer.value);
            if (userAnswer === question.correctAnswer) {
                score++;
            }
        }
    });

    alert(`Вы набрали ${score} из ${questions.length} баллов.`);
}

// Построить тест при загрузке страницы
buildQuiz();
