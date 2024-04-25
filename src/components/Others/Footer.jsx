import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-white py-3 d-flex flex-column">
        <div className="container d-flex flex-column align-items-center gap-3 pb-3">
          <span>Other Social media links</span>
          <div className="social-links-container d-flex gap-3">
            <a href="https://www.facebook.com/rishavcodes1" target="_blank">
              <i className="fa-brands fa-facebook"></i>
              <span>facebook</span>
            </a>
            <a href="https://www.instagram.com/rishavcodes" target="_blank">
              <i className="fa-brands fa-instagram"></i>
              <span>instagram</span>
            </a>
            <a href="https://twitter.com/rishavcodes" target="_blank">
              <i className="fa-brands fa-x-twitter"></i>
              <span>twitter</span>
            </a>
          </div>
        </div>
        <span className="mx-auto my-2">&copy; 2024 rishavcodes. All Rights Reserved.</span>
      </footer>
    </>
  );
};

export default Footer;
