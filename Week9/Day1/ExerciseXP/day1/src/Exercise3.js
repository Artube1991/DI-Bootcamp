import React from 'react';
class Exercise extends React.Component {
    render() {
        return (
            <>
        <h1>This a header</h1>
        <p>This is a paragraph</p>
        <a href="https://t.me/artube">This is a link</a>
        <h2>This is a form:</h2>
        <form>
        <label for="myform">Enter your name: </label>
        <br/>
        <input type="text" name="myform"/>
        <input type="submit" name="myform" value="Submit"/>
        <br/>
        <img src="https://miro.medium.com/v2/1%2Ax0d41ns8PTQZz4a3VbMrBg.png" width="600" height="337" alt="React Image"></img>
        </form>
        </>
        );
    }
};

export default Exercise