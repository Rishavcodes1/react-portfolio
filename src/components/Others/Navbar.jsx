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
  window.addEventListener("scroll", () => {
    let navbar = document.querySelector(".my-navbar");
    if (window.scrollY > 150) {
      navbar.style.backgroundColor = "#2d2d2d";
      navbar.style.boxShadow = "3px 10px 20px #00000033";
    } else {
      navbar.style.backgroundColor = "transparent";
      navbar.style.boxShadow = "none";
    }
  });
  const handleSetActive = (to) => {

  };
  return (
    <>
      <nav className="my-navbar text-white">
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
            <Link
              to="home"
              spy={true}
              duration={500}
              onSetActive={handleSetActive}
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              duration={500}
              onSetActive={handleSetActive}
            >
              About
            </Link>
            <Link
              to="skills"
              spy={true}
              duration={500}
              onSetActive={handleSetActive}
            >
              Skills
            </Link>
            <Link
              to="contact"
              spy={true}
              duration={500}
              onSetActive={handleSetActive}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
