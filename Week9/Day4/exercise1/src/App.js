import React from 'react';
import { Routes, Route, Link, NavLink } from "react-router-dom";

const Home = () => (
    <h1>Home</h1>
);

const Profile = () => (
    <h1>Profile Screen</h1>
);

const Shop = () => (
    <h1>Shop</h1>
);

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
      <Route path="/shop" element={<Shop />} />
    </Routes>
  </div>
  );
};

export default App;
