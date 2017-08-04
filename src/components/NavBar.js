import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = () => (
  <div className="navigation">
    <section className="navbar">
      <NavLink to="/" className="gitLogo">
        <img
          src="http://www.iconsdb.com/icons/preview/white/github-10-xxl.png"
          alt="Github Logo"
          width="50"
          height="50"
        />
      </NavLink>
      <div className="headerText">
        <h1 >GitHub Repository Search</h1>
      </div>
      <img
        className="degree53Logo"
        src="https://pbs.twimg.com/profile_images/832273144731820032/JKY2RxOq_400x400.jpg"
        alt="Degree53 Logo"
        width="auto"
      />
    </section>

  </div>
);

export default NavBar;
