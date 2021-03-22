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
            <img src="/images/carousel_image_zero.jpg" alt=""></img>
            <div className="carousel-caption">
              <h1 className="display-2">Gal Palas</h1>
              <h3>Full-Stack Developer</h3>
              <a
                type="button"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light btn-lg"
                href="https://github.com/GalPalas"
              >
                <i className="fab fa-github"></i>
                GitHub
              </a>
              <a
                type="button"
                className="btn btn-outline-light btn-lg"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/gal-palas-84259419a/"
              >
                <i className="fab fa-linkedin"></i>
                LinkedIn
              </a>
            </div>
          </div>
          <div className="carousel-item ">
            <img src="/images/carousel_image_one.jpg" alt=""></img>
            <div className="carousel-caption quotes1">
              <h1>
                “Experience is the name everyone gives to their mistakes.”
              </h1>
              <h3>Oscar Wilde</h3>
            </div>
          </div>
          <div className="carousel-item ">
            <img src="/images/carousel_image_two.jpg" alt=""></img>
            <div className="carousel-caption quotes2">
              <h1>“First, solve the problem. Then, write the code.”</h1>
              <h3>John Johnson</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
