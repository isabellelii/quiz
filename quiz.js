alert('Hey you, ready for a quiz?');
console.log(alert);

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
  {
    question: "Which of the following is NOT a hoof-animal?",
    answers: {
      a: "Deer",
      b: "Goat",
      c: "Moose",
      d: "Panda"
    },
    correctAnswer: "d"
  },
  {
    question: "What's the name of the famous cocky Moose?",
    answers: {
      a: "Adam",
      b: "Glenn",
      c: "Sture",
      d: "Lennart"
    },
    correctAnswer: "c"
  },
  {
    question: "When is the mating season for sheeps?",
    answers: {
      a: "Spring",
      b: "Fall",
      c: "Winter",
      d: "Summer"
    },
    correctAnswer: "d"
  },
  {
    question: "Which of the following is the largest hoof-animal?",
    answers: {
      a: "Cow",
      b: "Pig",
      c: "Deer",
      d: "Sheep"
    },
    correctAnswer: "a"
  },
  {
    question: "Which of the following is the smallest hoof-animal?",
    answers: {
      a: "Pig",
      b: "Goat",
      c: "Mouse deer",
      d: "Moose"
    },
    correctAnswer: "c"
  }
];

function quizContainer() {};

function resultsContainer(){};



buildQuiz();

submitButton.addEventListener('click', showResults);
