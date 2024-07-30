import { useEffect } from 'react';
import { useState } from 'react';

function Color() {
    const [favouriteColor, setColor] = useState("red");
    useEffect(() => {
        setColor("yellow");
        alert("useEffect reached");
    });
    return <header>My favourite color is <em>{favouriteColor}</em></header>
};

export default Color