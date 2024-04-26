import React from "react";
import reactLogo from "../../Assets/react.png";
import reduxLogo from '../../Assets/redux.png'
import pythonLogo from '../../Assets/python.png'
import bootstrapLogo from '../../Assets/bootstrap.png'
import cssLogo from '../../Assets/css.png'
import jsLogo from '../../Assets/js.png'

import {Element} from 'react-scroll'

const Skills = () => {
  const skills = [
    {
      skillName: "React",
      skillDescription: "Proficient in building dynamic and interactive web applications using React. Experienced in state management, component lifecycle, and routing.",
      skillImage: reactLogo,
    },
    {
      skillName: "Redux",
      skillDescription: "Skilled in implementing Redux for managing application state, including actions, reducers, and the store.",
      skillImage: reduxLogo,
    },
    {
      skillName: "Javascript",
      skillDescription: "Strong understanding of core JavaScript concepts such as ES6 features, asynchronous programming, and functional programming.",
      skillImage: jsLogo,
    },
    {
      skillName: "Python",
      skillDescription: "I started my programming journey with python, currently having strong understanding of its syntax, data structures, and libraries.Skilled in implementing object-oriented programming principles and leveraging Python's versatility for various tasks",
      skillImage: pythonLogo,
    },
    {
      skillName: "CSS",
      skillDescription: "Proficient in implementing CSS animations and transitions to enhance user interactions and experiences. Experienced in building layouts that adapt seamlessly to different screen sizes and devices.",
      skillImage: cssLogo,
    },
    {
      skillName: "Bootstrap",
      skillDescription: "Experienced in using Bootstrap's  components to create modern and visually appealing designs. Skilled in using Bootstrap to meet specific project requirements while maintaining code efficiency.",
      skillImage: bootstrapLogo,
    }
  ];
  return (
    <>
      <Element name="skills" className="skills-container">
        <h3 className="text-white text-center">Skills</h3>
        <div className="skills-container-inner text-white">
          {skills.map((skill) => (
            <div className="skill d-flex flex-column align-items-center">
              <img src={skill.skillImage} alt="" />
              <span className="fs-3 fw-semibold">{skill.skillName}</span>
              <span>{skill.skillDescription}</span>
            </div>
          ))}
        </div>
      </Element>
    </>
  );
};

export default Skills;
