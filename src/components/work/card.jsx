import React from "react";

function Card({ path, title, description, link }) {
  return (
    <div class="card">
      <img src={path} class="card-image-top" alt=""></img>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
        <a href={link} class="btn btn-outline-secondary">
          See Project
        </a>
      </div>
    </div>
  );
}

export default Card;
