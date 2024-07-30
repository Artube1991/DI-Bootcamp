import React, { useState } from 'react';
import Garage from './Garage.js';


// Part I
const Car = (props) => {
    return <h1>This car is {props.carModel}</h1>
}

//export default Car

//Part II
function CarColor() {
    const [color, setColor] = useState("red");
    return color
  }

  //Part III
function Size() {
    return <Garage size="small" />
}

export default Size