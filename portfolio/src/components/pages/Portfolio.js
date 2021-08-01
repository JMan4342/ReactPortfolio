import React from "react";
import { SiGithub } from "react-icons/si";
import HairDress_Site from "../../assets/images/HairDress_Site.jpeg";
import JavaScript_Quiz1 from "../../assets/images/JavaScript_Quiz1.jpeg";
import saved_search_results from "../../assets/images/saved_search_results1.jpeg";
import TechBlog from "../../assets/images/TechBlog.jpeg";

function Portfolio(props) {
  return (
    <div>
      <h2>Portfolio</h2>
      <div>
        <h3>Hairdresser Webpage</h3>
        <a
          href="https://jman4342.github.io/Hair-Dresser/Hairdresser.html"
          target="_blank"
        >
          <img src={HairDress_Site} />
        </a>
        <div id="app1">
          <a href="https://github.com/JMan4342/Hair-Dresser" target="_blank">
            <SiGithub />
          </a>
        </div>
      </div>
      <div>
        <h3>Weather Dashboard</h3>
        <a href="https://jman4342.github.io/Weather-Dashboard/" target="_blank">
          <img src={saved_search_results} />
        </a>
        <div id="app2">
          <a
            href="https://github.com/JMan4342/Weather-Dashboard"
            target="_blank"
          >
            <SiGithub />
          </a>
        </div>
      </div>
      <div>
        <h3>JavaScript Quiz</h3>
        <a href="https://jman4342.github.io/Code-Quiz/" target="_blank">
          <img src={JavaScript_Quiz1} />
        </a>
        <div id="app3">
          <a href="https://github.com/JMan4342/Code-Quiz" target="_blank">
            <SiGithub />
          </a>
        </div>
      </div>
      <div>
        <h3>Technology Blog</h3>
        <a href="https://tech-blog0713.herokuapp.com/" target="_blank">
          <img src={TechBlog} />
        </a>
        <div id="app3">
          <a href="https://github.com/JMan4342/TechBlog" target="_blank">
            <SiGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;