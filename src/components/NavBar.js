import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = () => (
  <nav className="navbar is-transparent">
    <NavLink to="/" className="navbar-brand">
      <img
        src="https://octicons.github.com/img/og/mark-github.png"
        alt="Github Logo"
        width="150"
        height="150"
      />
    </NavLink>
    <h1 className="headerText">GitHub Repository Search</h1>
  </nav>
);

export default NavBar;
