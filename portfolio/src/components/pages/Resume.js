import React from "react";

function Resume(props) {
  return (
    <div>
      <h2>Resume</h2>
      <div>
      <a
          href="https://drive.google.com/file/d/1bFjdyjCeZouiSrhNvLjoH2hMBxn7EaZN/view?usp=sharing"
          target="_blank"
        >
          Download My Resume
        </a>
      </div>
      <div>
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
      <div>
        <h3>Backend</h3>
        <ul>
          <li>Node.js</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <div>
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

  );
}

export default Resume;
