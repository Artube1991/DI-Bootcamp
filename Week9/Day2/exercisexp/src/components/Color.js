import { useEffect } from 'react';
import { useState } from 'react';

function Color() {
    const [favouriteColor, setColor] = useState("red");
    return <header>My favourite color is <em>{favouriteColor}</em></header>
}

export default Color