var quizForm = document.querySelector(".quiz-form");
var btnSubmit = document.querySelector("#btn-submit");
var outputEl = document.querySelector("#outputEl");


var correctAnswer = ["90°", "right angled", "3", "midsegment", "One-half", "Median", "8cm", "A geometric figure", "Equilateral", "Hypotenuse"];

function playQuiz() {
   var formResult = new FormData(quizForm)
   var score = 0;
   var index = 0;
   for (let value of formResult.values()) {
      if (value === correctAnswer[index]) {
         score++;
      }

      index++;
   }
   outputEl.innerText = "Your score is: " + score;
}

btnSubmit.addEventListener("click", playQuiz);