import React, {useState} from "react";

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <>
        <h3>Count: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Press PLUS</button>
        </>
    );
};

export default Counter