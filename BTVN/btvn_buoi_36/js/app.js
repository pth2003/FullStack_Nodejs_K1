const api =
  "https://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=multiple";
const question = document.querySelector("#question");
const options = document.querySelector(".quiz-options");
const _corretScore = document.querySelector("#correct-score");
const _totalQuestion = document.querySelector("#total-question");
const result = document.querySelector("#result");
const checkBtn = document.querySelector("#check-answer");
const playAgain = document.querySelector("#play-again");
const startGame = document.querySelector(".start");
const root = document.querySelector(".root");
startGame.addEventListener("click", () => {
  startGame.style.display = "none";
  setTimeout(() => {
    root.style.display = "block";
  }, 2000);
});
let correctAnswer = "",
  askedCount = 0,
  totalQuestion = 10;
let corretScore = 0;
console.log(corretScore);
let eventListener = () => {
  checkBtn.addEventListener("click", checkAnswer);
  playAgain.addEventListener("click", restartGame);
};
document.addEventListener("DOMContentLoaded", () => {
  getData();
  eventListener();
  _totalQuestion.textContent = totalQuestion;
  _corretScore.textContent = corretScore;
  console.log(corretScore);
});

const render = (data) => {
  checkBtn.disabled = false;
  // result.innerHTML = "";
  correctAnswer = data.correct_answer;
  let incorrectAnswer = data.incorrect_answers;

  let optionList = incorrectAnswer;
  optionList.splice(
    Math.floor(Math.random() * (incorrectAnswer.length + 1)),
    0,
    correctAnswer
  );

  question.innerHTML = `${data.question} <br />
  <span class="category">${data.category}</span>`;

  options.innerHTML = `
    ${optionList
      .map((option, index) => {
        return `<li> ${index + 1}. <span>${option}</span> </li>`;
      })
      .join("")}
  `;
};
const getData = async () => {
  const res = await fetch(api);
  const data = await res.json();
  render(data.results[0]);
  result.innerHTML = "";
  selectOption();
};

const selectOption = () => {
  console.log(correctAnswer);
  options.querySelectorAll("li").forEach((option) => {
    option.addEventListener("click", () => {
      if (options.querySelector(".selected")) {
        const activeOption = options.querySelector(".selected");
        activeOption.classList.remove("selected");
      }
      option.classList.add("selected");
    });
  });
};

const checkAnswer = () => {
  checkBtn.disabled = true;
  if (options.querySelector(".selected")) {
    let selectAnswer = options.querySelector(".selected span").innerText;

    if (selectAnswer === correctAnswer) {
      corretScore++;

      console.log(corretScore);
      result.innerHTML = `<p> <i class="fa-solid fa-check"></i>Correct Answer! </p>`;
    } else {
      result.innerHTML = `<p> <i class="fa-solid fa-xmark"></i>Incorrect Answer! </p> 
        <p><small><b>Correct Answer : </b>${correctAnswer}</small></p>
      `;
    }
    checkCount();
  }
};

const checkCount = () => {
  askedCount++;
  setCount();
  if (askedCount === totalQuestion) {
    result.innerHTML = `<p> Your score is : ${corretScore}. </p>`;
    playAgain.style.display = "block";
    checkBtn.style.display = "none";
  } else {
    setTimeout(() => {
      getData();
    }, 300);
  }
};
const setCount = () => {
  _totalQuestion.textContent = totalQuestion;
  _corretScore.textContent = corretScore;
};

const restartGame = () => {
  corretScore = 0;
  askedCount = 0;
  playAgain.style.display = "none";
  checkBtn.style.display = "block";
  checkBtn.disabled = false;
  setCount();
  getData();
};

const nextQuestion = () => {
  askedCount++;
  if (askedCount < totalQuestion) {
    getData();
  } else {
    checkCount();
  }
};
