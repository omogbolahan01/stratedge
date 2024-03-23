// Header component

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="site-logo">
        <Link to="/">
          {" "}
          <h3>StratEdge</h3>
        </Link>
      </div>
      {/* <nav>
        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className={`nav-items ${menuOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyles : null)}
            onClick={closeMenu}
            className="nav-item"
          >
            Blog
          </NavLink>
          <NavLink
            to="our"
            style={({ isActive }) => (isActive ? activeStyles : null)}
            onClick={closeMenu}
            className="nav-item"
          >
            Our Causes
          </NavLink>
          <NavLink
            to="team"
            style={({ isActive }) => (isActive ? activeStyles : null)}
            onClick={closeMenu}
            className="nav-item"
          >
            Teams
          </NavLink>
          <NavLink
            to="about"
            style={({ isActive }) => (isActive ? activeStyles : null)}
            onClick={closeMenu}
            className="nav-item"
          >
            About
          </NavLink>

          <NavLink
            to="contact"
            style={({ isActive }) => (isActive ? activeStyles : null)}
            onClick={closeMenu}
            className="nav-item"
          >
            Contact Us
          </NavLink>
      
        </div>
      </nav> */}
    </header>
  );
}
