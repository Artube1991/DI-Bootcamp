import React from "react";

import data from "./data.json";

export class PostList extends React.Component {
    constructor(props) {
        super(props);
        console.log("props: ", props);
    }

render() {
    return <center>
    <h1>Hi This is a Title</h1>
    <h2>{data[0].title}</h2>
    <p>{data[0].content}</p>
    <h2>{data[1].title}</h2>
    <p>{data[1].content}</p>
    </center>
}
}

export default PostList

