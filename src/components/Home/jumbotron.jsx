import React from "react";
import Bounce from "react-reveal/Bounce";
import "./jumbotron.css";

function Jumbotron() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row jumbotron">
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
            <Bounce left>
              <p className="lead">
                Hello my name is Gal and I am a web developer. Here you can see
                my resume. <strong>Click</strong> the download button
              </p>
            </Bounce>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
            <a href="/documents/Gal_Palas_CV.docx" download>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg"
              >
                Resume <i className="fas fa-arrow-circle-down"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
