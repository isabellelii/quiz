alert('Hey, get ready. The quiz timer start as soon you click OK!');
console.log(alert);

(function() {
  const myQuestions = [{
      question: "How many planets are there in our solar system?",
      answers: {
        a: "8",
        b: "10",
        c: "9",
        d: "11"
      },
      correctAnswer: "a"
    },
    {
      question: "How old is the solar system?",
      answers: {
        a: "5 million years",
        b: "5 billion years",
        c: "500 billion years",
        d: "50 billion years"
      },
      correctAnswer: "b"
    },
    {
      question: "What's the shape of the solar system?",
      answers: {
        a: "It's squashed",
        b: "It's round",
        c: "It's like a donut",
        d: "It's a horseshoe shape"
      },
      correctAnswer: "a"
    },
    {
      question: "How fast does the Sun travel?",
      answers: {
        a: "220km in a second",
        b: "220km in an minute",
        c: "220 km in a hour",
        d: "220km in a year"
      },
      correctAnswer: "a"
    },
    {
      question: "How long does it take for light from the Sun to reach Earth?",
      answers: {
        a: "1 minute",
        b: "1 hour",
        c: "8 minutes",
        d: "3 Hours"
      },
      correctAnswer: "c"
    },
    {
      question: "What planet is closest in size to Earth?",
      answers: {
        a: "Saturn",
        b: "Mars",
        c: "Venus",
        d: "Jupiter"
      },
      correctAnswer: "c"
    },
    {
      question: "What planet is nicknamed the ‘Red Planet’?",
      answers: {
        a: "Uranus",
        b: "Neptune",
        c: "Earth",
        d: "Mars"
      },
      correctAnswer: "d"
    },
    {
      question: "What is the smallest planet in the Solar System?",
      answers: {
        a: "Mars",
        b: "Mercury",
        c: "Venus",
        d: "Earth"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the hottest planet in the Solar System?",
      answers: {
        a: "Venus",
        b: "Saturn",
        c: "Uranus",
        d: "Mars"
      },
      correctAnswer: "a"
    },
    {
      question: "What planet is closest to the Sun?",
      answers: {
        a: "Neptune",
        b: "Jupiter",
        c: "Mercury",
        d: "Mars"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the third planet from the Sun?",
      answers: {
        a: "Mars",
        b: "Mercury",
        c: "Venus",
        d: "Earth"
      },
      correctAnswer: "d"
    },

  ];

  function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];
      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
             <input type="checkbox" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    quizContainer.innerHTML = output.join("");
  }


  function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");
    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        answerContainers[questionNumber].style.color = "red";
      }
    });

    resultsContainer.innerHTML = `<span class="res"> ${numCorrect} out of ${myQuestions.length}`;
  }


  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);


  document.getElementById('timer').innerHTML =
    02 + ":" + 15;
  startTimer();

  function startTimer() {
    const presentTime = document.getElementById('timer').innerHTML;
    let timeArray = presentTime.split(/[:]+/);
    let m = timeArray[0];
    let s = checkSecond((timeArray[1] - 1));
    if (s == 59) {
      m = m - 1
    }

    document.getElementById('timer').innerHTML =
      m + ":" + s;
    setTimeout(startTimer, 1000);
  }

  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {
      sec = "0" + sec
    };
    if (sec < 0) {
      sec = "59"
    };
    return sec;
  }
})();
