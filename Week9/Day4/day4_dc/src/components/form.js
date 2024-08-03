import React from "react";

export class Form extends React.App {
    // constructor(props) {
    //   super(props)
    // }
  
  submit = async (e) => {
    e.preventDefault();
    const msgIN = document.getElementById("input");
    const msg = msgIN.value;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    body: JSON.stringify({ msg })
  };
  const url = "https://localhost:5000/api/world";
  try {
    const resJSON = await fetch(url, options);
    const res = await resJSON.json();
    this.props.setMessage(res.msg);
    msgIN.value = "";
  } catch (err) {
    console.error(err);
  }
};
  
  render() {
    return (
    <form onSubmit={this.submit}>
      <input type="text" placeholder="Type here a post" id="input" />
      <input type="submit" value="Submit"/>
    </form>
  );
  }
}

export default Form