import React from 'react';

class Math extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: "",
            num2: ""
        };
    }

    addNumbers = () => {
        let { num1 } = this.props
        let { num2 } = this.props
        let userNumber = Number(e.target.num1.value);
        let userNumber2 = Number(e.target.num2.value);
        body.setAttribute('style', `background-color:${randomColor}`);
        // quoteblock.setAttribute('style', `color:${colors[randIndCol]}`);
        this.setState({ 
            quote: randomQuote,
            author: randomAuthor,
            color: randomColor,
         });

        // moving();
    }

    render() {
        return (
            <>
            <h1>Adding Two Numbers</h1>
            <form onSubmit={this.addNumbers}>
                <div>
            <input type="number" className="input" name="num1" min="0" max="10"/>
            </div>
            <div>
            <input type="number" className="input" name="num2" min="0" max="10"/>
            </div>
            <input type="submit" value="ADD" id="submit"/>
                </form>
            </>
        )
    }
}

export default Math

