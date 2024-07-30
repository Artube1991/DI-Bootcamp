import React from "react";

// part I
// const ClickMe = () => {
//     return <button onClick={myFunction}>Something</button>
// };

// function myFunction(e) {
//     alert("I was clicked!");
// };

// export default ClickMe

// part II  

const Form = () => {
    return <input type="text" name="text" onKeyDown={handleKeyDown}/>
}

const handleKeyDown = (event) => {
    if(event.key === 'Enter'){
      alert(event.target.value);
    }
  };

export default Form