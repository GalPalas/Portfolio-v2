import React from "react";
import Navbar from "./navbar";
import Carousel from "./carousel";
import Jumbotron from "./jumbotron";

function Header() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Jumbotron />
    </div>
  );
}

export default Header;
