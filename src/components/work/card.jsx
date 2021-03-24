import React from "react";

function Card({ path, title, description, link }) {
  return (
    <div className="card">
      <img src={path} className="card-image-top" alt=""></img>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} className="btn btn-outline-secondary">
          See Project
        </a>
      </div>
    </div>
  );
}

export default Card;
