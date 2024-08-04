import React from 'react';
import quotes from "./data.js";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let randIndxDef = getRandomInt(0, 94);
let quoteblock = document.getElementsByClassName("quoteblock")[0];

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
        //  function moving() {
        //     let start = Date.now();
      
        //     let timer = setInterval(function() {
        //       let timePassed = Date.now() - start;
      
        //       quoteblock.style.up = timePassed / 5 + 'px';
      
        //       if (timePassed > 1000) clearInterval(timer);
      
        //     }, 20);
        //   };
        // moving();
    }

    render() {
        return (
            <>
            <p>{this.state.quote}</p>
            <p>{this.state.author}</p>
            <button type="button" onClick={this.chooseQuote}>New Quote</button>
            </>
        )
    }
}

export default Quotes

// console.log(quotes[getRandomInt(0, 94)]);