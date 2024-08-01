import React from "react";

import data from "./data.json";

export class PostList extends React.Component {
    constructor(props) {
        super(props);
        console.log("props: ", props);
    }

render() {
    return <>
    <h1>Hi This is a Title</h1>
    <h2>{data[0].title}</h2>
    <p>{data[0].content}</p>
    </>
}
}

export default PostList

