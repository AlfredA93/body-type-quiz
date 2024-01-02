// JS Script
const questions = [
  {
    question: "Generic Question 1",
    answers: [
      { text: "Like this", bodytype: "Hourglass" },
      { text: "Like that", bodytype: "Apple" },
      { text: "With this", bodytype: "Pear" },
      { text: "Without that", bodytype: "Triangle" },
    ],
  },
  {
    question: "Generic Question 2",
    answers: [
      { text: "Like this", bodytype: "Hourglass" },
      { text: "Like that", bodytype: "Apple" },
      { text: "With this", bodytype: "Pear" },
      { text: "Without that", bodytype: "Triangle" },
    ],
  },
  {
    question: "Generic Question 3",
    answers: [
      { text: "Like this", bodytype: "Hourglass" },
      { text: "Like that", bodytype: "Apple" },
      { text: "With this", bodytype: "Pear" },
      { text: "Without that", bodytype: "Triangle" },
    ],
  },
  {
    question: "Generic Question 4",
    answers: [
      { text: "Like this", bodytype: "Hourglass" },
      { text: "Like that", bodytype: "Apple" },
      { text: "With this", bodytype: "Pear" },
      { text: "Without that", bodytype: "Triangle" },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let hourglassTally = 0;
let appleTally = 0;
let pearTally = 0;
let triangleTally = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  let hourglassTally = 0;
  let appleTally = 0;
  let pearTally = 0;
  let triangleTally = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
  });
}
