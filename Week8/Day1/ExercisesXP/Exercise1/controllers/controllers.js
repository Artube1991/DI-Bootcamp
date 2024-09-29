const express = require('express');
const app = express();

const hello = (req, res) => {
    try {
        res.json('Hello from my HomePage!')
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
    }
};

const about = (req, res) => {
    try {
        res.status(200).json('This is my first Express server. Im really sorry that I was late with it');
    } catch {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
    }
};

module.exports = {
    hello,
    about
};