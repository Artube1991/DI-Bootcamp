import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Beachs from './components/Beachs';
import Birds from './components/Birds';
import Food from './components/Food';
import Mountains from './components/Mountains';
import Photobox from './components/PhotoBox';

import './App.css';

export const SearchContext = React.createContext();

function App() {
  const [searchCTXT, setSearchCTXT] = useState(``);
  const [query, setQuery] = useState('');

  return (
    <SearchContext.Provider value={[searchCTXT, setSearchCTXT]}>
    <div className="App">
      <h1>SnapShot</h1>
      <form className="searchbox"> 
        <input 
        type="text"
        placeholder="Find any picture you want!" 
        onInput={(e) => setQuery(e.target.value)}
        height={"32px"}
        />
        <Link to="/search">
        <button type="submit" className="searchbutton" onClick={(e) => setSearchCTXT(query)}>
        <svg height="32" width="32">
          <path
          d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
          fill="#ffffff"
          fill-rule="evenodd">
            </path>
          </svg>
        </button>
        </Link>
      </form>
      <div className="headers">
      <Link to="/mountains" className="links">Mountains   </Link>
      <Link to="/beachs" className="links">Beachs   </Link>
      <Link to="/birds" className="links">Birds   </Link>
      <Link to="/food" className="links">Food</Link>
    </div>
    <Routes>
      <Route path="/mountains" element={<Mountains />}/>
      <Route path="/beachs" element={<Beachs />}/>
      <Route path="/birds" element={<Birds />} />
      <Route path="/food" element={<Food />}/>
      <Route path="/search" element={<Photobox />}/>
    </Routes>
      </div>
      </SearchContext.Provider>
  );
}

export default App;
