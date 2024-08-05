import { useRef } from "react";

const input = document.getElementsByClassName("inputRef")[0];

function CharacterCounter() {
    const inputRef = useRef(null);
  
    const handleInputChange = () => {
        console.log(e.target.value)

    input.addEventListener("input", handleInputChange)
      // Update the character count based on textLength
    };
    
    return (
      <div>
        <h1>Character Counter</h1>
        <textarea
          className="inputRef"
          ref={inputRef}
          placeholder="Type something..."></textarea>
        <p>Character Count: </p>
      </div>
    );
  }


export default CharacterCounter