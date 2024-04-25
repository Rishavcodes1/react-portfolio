import React from "react";
import ProfilePhoto from "./ProfilePhoto";
import { Element } from "react-scroll";
import resume from "../../Assets/rishav_sakariya_resume.pdf";

const Home = () => {
  const downloadResume = (path, downloadAs) => {
    const aTag = document.createElement("a");
    aTag.href = path;
    aTag.setAttribute("download", downloadAs);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <>
      <Element name="home" className="hero-outer">
        <div className="hero">
          <div className="profile-photo-container">
            <ProfilePhoto></ProfilePhoto>
          </div>
          <div className="name-container d-flex align-items-center">
            <span>Rishav Sakariya</span>
          </div>
          <div className="status-container d-flex flex-column">
            <span>open to</span>
            <span>work</span>
          </div>
          <div className="email-container social-links-container">
            <a
              href="mailto:rishav.sakariya@gmail.com"
              target="_blank"
              className="d-flex align-items-center gap-2"
            >
              <i className="fa-solid fa-envelope"></i>
              <span>Email</span>
            </a>
          </div>
          <div className="linkedin-container social-links-container">
            <a
              href="https://www.linkedin.com/in/rishav-sakariya"
              target="_blank"
              className="d-flex align-items-center gap-2"
            >
              <i className="fa-brands fa-linkedin-in"></i>
              <span>Linkedin</span>
            </a>
          </div>
          <div className="github-container social-links-container">
            <a
              href="https://github.com/Rishavcodes1"
              target="_blank"
              className="d-flex align-items-center gap-2"
            >
              <i className="fa-brands fa-github"></i>
              <span>Github</span>
            </a>
          </div>
          <button
            onClick={() => {
              downloadResume(resume, "Rishav Sakariya Resume");
            }}
            className="btn btn-primary download-cv-container"
          >
            Download Resume
          </button>

          <div className="summary-container d-flex flex-column">
            <span>Summary</span>
            <span>
              A
              <span className="fw-semibold text-primary">
                {" "}
                React developer{" "}
              </span>
              with six months of hands-on experience, having knowledge of wide
              range of frontend technologies
            </span>
          </div>
        </div>
      </Element>
    </>
  );
};

export default Home;
