const express = require('express');
const router = express.Router();

const triviaQuestions = [
    {
      question: "What is the capital of France?",
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      answer: "Mars",
    },
    {
      question: "What is the largest mammal in the world?",
      answer: "Blue whale",
    },
    {
        question: "Who lives in the pineapple under the sea?",
        answer: "SpongeBob SquarePants",
    },
    {
        question: "How many continents are in the world?",
        answer: "6",
    }
  ];

  const numberQuestion = {
    number: 0,
    score: 0,
  }

  const trivia = (req, res) => {
    try {
        let index = numberQuestion.number;
        if (index <= 4) {
            const qstion = triviaQuestions[index].question;
            res.json(qstion);
        }
        else {
           res.json(`You finished our Trivia Quiz! Your total score is ${numberQuestion.score} of 5`)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
    }
  };

  const quiz = (req, res) => {
    try {
        let answer = req.body.answer;
        if (answer === triviaQuestions[numberQuestion.number].answer) {
            numberQuestion.score++;
            res.status(201).json("Your answer is correct!")
        }
        else {
            res.status(404).json("You gave wrong answer!")
        }
        numberQuestion.number++;
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
    }
  };

  const score = (req, res) => {
    try {
        res.status(200).json(`Your current score in the Quiz Trivia is ${numberQuestion.score} of 5`);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
    }
  }

  router.get("/quiz", trivia);
  router.post("/quiz", quiz);
  router.get("/quiz/score", score);

  module.exports = {
    router,
  }