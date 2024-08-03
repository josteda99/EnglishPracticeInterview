const { hrQuestions, technicalQuestions, followUpQuestions } = require("./questions.js");

function generateRoundOfQuestions(n) {
  const questions = [];

  for (let i = 0; i < n; i++) {
    questions.push(hrQuestions[getRandomInt(hrQuestions.length)]);
    questions.push(technicalQuestions[getRandomInt(technicalQuestions.length)]);
    questions.push(followUpQuestions[getRandomInt(followUpQuestions.length)]);
  }

  console.log(questions);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

generateRoundOfQuestions(3);
