import React from "react";
import "../../styles/resume.css";

function Resume(props) {
  return (
    <div className="resume">
      <h2 className="m-3">Resume</h2>
      <div className="container justify-content-center">
        <div className="container row justify-content-around">
          <div className="col">
            <h3>Frontend</h3>
            <ul>
              <li>ReactJS</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>Handlebars</li>
            </ul>
          </div>
          <div className="col">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="col">
            <h3>Tools</h3>
            <ul>
              <li>GitHub</li>
              <li>APIs</li>
              <li>Insomnia</li>
              <li>Sequelize</li>
              <li>Mongoose.js</li>
            </ul>
          </div>
        </div>
        {/* <div className="col" id="resumeLink"> */}
        <a
          href="https://drive.google.com/file/d/1bFjdyjCeZouiSrhNvLjoH2hMBxn7EaZN/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="col text-center link"
        >
          Download My Resume
        </a>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Resume;
