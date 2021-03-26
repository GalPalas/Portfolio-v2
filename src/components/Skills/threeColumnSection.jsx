import React from "react";
import Bounce from "react-reveal/Bounce";
import Pi from "./pi";
import "./threeColumnSection.css";

function ThreeColumnSection() {
  return (
    <div className="container-fluid padding">
      <div className="row text-center padding">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <i className="fab fa-html5"></i>
          <Bounce left cascade>
            <h3>HTML5</h3>
            <Pi percentage="90" bg="90" />
          </Bounce>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4">
          <i className="fab fa-css3-alt"></i>
          <h3>CSS3</h3>
          <Pi percentage="85" bg="85" />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4">
          <i className="fab fa-js"></i>
          <Bounce right cascade>
            <h3>JavaScript</h3>
            <Pi percentage="75" bg="75" />
          </Bounce>
        </div>
      </div>
      <hr className="my-4"></hr>
    </div>
  );
}

export default ThreeColumnSection;
