import React from "react";
import "./home.css";
import Typed from 'react-typed';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1 className="name">Hi, I'm Evan Chang</h1>
        <Typed
          className="typed-text"
          strings={[
            "Software Engineer",
            "Web Developer",
            "University of Washington Student",
          ]}
          typeSpeed={40}
          backSpeed={40}
          loop
        />
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
    </div>
  );
};

export default Home;
