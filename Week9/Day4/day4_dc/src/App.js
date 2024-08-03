import React from "react";
import { Form } from "./components/form.js"

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: null };
  }
async componentDidMount() {
  const url = "http://localhost:5000/api/hello";
  try {
    const resTXT = await fetch(url);
    const res = await resTXT.text();
    this.setState({ msg: res });
  } catch(error) {
    console.error(error);
  }
}
render() {
  return (
    <>
    <h1>{this.state.msg}</h1>
    <Form setMessage={ (msg) => this.setState({ msg })} />
    </>
  );
}
}

export default App;
