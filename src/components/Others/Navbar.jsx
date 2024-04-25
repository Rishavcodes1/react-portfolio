import React, { useEffect } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const Navbar = () => {
  const toggleNavbar = () => {
    let navbar = document.getElementsByClassName("my-navbar")[0];
    navbar.classList.toggle("my-navbar-expanded");
  };
  return (
    <>
      <nav className="my-navbar">
        <div className="my-container d-flex align-items-center justify-content-between">
          <div className="branding">
            <h3>rishavcodes</h3>
            <i className="fa-solid fa-circle"></i>
            <i
              className="fa-solid fa-bars-staggered fa-lg ms-auto"
              onClick={toggleNavbar}
            ></i>
          </div>
          <div className="navbar-links-container">
            <Link to="home" className="active">
              Home
            </Link>
            <Link to="about">About</Link>
            <Link to="skills">Skills</Link>
            <Link to="contact">Contact</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
