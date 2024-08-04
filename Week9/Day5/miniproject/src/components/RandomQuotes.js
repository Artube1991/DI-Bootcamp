import React from 'react';
import quotes from "./data.js";

let quoteblock = document.getElementsByClassName("quoteblock")[0];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// function moving() {
//     let start = Date.now();

//     let timer = setInterval(function() {
//       let timePassed = Date.now() - start;

//       quoteblock.style.left = timePassed / 5 + 'px';

//       if (timePassed > 1000) clearInterval(timer);

//     }, 20);
//   };

let randIndxDef = getRandomInt(0, 94);

class Quotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: quotes[randIndxDef].quote,
            author: quotes[randIndxDef].author,
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

        // moving();
    }

    render() {
        return (
            <>
            <h2>"{this.state.quote}"</h2>
            <p><right><em>--{this.state.author}</em></right></p>
            <button type="button" id="button" onClick={this.chooseQuote}>New Quote</button>
            </>
        )
    }
}

export default Quotes

// console.log(quotes[getRandomInt(0, 94)]);