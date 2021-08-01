import React from "react";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiStackoverflow } from "react-icons/si";

function Footer(props) {
  return (
    <div>
      <div>
        <a href="https://github.com/JMan4342" target="_blank">
          <SiGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/joseph-manning-570636211/" target="_blank">
          <SiLinkedin />
        </a>
      </div>
      <div>
        <a href="https://stackoverflow.com/users/15818570/joseph-manning" target="_blank">
          <SiStackoverflow />
        </a>
      </div>

    </div>
  );
}

export default Footer;
