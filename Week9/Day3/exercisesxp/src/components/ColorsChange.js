import React from 'react';

class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "red", show: true
        };
    };

    shouldComponentUpdate() {
        return true
    };

    componentDidMount(){
        // alert("start the mounting");
        setTimeout(() => this.setState({color: "yellow"}), 5000);
    }

    componentDidUpdate() {
        console.log("after update")
    };

    getSnapshotBeforeUpdate() {
        console.log("in getSnapshotBeforeUpdate");
    };

    changeColor = () => {
        this.setState({ color: "blue"});
    };

    render() {
        return (
            <>
                <header>My favourite color is <em>{this.state.color}</em></header>
                <button onClick={this.changeColor}>Change color to blue</button>
                <Child/>
            </>
        );
    }
};

class Child extends Color {
    constructor() {
        super();
    };

    componentWillUnmount() {
        alert("The header is not unmounted yet")
    }

    changeShow = () => {
        this.setState({ show: false });
    }

    render() {
    if (this.state.show === true) {
        return (
            <>
            <header>Hello World!</header>
            <button onClick={this.changeShow}>Delete Header</button>
            </>
        )
    }
}
}

export default Color;