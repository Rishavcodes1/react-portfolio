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
      skillDescription: "",
      skillImage: reactLogo,
    },
    {
      skillName: "Redux",
      skillDescription: "",
      skillImage: reduxLogo,
    },
    {
      skillName: "Javascript",
      skillDescription: "",
      skillImage: jsLogo,
    },
    {
      skillName: "Python",
      skillDescription: "",
      skillImage: pythonLogo,
    },
    {
      skillName: "CSS",
      skillDescription: "",
      skillImage: cssLogo,
    },
    {
      skillName: "Bootstrap",
      skillDescription: "",
      skillImage: bootstrapLogo,
    }
  ];
  return (
    <>
      <Element name="skills" className="skills-container">
        <h3 className="text-white text-center">Skills</h3>
        <div className="skills-container-inner">
          {skills.map((skill) => (
            <div className="skill">
              <img src={skill.skillImage} alt="" />
              <span className="fs-3 fw-semibold">{skill.skillName}</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, molestias ipsa laudantium mollitia eveniet sapiente illo neque, temporibus, consequatur tempore reiciendis doloremque commodi eius laboriosam?</span>
            </div>
          ))}
        </div>
      </Element>
    </>
  );
};

export default Skills;
