import React from "react";
import { Element, Link } from "react-scroll";
const About = () => {
  return (
    <>
      <Element name="about" className="about-container d-flex flex-column">
        <h3 className="text-white text-center">About me</h3>
        <div className="about-container-inner d-flex flex-column text-white">
          <div className="introduction-container d-flex flex-column gap-2">
            <span className="fs-4 fw-semibold">Introduction</span>
            <span>
              Hello, I'm Rishav, a dedicated React developer with a passion for
              coding and design. I love creating engaging user experiences and
              bringing ideas to life through clean, efficient code. With a keen
              eye for detail and a commitment to excellence, I strive to deliver
              high-quality solutions that exceed expectations. Let's collaborate
              and turn your vision into reality!
            </span>
          </div>
          <div className="passion-container d-flex flex-column gap-2">
            <span className="fs-4 fw-semibold">Passion</span>
            <span>Coding and design are not just my profession; they are my passion. I find joy in the process of crafting elegant code and creating visually stunning designs that captivate users. I believe that great software is not only functional but also beautiful, and I strive to achieve this balance in all my projects. Whether I'm debugging a complex algorithm or refining a user interface, I approach each task with enthusiasm and a commitment to excellence. My passion drives me to continuously learn and grow in my craft, ensuring that I always deliver the best possible results.</span>
          </div>
          <div className="approach-container d-flex flex-column gap-2">
            <span className="fs-4 fw-semibold">My approach</span>
            <span>I prioritize writing clean, well-structured code that is easy to maintain and scale. This ensures that my applications perform optimally and are future-proof. I embrace new technologies and techniques to push the boundaries of what is possible. I am constantly exploring new ways to enhance user experiences and streamline development processes, along with that I believe that the best results are achieved through collaboration and open communication. I work closely with clients and team members to understand their needs and deliver solutions that exceed expectations  I am committed to continuous learning and improvement. I actively seek feedback and stay updated with the latest trends and developments in the field of React development to enhance my skills and knowledge..</span>
          </div>
        </div>
        <Link to="contact" className="btn btn-outline-light w-25 mx-auto my-3">Contact me</Link>
      </Element>
    </>
  );
};

export default About;
