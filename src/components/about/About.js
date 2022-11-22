import React from "react";
import "./about.css";
import Resume from "../../img/resume.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="about">
      <h1 className="about-me">About me</h1>
      <h2 className="subtitle">Hello, my name is Evan Chang</h2>
      <div className="about-content">
        <p className="bio">
          I am currently an undergraduate student at the University of
          Washington studying Informatics. Specifically, I am interested in
          studying human-computer interactions to build on my knowledge of UI/UX
          design. I am interested in full-stack development and machine
          learning, so I have been self-learning in and out of the class.
        </p>
      </div>
      <div className="contact">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-content">evanc108@gmail.com | evanc9@uw.edu</p>
        <p className="contact-content">425-394-6451</p>
        <p className="contact-content">University of Washington</p>
        <div className="social-container">
        <a href="https://github.com/evanc108" className="github">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
        <a
          href="https://www.linkedin.com/in/evan-chang-3b7a2724a/"
          className="email"
        >
          <FontAwesomeIcon icon={faEnvelope} size="3x" />
        </a>
        <a
          href="https://www.linkedin.com/in/evan-chang-3b7a2724a/"
          className="linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
      </div>
      </div>
      
      <div className="resume">
        <img src={Resume} />
      </div>
    </div>
  );
};

export default About;
