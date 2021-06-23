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
          <NavLink to="/newjourney">New Journey</NavLink>
        </li>
        <li>
          <NavLink to="/journeysinprogress">Journeys In Progress</NavLink>
        </li>
        <li>
          <NavLink to="/completedjourneys">Completed Journeys</NavLink>
        </li>
        <li>
          <NavLink to="/favoritedparks">Favorited Parks</NavLink>
        </li>
        {/* <li style="float:right">
          <a class="active" href="#about">About</a>
          <NavLink to="/logout">Logout</NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default NavBar;