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
          <a href="/#">
            <i class="fab fa-facebook-square"></i>
          </a>
          <a href="/#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/#">
            <i className="fab fa-google-plus-g"></i>
          </a>
          <a href="/#">
            <i className="fab fa-github-square"></i>
          </a>
          <a href="/#">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Connect;
