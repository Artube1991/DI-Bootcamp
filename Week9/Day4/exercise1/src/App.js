import React from 'react';
import { Routes, Route, Link, NavLink } from "react-router-dom";
import ErrorBoundary from './components/ErrorBoundary.component';

const Home = () => (
    <h1>Home</h1>
);

const Profile = () => (
    <h1>Profile Screen</h1>
);

const Shop = () => {
    throw new Error('An error has ocurred')
};

function App() {
return (
  <div>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/shop">Shop</NavLink>
      </li>
    </ul>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/shop" element={<ErrorBoundary><Shop /></ErrorBoundary>} />
    </Routes>
  </div>
  );
};

//I tried to wrap the each component in ErrorBoundary like I did it with Shop, but it switched off all the links in Routes. 

export default App;
