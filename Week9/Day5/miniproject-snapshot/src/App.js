import React from 'react';
import Photobox from './components/PhotoBox';
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>SnapShot</h1>
      <form className="searchbox">
        <input type="text" placeholder="Find any picture you want!" />
        <button type="submit" className="searchbutton">
        <svg height="32" width="32">
          <path
          d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
          fill="#ffffff"
          fill-rule="evenodd">
            </path>
          </svg>
        </button>
      </form>
    <Link to="/mountains">Mountains   </Link>
    <Link to="/beachs">Beachs   </Link>
    <Link to="/birds">Birds   </Link>
    <Link to="/food">Food</Link>
    <Routes>
      <Route path="/mountains" request="mountains"/>
      <Route path="/beachs" request="beachs"/>
      <Route path="/birds" request="birds"/>
      <Route path="/food" request="food"/>
    </Routes>
    <Photobox />
    </div>
  );
}

export default App;
