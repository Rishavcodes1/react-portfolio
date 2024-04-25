import React from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const Navbar = () => {
  return (
    <>
      <nav className="my-navbar">
        <div className="container">
          <div className="branding">
            <h3>rishavcodes</h3>
            <i className="fa-solid fa-circle"></i>
          </div>
          <div className="navbar-links-container">
            <Link to="home" className='active'>Home</Link>
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
