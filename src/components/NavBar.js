import React from 'react';
import '../css/NavBar.css';

const NavBar = () => (
  <nav className="navbar is-transparent">
    <img
			src="https://octicons.github.com/img/og/mark-github.png"
      alt="Github Logo"
      width="100"
      height="100"
    />
    <h1 className="headerText">GitHub Repository Search</h1>
  </nav>
);

export default NavBar;
