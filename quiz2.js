var myQuestions = [
    {
      question: "Question 1",
      choices: ["Choice 1", "Choice 2", "Choice 3"],
      //correctAnswer: "Choice 1",
    },
    {
      question: "Question 2",
      choices: ["Choice 1", "Choice 2", "Choice 3"],
      //correctAnswer: "Choice 3",
    },
      {
        question: "Question 3",
        choices: ["Choice 1", "Choice 2", "Choice 3"],
        //correctAnswer: "Choice 3",
      },
      {
        question: "Question 4",
        choices: ["Choice 1", "Choice 2", "Choice 3"],
        //correctAnswer: "Choice 3",
      },
      {
        question: "Question 5",
        choices: ["Choice 1", "Choice 2", "Choice 3"],
        //correctAnswer: "Choice 3",
      },
      {
        question: "Question 6",
        choices: ["Choice 1", "Choice 2", "Choice 3"],
        //correctAnswer: "Choice 3",
      }

    // Add more questions here...
  ];
  
  var currentQuestionIndex = 0;
  var userAnswers = Array(myQuestions.length).fill(null);
  var progressPercent = 0;
  
  var quizContainer = document.querySelector(".quiz-container");
  var questionElement = document.getElementById("question");
  var choicesElement = document.getElementById("choices");
  var prevButton = document.getElementById("prev");
  var nextButton = document.getElementById("next");
  var submitButton = document.getElementById("submit");
  var progressElement = document.querySelector(".progress-bar");
  
  function showQuestion() {
    var currentQuestion = myQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    choicesElement.innerHTML = "";
  
    currentQuestion.choices.forEach(function (choice, index) {
      var choiceElement = document.createElement("div");
      choiceElement.classList.add("choice");
      choiceElement.textContent = choice;
      choiceElement.setAttribute("data-index", index);
      choiceElement.addEventListener("click", handleChoiceClick);
      choicesElement.appendChild(choiceElement);
  
      if (userAnswers[currentQuestionIndex] === choice) {
        choiceElement.classList.add("selected");
      }
    });
  
    prevButton.disabled = currentQuestionIndex === 0;
    nextButton.disabled = currentQuestionIndex === myQuestions.length - 1;
    submitButton.disabled = !userAnswers.every(function (answer) {
      return answer !== null;
    });
  
    updateProgressBar();
  }
  
  function handleChoiceClick(event) {
    var selectedChoiceIndex = event.target.getAttribute("data-index");
    var selectedChoice = myQuestions[currentQuestionIndex].choices[selectedChoiceIndex];
  
    userAnswers[currentQuestionIndex] = selectedChoice;
    showQuestion();
  }
  
  function updateProgressBar() {
    progressPercent = ((currentQuestionIndex + 1) / myQuestions.length) * 100;
    progressElement.style.width = progressPercent + "%";
  }
  
  prevButton.addEventListener("click", function () {
    currentQuestionIndex--;
    showQuestion();
  });
  
  nextButton.addEventListener("click", function () {
    currentQuestionIndex++;
    showQuestion();
  });
  /*
  submitButton.addEventListener("click", function () {
    if (userAnswers.every(function (answer) {
      return answer !== null;
    })) {
      var userChoices = {};
      myQuestions.forEach(function (question, index) {
        userChoices["Question " + (index + 1)] = userAnswers[index];
      });
      console.log(userChoices);
    }
  });
*/
  submitButton.addEventListener("click", function () {
    if (userAnswers.every(function (answer) {
      return answer !== null;
    })) {
      var userChoices = {};
      myQuestions.forEach(function (question, index) {
        userChoices["Question " + (index + 1)] = userAnswers[index];
      });
      console.log(userChoices);
    } else {
      alert("Please answer all the questions before submitting.");
    }
  });
  
  
  showQuestion();
  