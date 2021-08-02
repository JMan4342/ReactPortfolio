import React from "react";
import { SiGithub } from "react-icons/si";
import HairDress_Site from "../../assets/images/HairDress_Site2.jpeg";
import JavaScript_Quiz1 from "../../assets/images/JavaScript_Quiz2.jpeg";
import saved_search_results from "../../assets/images/WeatherApp2.jpeg";
import TechBlog from "../../assets/images/TechBlog2.jpeg";
import NoteTaker from "../../assets/images/NoteTaker2.jpeg";
import WorkPlanner from "../../assets/images/WorkPlanner2.jpeg";
import "../../styles/portfolio.css";

const styles = {
  image: {
    width: "35%",
    height: "35%",
  },
};

function Portfolio(props) {
  return (
    <div className="portfolio">
      <h2 className="m-3">Portfolio</h2>
      <div className="container row justify-content-center card-deck">
        <div className="col card bg-light m-1 pt-2">
          <a
            href="https://jman4342.github.io/Hair-Dresser/Hairdresser.html"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={HairDress_Site}
              alt="Hairdresser Site"
              className="img-fluid"
            />
          </a>
          <div className="container row pt-2" id="app1">
            <h6 className="col title">Hairdresser Webpage</h6>
            <a
              href="https://github.com/JMan4342/Hair-Dresser"
              target="_blank"
              rel="noreferrer"
              className="col"
            >
              <SiGithub style={styles.image} className="icon" />
            </a>
          </div>
        </div>
        <div className="col card bg-light m-1 pt-2">
          <a
            href="https://jman4342.github.io/Weather-Dashboard/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={saved_search_results}
              alt="Weather app"
              className="img-fluid"
            />
          </a>
          <div className="container row pt-2" id="app2">
            <h6 className="col title">Weather Dashboard</h6>
            <a
              href="https://github.com/JMan4342/Weather-Dashboard"
              target="_blank"
              className="col"
              rel="noreferrer"
            >
              <SiGithub style={styles.image} />
            </a>
          </div>
        </div>
        <div class="w-100"></div>
        <div className="col card bg-light m-1 pt-2">
          <a
            href="https://jman4342.github.io/Code-Quiz/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={JavaScript_Quiz1}
              alt="Javascript quiz app"
              className="img-fluid"
            />
          </a>
          <div className="container row pt-2" id="app3">
            <h6 className="col title">JavaScript Quiz</h6>
            <a
              href="https://github.com/JMan4342/Code-Quiz"
              target="_blank"
              rel="noreferrer"
              className="col"
            >
              <SiGithub style={styles.image} />
            </a>
          </div>
        </div>
        <div className="col card bg-light m-1 pt-2">
          <a
            href="https://tech-blog0713.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={TechBlog} alt="Tech blog site" className="img-fluid" />
          </a>
          <div className="container row pt-2" id="app4">
            <h6 className="col title">Technology Blog</h6>
            <a
              href="https://github.com/JMan4342/TechBlog"
              target="_blank"
              rel="noreferrer"
              className="col"
            >
              <SiGithub style={styles.image} />
            </a>
          </div>
        </div>
        <div class="w-100"></div>
        <div className="col card bg-light m-1 pt-2">
          <a
            href="https://note-taker0630.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={NoteTaker} alt="Note Taking app" className="img-fluid" />
          </a>
          <div className="container row pt-2" id="app4">
            <h6 className="col title">Note Taking App</h6>
            <a
              href="https://github.com/JMan4342/NoteTaker"
              target="_blank"
              rel="noreferrer"
              className="col"
            >
              <SiGithub style={styles.image} />
            </a>
          </div>
        </div>
        <div className="col card bg-light m-1 pt-2">
          <a
            href="https://jman4342.github.io/Work-Day-Scheduler/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={WorkPlanner}
              alt="Workday scheduler site"
              className="img-fluid"
            />
          </a>
          <div className="container row pt-2" id="app4">
            <h6 className="col title">Workday Scheduler</h6>
            <a
              href="https://github.com/JMan4342/Work-Day-Scheduler"
              target="_blank"
              rel="noreferrer"
              className="col"
            >
              <SiGithub style={styles.image} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
