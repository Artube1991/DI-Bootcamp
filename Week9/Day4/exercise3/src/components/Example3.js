import React from "react";

import data from "./data.json";

export class Example3 extends React.Component {
    constructor(props) {
        super(props);
        console.log("props: ", props);
    }

    render() {
        return data.Experiences.map((item) => {
        const logo = item.logo;
        const companyName = item.companyName;
        const link = item.url;
        const experiences = item.roles;
        return (
            <>
        <img src={logo} width="200px" height="200px"/><br/>
        <a href={link}>{companyName}</a>
        {experiences.map((role) => (
            <p>{role.title}</p>
    ))}
        {experiences.map((role) => (
            <p>{role.startDate}</p>
    ))}
        {experiences.map((role) => (
            <p>{role.description}</p>
    ))}
        </>
        );
    });
    }
}

export default Example3