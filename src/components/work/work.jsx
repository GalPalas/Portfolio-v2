import React from "react";
import Card from "./card";

function Work() {
  return (
    <div className="container-fluid padding">
      <div className="row welcome text-center">
        <div className="col-12">
          <h1 className="display-4">Projects</h1>
          <p className="lead">
            Here is a selected pick of some of my work. Take a look if you got a
            spare time!
          </p>
        </div>
        <hr></hr>
      </div>
      <div className="row padding">
        <div className="col-md-4">
          <Card
            path="/images/pizza-background.jpg"
            title="Pizza restaurant"
            description="This project demonstrates a site of a pizza restaurant, it was built in React used styled components."
            link="https://gal-pizza-planet.netlify.app/"
            linkGit="https://github.com/GalPalas/pizza-website"
          />
        </div>
        <div className="col-md-4">
          <Card
            path="/images/travel-background.jpg"
            title="TRVL"
            description="This project demonstrates a website of a travel equipment store based on travel recommendations, it was built in React."
            link="https://gal-travel.netlify.app/"
            linkGit="https://github.com/GalPalas/travel-website"
          />
        </div>
        <div className="col-md-4">
          <Card
            path="/images/portfolio-version1-background.jpg"
            title="My Portfolio"
            description="This project demonstrates my portfolio in its first version, it was built from scratch to showcase my design abilities and experience."
            link="https://gal-palas-portfolio.netlify.app/"
            linkGit="https://github.com/GalPalas/Portfolio"
          />
        </div>
      </div>
      <div className="row padding">
        <div className="col-md-4">
          <Card
            path="/images/vidly-background.jpg"
            title="Vidly"
            description="This project demonstrates the frontend of Vidley, an imaginary video rental app, the project was built in React combining different libraries"
            link="https://gal-vidly.netlify.app/movies"
            linkGit="https://github.com/GalPalas/Vidly-FrontEnd"
          />
        </div>
        <div className="col-md-4">
          <Card
            path="/images/shopping-cart-background.png"
            title="Shopping Cart"
            description="This project demonstrates an e-commerce site dealing with fashion and cosmetics, the site is built in React in combination with Redux,mongoDB... ."
            link="https://galpalas-shopping-cart.netlify.app/"
            linkGit="https://github.com/GalPalas/shopping-cart-website"
          />
        </div>
        <div className="col-md-4">
          <Card
            path="/images/galpalas-netlify-app.png"
            title="Portfolio v2"
            description="My portfolio, built from scratch to showcase my design abilities and experience. Full compatibility with desktops, tablets and laptops."
            link="https://galpalas.netlify.app/"
            linkGit="https://github.com/GalPalas/Portfolio-v2"
          />
        </div>
      </div>
    </div>
  );
}

export default Work;
