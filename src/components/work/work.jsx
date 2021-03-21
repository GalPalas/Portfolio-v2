import React from "react";
import Card from "./card";

function Work() {
  return (
    <div className="container-fluid padding">
      <div className="row welcome text-center">
        <div className="col-12">
          <h1 className="display-4">My Projects</h1>
        </div>
        <hr></hr>
      </div>
      <div className="row padding">
        <div class="col-md-4">
          <Card
            path="/images/pizza-background.jpg"
            title="Pizza restaurant"
            description="This project demonstrates a site of a pizza restaurant, it was built in React used styled components."
            link="/#"
          />
        </div>
        <div class="col-md-4">
          <Card
            path="/images/travel-background.jpg"
            title="TRVL"
            description="This project demonstrates a website of a travel equipment store based on travel recommendations, it was built in React."
            link="/#"
          />
        </div>
        <div class="col-md-4">
          <Card
            path="/images/portfolio-version1-background.jpg"
            title="My Portfolio"
            description="This project demonstrates my portfolio in its first version, it was built from scratch to showcase my design abilities and experience."
            link="/#"
          />
        </div>
      </div>
      <div className="row padding">
        <div class="col-md-4">
          <Card
            path="/images/vidly-background.jpg"
            title="Vidly"
            description="This project demonstrates the frontend of Vidley, an imaginary video rental app, the project was built in React combining different libraries"
            link="/#"
          />
        </div>
        <div class="col-md-4">
          <Card
            path="/images/shopping-cart-background.png"
            title="Shopping Cart"
            description="This project demonstrates an e-commerce site dealing with fashion and cosmetics, the site is built in React in combination with Redux."
            link="/#"
          />
        </div>
      </div>
    </div>
  );
}

export default Work;
