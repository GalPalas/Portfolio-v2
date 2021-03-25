import React from "react";

function Card({ path, title, description, link, linkGit }) {
  return (
    <div className="card">
      <img src={path} className="card-image-top" alt=""></img>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="row justify-content-around">
          <a href={link} className="btn btn-outline-secondary">
            Live Demo
          </a>

          <a href={linkGit} className="btn btn-outline-secondary">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
