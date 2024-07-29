import React from 'react';

class Animals extends React.Component {
    render() {
        console.log(this.props)
        return this.props.favAnimals.map(animal => (
            <ul>
                <li>{animal}</li>
                <li>{animal}</li>
                <li>{animal}</li>
            </ul>
        ));
    }
}

// const Animals = (props) => {
//     return <h2>Hi, I am a {props.favAnimals}!</h2>;
 
//  }

export default Animals;