import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    // color: "#161616",
  };

  const redirectToFacebook = () => {
    window.location.href =
      "https://www.facebook.com/profile.php?id=your-profile-id";
  };

  const redirectToTwitter = () => {
    window.location.href =
      "https://www.twitter.com/profile.php?id=your-profile-id";
  };

  const redirectToInstagram = () => {
    window.location.href =
      "https://www.instagram.com/profile.php?id=your-profile-id";
  };
  return (
    <footer>
      <div className="footer-all">
        <div className="footer-first">
          <Link to="/">
            <h3>StratEdge</h3>
          </Link>
        </div>
        <div className="footer-second">
          <div className="footer-flex">
            <div className="footer-p">
              <h3>Company</h3>
              <NavLink
                to="about"
                style={({ isActive }) => (isActive ? activeStyles : null)}
                className="navv-item"
              >
                About
              </NavLink>
              <NavLink
                to="service"
                style={({ isActive }) => (isActive ? activeStyles : null)}
                className="navv-item"
              >
                Service
              </NavLink>
              <NavLink
                to="project"
                style={({ isActive }) => (isActive ? activeStyles : null)}
                className="navv-item"
              >
                Project
              </NavLink>
              <NavLink
                to="team"
                style={({ isActive }) => (isActive ? activeStyles : null)}
                className="navv-item"
              >
                Team
              </NavLink>
              <NavLink
                to="career"
                style={({ isActive }) => (isActive ? activeStyles : null)}
                className="navv-item"
              >
                Career
              </NavLink>
              <NavLink
                to="Contact"
                style={({ isActive }) => (isActive ? activeStyles : null)}
                className="navv-item"
              >
                Contact
              </NavLink>
            </div>
            <div className="footer-p">
              <h3>Project</h3>
              <NavLink
                to="terms"
                style={({ isActive }) => (isActive ? activeStyles : null)}
                className="navv-item"
              >
                Terms & condition
              </NavLink>
              <NavLink
                to="privacy"
                style={({ isActive }) => (isActive ? activeStyles : null)}
                className="navv-item"
              >
                Privacy policy
              </NavLink>
              <NavLink
                to="project"
                style={({ isActive }) => (isActive ? activeStyles : null)}
                className="navv-item"
              >
                Project
              </NavLink>
              <NavLink
                to="team"
                style={({ isActive }) => (isActive ? activeStyles : null)}
                className="navv-item"
              >
                Team
              </NavLink>
              <NavLink
                to="career"
                style={({ isActive }) => (isActive ? activeStyles : null)}
                className="navv-item"
              >
                Career
              </NavLink>
              <NavLink
                to="Contact"
                style={({ isActive }) => (isActive ? activeStyles : null)}
                className="navv-item"
              >
                Contact
              </NavLink>
            </div>

            <div className="footer-p">
              <h3>Socials</h3>
              <p
                className="my-paragraph paraa"
                onClick={redirectToFacebook}
                style={{ cursor: "pointer" }}
              >
                Facebook
              </p>
              <p
                className="my-paragraph paraa"
                onClick={redirectToTwitter}
                style={{ cursor: "pointer" }}
              >
                Twitter
              </p>
              <p
                className="my-paragraph paraa"
                onClick={redirectToInstagram}
                style={{ cursor: "pointer" }}
              >
                Instagram
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
