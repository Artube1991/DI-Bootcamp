import React from "react";

const ClickMe = () => {
    return <button onClick={myFunction}>Something</button>
};

function myFunction(e) {
    alert("I was clicked!");
};

export default ClickMe

