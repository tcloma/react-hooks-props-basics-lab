import React from "react";
import Links from "./Links";

function About({ userdata }) {

  return (
    <div id="about">
      <h2>About Me</h2>
      {(userdata.bio === "") ? console.log('Bio is empty') : <p>{userdata.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links userdata={userdata} />
    </div>
  );
}

export default About;
