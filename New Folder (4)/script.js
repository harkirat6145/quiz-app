const quizDB = [
  {
    question: "Q1: he world’s largest island is Greenland. ",
    a: "Madagascar",
    b: "Borneo",
    c: "Sri Lanka",
    d: "New Guinea",

    ans: "ans4",
  },

  {
    question: "Q2: The intersecting lines drawn on maps and globes are",
    a: "latitudes",
    b: "Blongitudes",
    c: "geographic grids",
    d: "None of the above",
    ans: "ans3",
  },
  {
    question: "The Homolographic projection has the correct representation of.",
    a: "shape",
    b: "area",
    c: "baring",
    d: "Distance",

    ans: "ans2",
  },

  {
    question: "The great Victoria Desert is located in",
    a: "canada",
    b: "west Africa",
    c: "Australia",
    d: "chaina",

    ans: "ans3",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");

const showScore = document.querySelector("#showScore");

showScore.classList.add("hideScore")
let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionList = quizDB[questionCount];

  console.log("questionList", questionList);

  question.innerText = questionList.question;

  console.log('option1',option1)

  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};

loadQuestion();

const getCheckAnswer = () => {
  let answer;

  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;

  
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => (curAnsElem.checked = false));
  };

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);

  if (checkedAnswer == quizDB[questionCount].ans) {
    score++;
  }
  questionCount++;

  deselectAll();

  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
            <h3> you scored ${score}/${quizDB.length} </h3>

            <button class="btn" onClick="location.reload()" > play Again </button>
        `;

    showScore.classList.remove("scoreArea");
    showScore.classList.remove("hideScore");
  }
});
