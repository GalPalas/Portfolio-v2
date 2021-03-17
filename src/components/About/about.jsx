import React from "react";
import "./about.css";

function About() {
  return (
    <div>
      <div className="container-fluid padding">
        <div className="row padding">
          <div className="col-lg-6 pt-4">
            <h2>I'am Gal</h2>
            <p>
              Full Stack developer, capable of developing web platforms from
              scratch to production, with full responsiveness and preformance
            </p>
            <p>
              I focus on planning, designing and developing both Back-End and
              Front-End. Hands-on a wide range of technologies and platforms:
              JaveScript, CSS, HTML, React, Redux, PostgreSQL, Node.js and Adobe
              Photoshop.
            </p>
            <br></br>
          </div>
          <div className="col-lg-6">
            <img src="/images/GP.png" className="img-fluid" alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
