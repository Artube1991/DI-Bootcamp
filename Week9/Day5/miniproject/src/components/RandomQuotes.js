import React from 'react';
import quotes from "./data.js";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

class Quotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "",
            author: "",
        };
    }

    chooseQuote = () => {
        let randIndx = getRandomInt(0, 94);
        let { quote } = this.props
        let { author } = this.props
        let randomQuote = quotes[randIndx].quote;
        let randomAuthor = quotes[randIndx].author;
        this.setState({ 
            quote: randomQuote,
            author: randomAuthor,
         });
    }
}

export default Quotes

// console.log(quotes[getRandomInt(0, 94)]);