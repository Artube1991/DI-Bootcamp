import React, { useState } from 'react';

// Part I
const Car = (props) => {
    return <h1>This car is {props.carModel}</h1>
}

//Part II
function CarColor() {
    const [color, setColor] = useState("red");
    return color
  }

export default Car