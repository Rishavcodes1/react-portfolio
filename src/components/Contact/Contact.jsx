import React from "react";
import { Element } from "react-scroll";

const Contact = () => {
  const formHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Element name="contact" className="contact-container">
      <h3 className="text-white text-center">Contact me</h3>
      <div className="container-fluid p-0 py-3 d-flex justify-content-between">
        <div className="d-flex flex-column text-white gap-2 justify-content-center">
          <span className="fs-5 fw-semibold">NOTE</span>

          <span>
          This form will not work here as I haven't hosted this site. It will simply show a dialog box on submit.
          </span>
          <span className="mt-3 fw-semibold">For contacting me, please email me at the address mentioned above.</span>
        </div>
        <form onSubmit={formHandler}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="your name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your email"
            />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <textarea name="subject" placeholder="message to send"></textarea>
          </div>
        </form>
      </div>
    </Element>
  );
};

export default Contact;
