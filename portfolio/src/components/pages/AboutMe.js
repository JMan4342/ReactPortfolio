import React from "react";
import profile_pic from "../../assets/images/profile_pic.jpg";

function AboutMe(props) {
  return (
    <div>
      <img src={profile_pic} alt="profile picture" id="profilePic" />
      <p>
        My name is Joseph Manning and am a junior web developer with a
        background in team management and marketing.
      </p>
      <p>
        The skills that I have learned as a student from the Trilogy Coding
        Bootcamp offered through the University of Arizona will supplement my
        degree in business marketing that is also from the University of Arizona
        and my professional experience.
      </p>
      <p>
        As a team lead for the merchandising team for LEGO Systems, Inc., I have
        been able to work and manage in a diverse team environment both locally
        and nationally through the remote mediums. My priorities were ensuring
        the proper development of the merchandising team and ensuring that the
        company goals were achieved through innovative and strategic planning.
      </p>
      <p>
        With technology becoming more readily available to the rest of the world
        and people looking towards websites and applications to help them
        navigate their everyday lives, I am looking to bring that customer
        focused attention to my projects. When you explore my portfolio, you
        will be able to see this focus and the different ways I have gone about
        to achieve this. As I complete new projects, you will be able to find
        them in my portfolio page.
      </p>
    </div>
  );
}

export default AboutMe;
