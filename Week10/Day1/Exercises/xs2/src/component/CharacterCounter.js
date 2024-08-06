import { useRef, useEffect, useState  } from "react";

// const input = document.getElementsByClassName("inputRef")[0];

function CharacterCounter() {
    const inputRef = useRef(null);
    const [length, setLength] = useState(0);

    const HandleInputChange = (e) => {
        setLength(e.target.value.length)
        // console.log(setLength);
}

    return (
      <div>
        <h1>Character Counter</h1>
        <textarea
          className="inputRef"
          ref={inputRef}
          onChange={(e) => HandleInputChange(e)}
          placeholder="Type something..."></textarea>
          <p>Character Count: {length}</p>
      </div>
    )
}

export default CharacterCounter