import React from "react";

function Home({ userdata }) {
  
  return (
    <div id="home">
      <h1 style={{ color: userdata.color }}>
        {userdata.name} is a Web Developer from {userdata.city}
      </h1>
    </div>
  );
}

export default Home;
