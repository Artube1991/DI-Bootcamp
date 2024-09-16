import React from 'react';

class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "red",
        };
    };

    changeColor = () => {
        this.setState({ color: "blue"});
    };

    shouldComponentUpdate() {
        return false
    };

    componentDidMount() {
        alert("componentDidMount reached");
        this.setState({color: "yellow"});
        console.log("after update")
    }

    render() {
        return (
            <>
                <header>My favourite color is <em>{this.state.color}</em></header>
                <button onClick={this.changeColor}>Change color to blue</button>
            </>
        );
    }
};

export default Color