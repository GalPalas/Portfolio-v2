import React from "react";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

function WelcomeSection() {
  return (
    <div className="container-fluid padding">
      <div className="row welcome text-center">
        <div className="col-12">
          <Fade top>
            <h1 className="display-4">Skills</h1>
          </Fade>
        </div>
        <hr></hr>
        <Bounce right cascade>
          <div className="col-12">
            <p className="lead">
              I can describe myself as autodidact, Responsible, creative with
              excellent interpersonal skills. High self-learning ability,
              organized team player who thrives under pressure, with a can do
              attitude. Have a very high work ethic and loves to delve and
              explore.
            </p>
          </div>
        </Bounce>
      </div>
    </div>
  );
}

export default WelcomeSection;
