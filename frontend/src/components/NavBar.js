import React from 'react';
import '../NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/allparks">All Parks</NavLink>
        </li>
        <li>
          <NavLink to="/visitedparks">Visited Parks</NavLink>
        </li>
        <li>
          <NavLink to="/favoritedparks">Favorited Parks</NavLink>
        </li>
        <li>
          <NavLink to="/logout">Logout</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;