import React from "react";
import "../style/skills.css";

const Skills = () => {
  const skills = [
    { name: "Javascript" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "React" },
    { name: "Node.JS" },
    { name: "Express" },
    { name: "NoSQL" },
    { name: "SQL" },
    { name: "GraphQL" },
    { name: "Prisma" },
    { name: "Version Control" },
    { name: "AWS" },
  ];

  return (
    <div
      className="skills__container"
      id="section3"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="skills_mini_container">
        <h1 className="skills__header">Skills</h1>
        <div className="skills_button_container">
          {skills.map((skill, index) => (
            <div key={index} className="skills__list" data-aos="fade-up-left">
              <button className="skills__button" data-aos="fade-up-left">
                {skill.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
