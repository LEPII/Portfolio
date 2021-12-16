import React, {useState } from "react";
import ByrdSong from "../assets/ProjectsCover/ByrdSong.png";
import Link from "../assets/Logos/Link.png";
import GitHub from "../assets/Logos/GitHub__icon.png";
import "../style/projects.css";

const Project = ({ buttonRef }) => {
  const [slideIndex, setSlideIndex] = useState(1);

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
    <section className="project__container" ref={buttonRef} id="section2">
      <div className="project__mini__container">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className={
                slideIndex === index + 1 ? "slide active_anim" : "slide"
              }
            >
              <div className="project__showcase__container">
                <h1> Projects </h1>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="project__links"
                >
                  <img src={GitHub} alt="GitHub__Logo" />
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project__links"
                >
                  <img src={Link} alt="Link__Logo" />
                </a>
                <div className="image_container">
                  <img
                    src={project.image}
                    className="project__image"
                    alt={project.alt}
                  />
                  <h2>{project.name}</h2>
                  <h3>{project.about}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
