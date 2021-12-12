import React from "react";
import Colorado from "../assets/Personal/Colorado.png";
import Winterfell from "../assets/Personal/Winterfell.png";
import "../style/personal.css";

const Personal = () => {
  return (
    <div className="personal__container" id="section4">
      <div className="personal__mini__container">
        <img
          src={Winterfell}
          alt="Baby Me"
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-anchor-placement="top"
          data-aos-offset="-500"
        />
        <div className="personal__text">
          <h2 className="personal__header">Luis Perez</h2> <br />
          <h3 className="personal__title">Full Stack Software Engineer </h3>
          <br />
          <h3 className="personal__about">
            My passion for web development came from when I recruited for
            Software Engineers which finally inspired me to transition careers
            by taking a coding bootcamp at Wyncode Academy where I found myself
            really enjoying working in all areas of the stack while learning and
            building upon user friendly and efficient websites. I intend to
            immerse myself within the role and become a key Full Stack Engineer.
          </h3>
          <br />
          <div className="personal__experience__container">
            <div className="personal__education"></div>
            <h3> Education </h3>
            <h4> Wyncode Academy </h4>
            <h5> 2020 - Full Stack Web Development </h5>
            <br />
            <ul>
              <li>
                Trained in programming languages, web frameworks, libraries,
                version control and database management.
              </li>
              <li>
                Worked in a team setting with RESTful API on various projects.
              </li>
              <li>
                Cooperated with UX/UI teams on web frame, features design and
                build websites according to the design on Figma.
              </li>
            </ul>
            <br />
            <div className="personal__experience"></div>

            <h3> Experience </h3>
            <h4> Wood Jobs / PMAA / Cross Country Nurses </h4>

            <h5> 2017-2020 - Talent Acquisition Manager </h5>
            <br />
            <ul>
              <li>
                Performed full cycle recruiting on 15-20 job requisitions,
                averaging 5-10 hires per month.
              </li>
              <li>
                Sourced high level candidate resumes from mass mailing, employee
                referrals, and Internet job-sites (Monster, Dice, Linkedin).
              </li>
              <li>
                Utilized internet resume databases, employee referrals, cold
                calling, and social networking as well as other creative
                sourcing.
              </li>
              <li>
                Documented all recruitment related activity in accordance with
                the established expectations.
              </li>
              <li>
                Advised management on staffing/sourcing practices, identify
                talent pool and/or geographic constraints providing creative
                solutions.
              </li>
            </ul>
          </div>
        </div>

        <img
          src={Colorado}
          alt="snowboarding"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-offset="-300"
        />
      </div>
    </div>
  );
};

export default Personal;
