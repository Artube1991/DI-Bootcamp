import React from "react";

import data from "./data.json";

export class Example1 extends React.Component {
    constructor(props) {
        super(props);
        console.log("props: ", props);
    }

    render() {
        const media = data.SocialMedias.map((item) => <li>{item}</li>);
        return media;
    }
}

export default Example1