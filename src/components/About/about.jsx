import React from "react";
import "./about.css";

function About() {
  return (
    <div>
      <div className="container-fluid padding">
        <div className="row welcome text-center">
          <div className="col-12">
            <h1 className="display-4">About</h1>
          </div>
          <hr></hr>
        </div>
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
            <a
              href="/documents/Cover_Letter_Gal_Palas.docx"
              class="btn btn-primary btn-lg"
            >
              Cover Letter <i class="fas fa-arrow-circle-down"></i>
            </a>
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
