import React from 'react';
import quotes from "./data.js";
import colors from './colors.js';

let body = document.getElementsByTagName("body")[0];

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
let randIndCol = getRandomInt(0, 12);

body.setAttribute('style', `background-color:${colors[randIndCol]}`)

class Quotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: quotes[randIndxDef].quote,
            author: quotes[randIndxDef].author,
            color: colors[randIndCol],
        };
    }

    chooseQuote = () => {
        let randIndx = getRandomInt(0, 94);
        let randIndxColCH = getRandomInt(0, 12)
        let { quote } = this.props
        let { author } = this.props
        let { color } = this.props
        let randomQuote = quotes[randIndx].quote;
        let randomAuthor = quotes[randIndx].author;
        let randomColor = colors[randIndxColCH];
        body.setAttribute('style', `background-color:${randomColor}`)
        this.setState({ 
            quote: randomQuote,
            author: randomAuthor,
            color: randomColor,
         });

        // moving();
    }

    render() {
        return (
            <div className="quoteblock">
            <h2>"{this.state.quote}"</h2>
            <p><em>--{this.state.author}</em></p>
            <button type="button" id="button" onClick={this.chooseQuote}>New Quote</button>
            </div>
        )
    }
}

export default Quotes

// console.log(quotes[getRandomInt(0, 94)]);
console.log(colors[3])