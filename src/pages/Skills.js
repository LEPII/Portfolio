import React from "react";
import "../style/skills.css";

const Skills = ({ skillsRef }) => {
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
    { name: "UI-UX Design" },
    { name: "Animations" },
  ];

  return (
    <section
      className="skills__container"
      data-aos="fade-up"
      data-aos-duration="6000"
      data-aos-delay="500"
      ref={skillsRef}
    >
      <h1 className="skills__header" data-aos="zoom-in-right">
        SKILLS
      </h1>
      <div className="skills__list">
        {skills.map((skill, index) => (
          <span
            className="skills__button"
            key={index}
            data-aos="fade-up"
            data-aos-delay="800"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
