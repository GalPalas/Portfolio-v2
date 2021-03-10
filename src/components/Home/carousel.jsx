import React from "react";
import "./carousel.css";

function Carousel() {
  return (
    <div>
      <div id="slides" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#slides" data-slide-to="0" className="active"></li>
          <li data-target="#slides" data-slide-to="1"></li>
          <li data-target="#slides" data-slide-to="2"></li>
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/bbb.jpg" alt=""></img>
            <div className="carousel-caption">
              <h1 className="display-2">Gal Palas</h1>
              <h3>Full-Stack Developer</h3>
              <button type="button" className="btn btn-outline-light btn-lg">
                <i class="fab fa-github"></i>
                GitHub
              </button>
              <button type="button" className="btn btn-outline-light btn-lg">
                <i class="fab fa-linkedin"></i>
                LinkedIn
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/aaa.jpg" alt=""></img>
          </div>
          <div className="carousel-item">
            <img src="/images/ccc.jpg" alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;