import React from "react";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiStackoverflow } from "react-icons/si";

const styles = {
  image: {
    width: "80%",
    height: "80%",
  },
};

function Footer(props) {
  return (
    <div className="">
      <div className="row align-items-center justify-content-center m-4">
        <div className="col-1">
          <a href="https://github.com/JMan4342" target="_blank">
            <SiGithub style={styles.image}/>
          </a>
        </div>
        <div className="col-1">
          <a
            href="https://www.linkedin.com/in/joseph-manning-570636211/"
            target="_blank"
          >
            <SiLinkedin style={styles.image}/>
          </a>
        </div>
        <div className="col-1">
          <a
            href="https://stackoverflow.com/users/15818570/joseph-manning"
            target="_blank"
          >
            <SiStackoverflow style={styles.image}/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
