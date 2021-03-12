import React from "react";
import "./threeColumnSection.css";
import Pi from "./pi";

function ThreeColumnSection() {
  return (
    <div className="container-fluid padding">
      <div className="row text-center padding">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <i class="fab fa-html5"></i>
          <h3>HTML5</h3>
          <Pi percentage="90" bg="90" />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <i class="fab fa-css3-alt"></i>
          <h3>CSS3</h3>
          <Pi percentage="85" bg="85" />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4">
          <i class="fab fa-js"></i>
          <h3>JavaScript</h3>
          <Pi percentage="75" bg="75" />
        </div>
      </div>
      <hr className="my-4"></hr>
    </div>
  );
}

export default ThreeColumnSection;
