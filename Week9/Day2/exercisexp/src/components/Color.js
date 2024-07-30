import { useEffect } from 'react';
import { useState } from 'react';

function Color() {
    const [favouriteColor, setColor] = useState("red");
    useEffect(() => {
        setColor("yellow");
        alert("useEffect reached");
    });
    const changeColor = () => {
        setColor("blue");
    }
    return <>
    <header>My favourite color is <em>{favouriteColor}</em></header>
    <button onClick={changeColor}>Change color to blue</button>
    </>
};

export default Color