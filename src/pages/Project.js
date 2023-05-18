import React, {useState} from "react";
import HodWiki from "../assets/ProjectsCover/hod.png";
import "../style/projects.css";
import { HashLink } from "react-router-hash-link";

const Project = () => {

  const [cardOpen, useCardOpen] = useState(false)

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
    {
      name: "MotionScope",
      image: HodWiki,
      alt: "House of Dragons Fan Page",
      skills: ["Typescript", "Firebase", "React"],
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
      <div className="project__cards">
        {projects.map((project, index) => {
          return (
            <div
              className="project__card"
              data-aos="fade-up"
              data-aos-duration="6000"
              key={index}
            >
              <img
                src={project.image}
                className="project__image"
                alt={project.alt}
                height="200px"
                width="300px"
              />
              <div className="project__card__body">
                <div className="project__skills">
                  {project.skills.map((skills, index) => {
                    return (
                      <>
                        <span className="project__skill" key={index}>
                          {skills}
                        </span>
                      </>
                    );
                  })}
                </div>
                <h2> {project.name}</h2>
                <p>{project.about}</p>
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
      </div>
      <div className="project__contact">
        <h2> Interested In collaborating? </h2>
        <p>
          I'd love to discuss anything from consultation, partnership
          opportunities, Web3 and Blockchain, or just say hi!
        </p>
        <HashLink to="/contact/#top">
          <button className="convo__button"> Start a Conversation </button>
        </HashLink>
      </div>
    </section>
  );
};

export default Project;
