import React, {useState} from "react";

const Counter = (props: {count: number; setCount: React.Dispatch<React.SetStateAction<number>>}) => {
  

    return (
        <>
        <h3>Count: {props.count}</h3>
        <button onClick={() => props.setCount(count => count + 1)}>Press PLUS</button>
        </>
    );
};

export default Counter