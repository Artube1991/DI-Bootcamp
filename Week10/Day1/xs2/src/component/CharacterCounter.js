import { useRef } from "react";

function CharacterCounter() {
    const inputRef = useRef(null);
    
  
    const handleInputChange = () => {
      const textLength = inputRef.current.value.length;
      console.log(textLength);
    };
  
    return (
      <div>
        <h1>Character Counter</h1>
        <textarea
          id="inputRef"
          ref={inputRef}
          onChange={handleInputChange}
          placeholder="Type something..."></textarea>
        <p>Character Count: {handleInputChange}</p>
      </div>
    );
  }

//   const input = document.getElementById("inputRef");
//   input.addEventListener("oninput", counting)

//   function counting(e) {
//       console.log(e.target.value)
//   }

export default CharacterCounter