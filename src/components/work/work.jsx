import React from "react";

function Work() {
  return (
    <div className="container-fluid padding">
      <div className="row welcome text-center">
        <div className="col-12">
          <h1 className="display-4">Work</h1>
        </div>
        <hr></hr>
      </div>
      <div className="row padding">
        <div class="col-md-4">
          <div class="card">
            <img src="/images/team1.png" class="card-image-top" alt=""></img>
            <div class="card-body">
              <h5 class="card-title">John Doe</h5>
              <p class="card-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
                voluptatibus.
              </p>
              <a href="/#" class="btn btn-outline-secondary">
                See Profile
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src="/images/team2.png" class="card-image-top" alt=""></img>
            <div class="card-body">
              <h5>Mary Jo</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
                voluptatibus.
              </p>
              <a href="/#" class="btn btn-outline-secondary">
                See Profile
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src="/images/team3.png" class="card-image-top" alt=""></img>
            <div class="card-body">
              <h5>Phil Ho</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
                voluptatibus.
              </p>
              <a href="/#" class="btn btn-outline-secondary">
                See Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
