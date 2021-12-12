import React, {useState } from "react";
import CreateCollab from "../assets/Projects/C&C.png";
import ByrdSong from "../assets/Projects/ByrdSong.png";
import ButtonSlide from "../components/ButtonSlider";
import Link from "../assets/Logos/Link.png";
import GitHub from "../assets/Logos/GitHub__icon.png";
import "../style/slider.css";
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
    // {
    //   name: "Create and Collaborate",
    //   image: CreateCollab,
    //   alt: "Create and Collaborate",
    //   repo: "https://github.com/LEPII/create-collaborate-v2",
    //   link: "https://create-and-collab.herokuapp.com",
    //   about:
    //     "A specialized platform for people in the entertainment industry to share their work, network, and expand on their portfolio by finding their next gig!",
    // },
  ];

  const nextSlide = () => {
    if (slideIndex !== projects.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === projects.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(projects.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

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
                  {/* <ButtonSlide moveSlide={nextSlide} direction={"next"} />
                  <ButtonSlide moveSlide={prevSlide} direction={"prev"} /> */}

                  <h2>{project.name}</h2>
                  <h3>{project.about}</h3>
                </div>
              </div>
            </div>
          );
        })}

        {/* <div className="container-dots">
          {Array.from({ length: 2 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Project;
