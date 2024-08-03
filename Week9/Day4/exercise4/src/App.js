import './App.css';
import React from 'react';
const mySite = "https://webhook.site/bb72e77c-a3db-48b9-8cbd-b711a4a3b4d1"


export class App extends React.Component {
  handleClick = async() => {
    try {
    const body = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }
    const res = await fetch(mySite, options);
    console.log("response: ", res)
    } catch (err) {
      console.error(err)
    }
  }
  render() {
  return (
    <button onClick={this.handleClick}>Press me to post some data</button>
  )
}
}

export default App;
