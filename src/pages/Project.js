import React from "react";
import HodWiki from "../assets/ProjectsCover/hod.png";
import MotionScope from "../assets/ProjectsCover/deadlift.png";
import "../style/projects.css";
import { HashLink } from "react-router-hash-link";

const Project = () => {

  const projects = [
    {
      name: "House of Dragons Wiki Page",
      finished: true,
      image: HodWiki,
      alt: "House of Dragons Fan Page",
      skills: ["HTML", "CSS", "React"],
      repo: "https://github.com/LEPII/houseOfDragonsFanPage",
      link: "http://houseofdragonsfp.com/",
      about:
        "A House of Dragons fan-made wiki offers a comprehensive digital hub, with in-depth summaries, insightful analyses, and a vibrant community, inviting fans to explore the captivating world of the popular book series.",
    },
    {
      name: "MotionScope",
      finished: false,
      image: MotionScope,
      alt: "MotionScope",
      skills: ["Typescript", "Firebase", "React"],
      about:
        "The fitness app combines workout tracking, personalized program creation, and educational resources on form, programming, weight loss, and overall health, empowering users to achieve their fitness goals while gaining valuable statistical insights.",
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
                        <ul>
                          <li className="project__skill" key={index}>
                            {skills}
                          </li>
                        </ul>
                      </>
                    );
                  })}
                </div>
                <h2> {project.name}</h2>
                <p className="project__about">{project.about}</p>
                {project.finished ? (
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
                ) : (
                  <p>Coming Soon</p>
                )}
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
          <button className="project__button"> Start a Conversation </button>
        </HashLink>
      </div>
    </section>
  );
};

export default Project;
