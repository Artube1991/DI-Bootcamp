import React from 'react';

class Animals extends React.Component {
    render() {
        console.log(this.props);
        return this.props.favAnimals.map(animal => (
            <ul key={animal}>
                <li>{animal}</li>
                </ul>
        ));
    }
};

export default Animals;