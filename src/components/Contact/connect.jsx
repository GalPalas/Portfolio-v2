import React from "react";
import "./connect.css";

function Connect() {
  return (
    <div className="container-fluid padding">
      <div className="row text-center padding">
        <div className="col-12">
          <h2>Connect</h2>
        </div>
        <div className="col-12 social padding">
          <a
            href="https://www.facebook.com/profile.php?id=100000538719566"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook-square"></i>
          </a>
          <a
            href="https://twitter.com/PalasGal"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-google-plus-g"></i>
          </a>
          <a
            href="https://github.com/GalPalas"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/gal-palas-84259419a/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Connect;
