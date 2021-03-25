import React from "react";
import "./card.css";

function Card({ path, title, description, link, linkGit }) {
  return (
    <div className="card">
      <img src={path} className="card-image-top" alt=""></img>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="row justify-content-around">
          <a
            href={link}
            className="btn btn-outline-secondary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>

          <a
            href={linkGit}
            className="btn btn-outline-secondary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
