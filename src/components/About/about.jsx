import React from "react";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import "./about.css";

function About() {
  return (
    <div>
      <div className="container-fluid padding">
        <div className="row welcome text-center">
          <div className="col-12">
            <Fade top>
              <h1 className="display-4">About</h1>
            </Fade>
          </div>
          <hr></hr>
        </div>
        <div className="row padding">
          <Bounce left cascade>
            <div className="col-lg-6 pt-4">
              <h2>I'am Gal</h2>
              <p>
                Full Stack developer, capable of developing web platforms from
                scratch to production, with full responsiveness and preformance
              </p>
              <p>
                I focus on planning, designing and developing both Back-End and
                Front-End. Hands-on a wide range of technologies and platforms:
                JaveScript, CSS, HTML, React, Redux, PostgreSQL, Node.js and
                Adobe Photoshop.
              </p>

              <br></br>
              <a
                href="/documents/Cover_Letter_Gal_Palas.docx"
                className="btn btn-primary btn-lg"
                download
              >
                Cover Letter <i className="fas fa-arrow-circle-down"></i>
              </a>
            </div>
          </Bounce>
          <div className="col-lg-6">
            <img src="/images/GP.png" className="img-fluid" alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
