import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardText,
  CRow,
  CCol,
  CCardTitle,
  CCardFooter,
  CCardGroup,
  CCardHeader,
} from "@coreui/bootstrap-react";
import Maze from "../../img/maze.png";
import Web from "../../img/web.png";
import GreenSprout from "../../img/greensprout.png";
import App from "../../img/app.png";
import "./projects.css";

const ProjectItem = () => {
  return (
    <div className="projects">
      <h1 className="projects-title">Projects</h1>
      <CCard className="maze">
        <CCardHeader className="i">
          <CCardTitle className="a">Maze Generator</CCardTitle>
        </CCardHeader>
        <CCardImage orientation="top" img src={Maze} />
        <CCardBody>
          <CCardText className="b">
            This program generates and draws a random 30x30 maze making sure
            there is only one entrance, one exit, and one correct path to reach
            the end of the maze
            <p className="language">
              Languages/Technologies: C++, OpenCV Library
            </p>
          </CCardText>
        </CCardBody>
        <CCardFooter>
        <small className="text-medium-emphasis">
            <a href="https://github.com/evanc108/maze" target="_blank" rel="noreferrer">
              <button className="links">Code</button>
            </a>
          </small>
        </CCardFooter>
      </CCard>
      <CCard className="green">
        <CCardHeader className="i">
          <CCardTitle className="a">GreenSprout (Dubhacks 2022)</CCardTitle>
        </CCardHeader>
        <CCardImage orientation="top" img src={GreenSprout} />
        <CCardBody>
          <CCardText className="b">
            This mobile app asks the user to enter their car model and miles
            driven to calculate the greenhouse gas emissions resulting from
            their driving. Data of car models, car mileage, and greenhouse gas
            emissions are stored and gathered in a database
            <p className="language">
              Languages/Technologies: Java, SQLite, Android Studio
            </p>
          </CCardText>
        </CCardBody>
        <CCardFooter>
        <small className="text-medium-emphasis">
            <a href="https://github.com/evanc108/Dubhacks2022" target="_blank" rel="noreferrer">
              <button className="links">Code</button>
            </a>
          </small>
        </CCardFooter>
      </CCard>
      <CCard className="web">
        <CCardHeader className="i">
          <CCardTitle className="a">Tennis Website</CCardTitle>
        </CCardHeader>
        <CCardImage orientation="top" img src={Web} />
        <CCardBody>
          <CCardText className="b">
            This React app website is a single-page application used to
            advertise my private tennis lesson business. This site uses EmailJs
            to automate emails sent directly through the website
            <p className="language">
              Languages/Technologies: Javascript, CSS, HTML, ReactJs, EmailJs
            </p>
          </CCardText>
        </CCardBody>
        <CCardFooter>
        <small className="text-medium-emphasis">
            <a href="https://github.com/evanc108/TennisWebsite" target="_blank" rel="noreferrer">
              <button className="links">Code</button>
            </a>
          </small>
        </CCardFooter>
      </CCard>
      <CCard className="web">
        <CCardHeader className="i">
          <CCardTitle className="a">ToDo List</CCardTitle>
        </CCardHeader>
        <CCardImage orientation="top" img src={App} />
        <CCardBody>
          <CCardText className="b">
            This mobile app is a todo list that allows the user to add an item,
            mark and item as done, or remove and item by tap holding the item on
            screen.
            <p className="language">
              Languages/Technologies: Dart, Flutter, Android Studio
            </p>
          </CCardText>
        </CCardBody>
        <CCardFooter>
          <small className="text-medium-emphasis">
            <a href="https://github.com/evanc108/ToDoList" target="_blank" rel="noreferrer">
              <button className="links">Code</button>
            </a>
          </small>
        </CCardFooter>
      </CCard>
    </div>
  );
};

export default ProjectItem;
