import React from "react";
import { useState } from "react";

// part I
// const ClickMe = () => {
//     return <button onClick={myFunction}>Something</button>
// };

// function myFunction(e) {
//     alert("I was clicked!");
// };

// export default ClickMe

// part II  

// const Form = () => {
//     return <input type="text" name="text" onKeyDown={handleKeyDown}/>
// }

// const handleKeyDown = (event) => {
//     if(event.key === 'Enter'){
//       alert(event.target.value);
//     }
//   };

// export default Form

//Part III
const Button = () => {
const [isToggleOn, setToggle] = useState(true)
const [text, setText] = useState("ON");

function clicking() {
    if (isToggleOn == true) {
       setToggle(false);
        setText("OFF");
    }

    else if (isToggleOn == false) {
        setToggle(true);
        setText("ON");
    }
}

return (
    <>
    <p>Exercise 3, pt. 3:</p>
    <button
        type="button"
        onClick={clicking}
    >{text}</button>
    </>
)
};

export default Button