import React, { useState } from "react";

function Phone() {
const [brand, setBrand] = useState("Samsung");
const [model, setModel] = useState("Galaxy S20");
const [color, setColor] = useState("black");
const [year, setYear] = useState(2020);

    const changeColor = () => {

        setColor("blue");
    }

    return (
            <>
            <h1>My phone is {brand}</h1>
            <h4>It is {color} {model} from {year}</h4>
            <button
                type="button"
                onClick={changeColor}
            > Change the color</button>
            </>
    )
}

export default Phone