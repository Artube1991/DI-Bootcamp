import React from "react";

import data from "./data.json";

export class Example2 extends React.Component {
    constructor(props) {
        super(props);
        console.log("props: ", props);
    }

    render() {
        return data.Skills.map((item) => {
        const area = item.Area;
        const skillSet = item.SkillSet;
        return (
            <>
        <p>{area}</p>
        {skillSet.map((set) => (
            <li>{set.Name}</li>
    ))}
        </>
        );
    });
    }
}


export default Example2