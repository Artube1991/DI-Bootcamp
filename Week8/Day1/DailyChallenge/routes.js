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
        question: "Who lives on the shore of the sea?",
        answer: "SpongeBob SquarePants",
    },
    {
        question: "How many continents are in the world?",
        answer: "6",
    }
  ];

  const numberQuestion = {
    number: 0,
  }

  const trivia = (req, res) => {
    try {
        let index = numberQuestion.number;
        const qstion = triviaQuestions[index].question;
        res.json(qstion);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
    }
  };

  const quiz = (req, res) => {
    try {
        let answer = req.body.answer;
        if (answer === triviaQuestions[numberQuestion.number].answer) {
            res.status(201).json("Your answer is correct!")
        }
        else {
            res.status(404).json("You gave wrong answer!")
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
    }
  }

  router.get("/quiz", trivia);
  router.post("/quiz", quiz)

  module.exports = {
    router,
  }