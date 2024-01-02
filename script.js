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
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let hourglassTally = 0;
let appleTally = 0;
let pearTally = 0;
let triangleTally = 0;
let currentChoice;

function startQuiz() {
  currentQuestionIndex = 0;
  hourglassTally = 0;
  appleTally = 0;
  pearTally = 0;
  triangleTally = 0;
  currentChoice = "";
  nextButton.innerHTML = "Next";
  document.getElementById("hour").innerHTML = hourglassTally;
  document.getElementById("apple").innerHTML = appleTally;
  document.getElementById("pear").innerHTML = pearTally;
  document.getElementById("triangle").innerHTML = triangleTally;
  document.getElementById("choice").innerHTML = ""
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    button.setAttribute("id", answer.bodytype);
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  Array.from(answerButtons.children).forEach((button) => {
    button.classList.remove("selected");
  });
  const selectedBtn = e.target;
  selectedBtn.classList.add("selected");
  nextButton.style.display = "block";
  currentChoice = selectedBtn.getAttribute("id");
  document.getElementById("choice").innerHTML = currentChoice;
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function showScore() {
  resetState();
  questionElement.innerHTML = `
  Here is your breakdown... You're 
  ${hourglassTally}/4 hourglass, 
  ${appleTally}/4 apple, 
  ${pearTally}/4 pear, 
  ${triangleTally}/4 triangle`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  if (currentChoice === "Hourglass") {
    hourglassTally++;
    document.getElementById("hour").innerHTML = hourglassTally;
  } else if (currentChoice === "Apple") {
    appleTally++;
    document.getElementById("apple").innerHTML = appleTally;
  } else if (currentChoice === "Pear") {
    pearTally++;
    document.getElementById("pear").innerHTML = pearTally;
  } else if (currentChoice === "Triangle") {
    triangleTally++;
    document.getElementById("triangle").innerHTML = triangleTally;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
