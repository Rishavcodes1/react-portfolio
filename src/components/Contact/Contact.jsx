import React, { useState } from "react";
import { Element } from "react-scroll";


const Contact = () => {
  const [input_data, setinput_data] = useState([]);
  const input_names = ["name", "email", "subject"];
  const formHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    setinput_data([name, email, subject]);
    let modal = document.getElementById("modal");
    modal.showModal();
  };
  const closeDialog = () => {
    let modal = document.getElementById("modal");
    modal.close();
  };
  return (
    <Element name="contact" className="contact-container position-relative">
      <dialog id="modal" className="text-white w-25">
        <div className="d-flex flex-column gap-3">
          {input_data.map((data, index) => (
            <span>
              {input_names[index]}: {data}
            </span>
          ))}
          <button className="btn btn-light ms-auto" onClick={closeDialog}>
            Close
          </button>
        </div>
      </dialog>
      <h3 className="text-white text-center">Contact me</h3>
      <div className="container-fluid p-0 py-3 d-flex justify-content-between">
        <div className="d-flex flex-column text-white gap-2 justify-content-center">
          <span className="fs-5 fw-semibold">NOTE</span>

          <span className="w-75">
            This form will not work here as I haven't hosted this site. It will
            simply show a dialog box on submit. also inputs are not validated even empty form will show dialog
          </span>
          <span className="mt-3 fw-semibold">
            For contacting me, please email me at the address mentioned above.
          </span>
        </div>
        <form onSubmit={formHandler} className="text-white d-flex flex-column p-3 gap-4">
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
          <button type="submit" className="btn btn-primary mt-3 mx-auto">
            Sumbit
          </button>
        </form>
      </div>
    </Element>
  );
};

export default Contact;
