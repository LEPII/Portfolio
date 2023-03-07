import React, { useState } from "react";
import ByrdSong from "../assets/ProjectsCover/ByrdSong.png";
import Link from "../assets/Logos/Link.png";
import GitHub from "../assets/Logos/GitHub__icon.png";
import "../style/projects.css";

const Project = () => {
  const [slideIndex] = useState(1);

  const projects = [
    {
      name: "ByrdSong",
      image: ByrdSong,
      alt: "ByrdSong",
      repo: "https://github.com/LEPII/ByrdSong",
      link: "https://byrdsong1.herokuapp.com",
      about:
        "A simplified music streaming platform allowing users to find and listen to their favorite music with a seamless and easy to use interface.",
    },
  ];

  return (
    <section className="project__container"  id="section2">
   
        {projects.map((project, index) => {
          return (
            <div className="project__showcase__container">
              <h1> Projects </h1>

              <div className="project__mini__container">
                <div className="projects__titles">
                  <h2>{project.name}</h2>
                  <h3>{project.about}</h3>
                </div>
                <div className="project__proof">
                   <img
                    src={project.image}
                    className="project__image"
                    alt={project.alt}
                  /><div className="project__links">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="project__link"
                    >
                   GitHub
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project__link"
                    >
 Website                   </a>
                  </div>
                 
                </div>
              </div>
            </div>
          );
        })}
  
    </section>
  );
};

export default Project;
