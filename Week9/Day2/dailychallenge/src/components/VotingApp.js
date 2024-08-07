import { useState } from "react";

const VotingApp = (props) => {
    const [languages, setLanguages] = useState([
        { name: "PHP", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaScript", votes: 0 },
        { name: "Java", votes: 0 },
    ]);

const vote = (indx) => {
    const languagesUPD = [...languages]
    languagesUPD[indx].votes++;
    setLanguages(languagesUPD);
};

return (
    <>
    <h1>Vote Your Language!</h1>
    {languages.map((item, indx) => {
        return (
            <div className="btn" key={indx}>
                {item.votes} {item.name} 
                <button onClick={() => vote(indx)}>Click Here</button>
            </div>
        );
    })
        }; 
    </>
)}

export default VotingApp