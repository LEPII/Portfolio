import React from "react";
import { Button } from "../components/Button";
import "../style/skills.css";
import "../style/button.css";

const Skills = () => {
  const skills = [
    { name: "Javascript" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "React" },
    { name: "Node.Js" },
    { name: "Express" },
    { name: "NoSQL Database" },
    { name: "SQL Database" },
    { name: "GraphQL" },
    { name: "Prisma" },
    { name: "Version Control" },
    { name: "AWS" },
  ];

  return (
    <div className="skills__container">
      <h1> Skills </h1>
      <div className="skills_mini_container">
        {skills.map((skill, index) => (
          <div key={index} className="skills__list">
            <ul>
              <li className="skills__items">{skill.name}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
