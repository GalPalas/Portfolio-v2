import React from "react";
import Header from "./Home/header";
import About from "./About/about";
import Skills from "./Skills/skills";
import Work from "./work/work";
import Footer from "./Contact/footer";

function Pages() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
}

export default Pages;
