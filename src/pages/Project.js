import React from "react";
import HodWiki from "../assets/ProjectsCover/hod.png";
import "../style/projects.css";
import { HashLink } from "react-router-hash-link";

const Project = () => {
  
  const projects = [
    {
      name: "House of Dragons Wiki Page",
      image: HodWiki,
      alt: "House of Dragons Fan Page",
      skills: ["HTML", "CSS", "React"],
      repo: "https://github.com/LEPII/houseOfDragonsFanPage",
      link: "http://houseofdragonsfp.com/",
      about:
        "A House of Dragons fan-made wiki as a comprehensive resource for fans to explore the world of the popular book series, providing detailed summaries, analyses, and community-driven content.",
    },
  ];

  return (
    <section className="project__container" id="pro_top">
      <h1
        className="project__header"
        data-aos="zoom-out-up"
        data-aos-duration="3000"
      >
        PROJECTS
      </h1>
      {projects.map((project) => {
        return (
          <div
            className="project__card"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            <img
              src={project.image}
              className="project__image"
              alt={project.alt}
            />
            <div className="project__card__body">
              <h2> {project.name}</h2>
              <div className="project__skills">
                {project.skills.map((skills) => {
                  return (
                    <>
                      <span className="project__skill">{skills}</span>
                    </>
                  );
                })}
              </div>
              <h3>{project.about}</h3>
              <div className="project__links">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="project__link"
                >
                  Visit Github
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project__link"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        );
      })}
      <div className="project__contact">
        <h2> Interested In collaborating? </h2>
        <span>
          I'd love to discuss anything from consultation, partnership
          opportunities, Web3 and Blockchain, or just say hi!
        </span>
        <HashLink to="/contact/#top">
          <button className="convo__button"> Start a Conversation </button>
        </HashLink>
      </div>
    </section>
  );
};

export default Project;
